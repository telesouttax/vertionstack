"""
Gera a imagem de compartilhamento (public/og-image.png).

É o que aparece quando alguém manda vertionstack.com no WhatsApp. A versão
antiga era da identidade escura antiga e ainda dizia "Automação" — palavra que
saiu da marca. Esta sai na identidade atual: branco, roxo e preto.

As fontes não são aproximações: saem do cache que o next/font baixa em
.next/**/static/media. Por isso é preciso ter rodado `npm run dev` ou
`npm run build` pelo menos uma vez antes.

Uso:  python scripts/gerar-og.py
Saída: public/og-image.png  (1200x630)
"""

import io
import sys
from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from PIL import Image, ImageDraw, ImageFont, ImageOps

RAIZ = Path(__file__).resolve().parent.parent
SAIDA = RAIZ / "public" / "og-image.png"
LOGO = RAIZ / "public" / "logo.png"

LARGURA, ALTURA = 1200, 630
MARGEM = 84

BRANCO = (255, 255, 255)
TINTA = (18, 16, 27)
TINTA_SUAVE = (86, 80, 104)
TINTA_FRACA = (110, 103, 136)
ROXO = (122, 22, 224)
ROXO_VIVO = (149, 0, 255)
GRADE = (245, 244, 248)


# ── fontes ────────────────────────────────────────────────────────────────


def _familia(caminho: Path) -> str:
    fonte = TTFont(str(caminho), lazy=True)
    nomes = {r.nameID: str(r) for r in fonte["name"].names}
    familia = nomes.get(16) or nomes.get(1, "")
    estilo = nomes.get(17) or nomes.get(2, "")
    fonte.close()
    return f"{familia} {estilo}".strip()


def catalogar() -> dict[str, Path]:
    """Mapeia 'familia estilo' -> arquivo woff2, ficando com o maior de cada.

    O next/font gera vários recortes do mesmo arquivo; o maior é o que cobre
    acentuação, que esta imagem usa ("negócio").
    """
    medias = sorted(RAIZ.glob(".next/**/static/media/*.woff2"))
    if not medias:
        sys.exit(
            "Nenhuma fonte em .next/**/static/media.\n"
            "Rode `npm run build` (ou `npm run dev`) uma vez e tente de novo."
        )

    catalogo: dict[str, Path] = {}
    for arquivo in medias:
        try:
            chave = _familia(arquivo)
        except Exception:
            continue
        atual = catalogo.get(chave)
        if atual is None or arquivo.stat().st_size > atual.stat().st_size:
            catalogo[chave] = arquivo
    return catalogo


def carregar(caminho: Path, tamanho: int, peso: int | None = None) -> ImageFont.FreeTypeFont:
    """woff2 -> ttf em memória, fixando o peso quando a fonte é variável."""
    fonte = TTFont(str(caminho))
    if peso is not None and "fvar" in fonte:
        fonte = instancer.instantiateVariableFont(fonte, {"wght": peso})
    fonte.flavor = None

    buffer = io.BytesIO()
    fonte.save(buffer)
    buffer.seek(0)
    return ImageFont.truetype(buffer, tamanho)


# ── desenho ───────────────────────────────────────────────────────────────


def largura_de(d: ImageDraw.ImageDraw, texto: str, fonte, tracking: float) -> float:
    """Largura considerando o espacejamento manual entre letras."""
    total = sum(d.textlength(c, font=fonte) for c in texto)
    return total + tracking * max(len(texto) - 1, 0)


def escrever(d: ImageDraw.ImageDraw, x: float, y: float, texto: str, fonte, cor, tracking=0.0):
    """Escreve letra a letra para conseguir o tracking apertado dos títulos.

    O Pillow não tem letter-spacing; sem isso o título fica mais solto que o
    do site, que usa tracking -0.03em.
    """
    for caractere in texto:
        d.text((x, y), caractere, font=fonte, fill=cor)
        x += d.textlength(caractere, font=fonte) + tracking
    return x


def escrever_linha(d: ImageDraw.ImageDraw, x: float, y: float, pedacos, tracking=0.0):
    """Uma linha feita de pedaços (texto, fonte, cor) — é assim que a palavra
    em serifa itálica entra no meio do título."""
    for texto, fonte, cor in pedacos:
        x = escrever(d, x, y, texto, fonte, cor, tracking)
    return x


def aurora(imagem: Image.Image, centro, raio: int, cor, intensidade: float):
    """Mancha de luz radial — a mesma ideia do utilitário .aurora do site.

    A curva (v/255)**2.6 é o que impede a emenda: sem ela a máscara ainda
    tem valor na borda do quadrado colado, e aparece um retângulo no fundo.
    """
    lado = raio * 2
    gradiente = Image.radial_gradient("L").resize((lado, lado), Image.LANCZOS)
    mascara = ImageOps.invert(gradiente).point(
        lambda v: int(((v / 255) ** 2.6) * 255 * intensidade)
    )
    camada = Image.new("RGB", (lado, lado), cor)
    imagem.paste(camada, (centro[0] - raio, centro[1] - raio), mascara)


def main() -> None:
    catalogo = catalogar()

    def achar(chave: str) -> Path:
        for nome, caminho in catalogo.items():
            if nome.lower().startswith(chave.lower()):
                return caminho
        sys.exit(f"Fonte '{chave}' não encontrada. Achei: {sorted(catalogo)}")

    display = carregar(achar("Bricolage Grotesque"), 74, peso=600)
    serifa = carregar(achar("Instrument Serif Italic"), 78)
    corpo = carregar(achar("Manrope"), 27, peso=500)
    mono = carregar(achar("JetBrains Mono"), 19, peso=500)
    # O wordmark do site é display bold em caixa baixa, não mono em caixa alta.
    marca = carregar(achar("Bricolage Grotesque"), 36, peso=700)

    imagem = Image.new("RGB", (LARGURA, ALTURA), BRANCO)
    d = ImageDraw.Draw(imagem)

    # Malha de fundo, igual ao .bg-grid: 72px, quase imperceptível.
    for x in range(0, LARGURA, 72):
        d.line([(x, 0), (x, ALTURA)], fill=GRADE)
    for y in range(0, ALTURA, 72):
        d.line([(0, y), (LARGURA, y)], fill=GRADE)

    aurora(imagem, (LARGURA - 40, 10), 430, ROXO_VIVO, 0.20)
    aurora(imagem, (LARGURA - 150, ALTURA + 60), 330, ROXO, 0.13)

    # Marca: símbolo + nome, no topo.
    simbolo = Image.open(LOGO).convert("RGBA")
    simbolo = simbolo.crop(simbolo.split()[-1].getbbox())
    altura_simbolo = 58
    simbolo = simbolo.resize(
        (round(simbolo.width * altura_simbolo / simbolo.height), altura_simbolo),
        Image.LANCZOS,
    )
    imagem.paste(simbolo, (MARGEM, MARGEM), simbolo)
    escrever(
        d,
        MARGEM + simbolo.width + 18,
        MARGEM + 6,
        "Vertion Stack",
        marca,
        TINTA,
        tracking=-0.7,
    )

    # Título. "faltava" em serifa itálica roxa — a assinatura da marca.
    tracking = -2.2
    linhas = [
        [("A camada de tecnologia", display, TINTA)],
        [
            ("que ", display, TINTA),
            ("faltava ", serifa, ROXO),
            ("no seu negócio.", display, TINTA),
        ],
    ]

    y = 252
    for pedacos in linhas:
        escrever_linha(d, MARGEM, y, pedacos, tracking)
        y += 86

    # Linha de apoio.
    d.text(
        (MARGEM, y + 16),
        "Atendimento organizado, sistemas, dashboards e sites sob medida.",
        font=corpo,
        fill=TINTA_SUAVE,
    )

    # Rodapé: régua roxa curta e os dados que são fato.
    base = ALTURA - MARGEM - 8
    d.rectangle([MARGEM, base - 38, MARGEM + 72, base - 32], fill=ROXO)
    escrever(d, MARGEM, base, "VERTIONSTACK.COM", mono, ROXO, tracking=3.2)
    rotulo = "RIO DE JANEIRO · TODO O BRASIL"
    largura_rotulo = largura_de(d, rotulo, mono, 3.2)
    escrever(d, LARGURA - MARGEM - largura_rotulo, base, rotulo, mono, TINTA_FRACA, tracking=3.2)

    imagem.save(SAIDA, "PNG", optimize=True)
    print(f"gerado: {SAIDA.relative_to(RAIZ)}  ({SAIDA.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
