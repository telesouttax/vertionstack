"""
Gera os ícones de aba e de atalho a partir da logo oficial.

O favicon antigo (public/favicon.svg) era um desenho aproximado: três setas
e o gradiente da paleta velha. Não era a marca. Aqui os ícones saem do
arquivo real, então a aba passa a mostrar a logo de verdade.

Uso:  python scripts/gerar-favicon.py <caminho-da-logo.png>
Saída: src/app/favicon.ico, src/app/icon.png, src/app/apple-icon.png
"""

import sys
from pathlib import Path
from PIL import Image

RAIZ = Path(__file__).resolve().parent.parent
DESTINO = RAIZ / "src" / "app"

# Margem em volta do símbolo. Ícone colado na borda parece maior, mas
# perde definição nos 16px da aba.
MARGEM = 0.06


def preparar(origem: Path) -> Image.Image:
    imagem = Image.open(origem).convert("RGBA")

    # Recorta no símbolo e recompõe centralizado, para a margem ser previsível
    # mesmo que o arquivo de entrada venha com sobra irregular.
    caixa = imagem.split()[-1].getbbox()
    simbolo = imagem.crop(caixa)

    lado = max(simbolo.size)
    total = round(lado / (1 - 2 * MARGEM))
    tela = Image.new("RGBA", (total, total), (0, 0, 0, 0))
    tela.paste(
        simbolo,
        ((total - simbolo.width) // 2, (total - simbolo.height) // 2),
        simbolo,
    )
    return tela


def main() -> None:
    if len(sys.argv) < 2:
        raise SystemExit("informe o caminho da logo: python scripts/gerar-favicon.py logo.png")

    origem = Path(sys.argv[1])
    if not origem.is_file():
        raise SystemExit(f"não achei {origem}")

    marca = preparar(origem)

    # Aba do navegador. O .ico carrega vários tamanhos no mesmo arquivo.
    ico = DESTINO / "favicon.ico"
    marca.resize((256, 256), Image.LANCZOS).save(
        ico, format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)]
    )
    print(f"gerado: {ico.name}")

    # Ícone moderno, que o Next serve como <link rel="icon">.
    png = DESTINO / "icon.png"
    marca.resize((512, 512), Image.LANCZOS).save(png, "PNG", optimize=True)
    print(f"gerado: {png.name}")

    # iOS ignora transparência e pinta de preto por baixo — por isso este
    # tem fundo branco, senão o atalho na tela inicial fica um quadrado preto.
    apple = Image.new("RGBA", marca.size, (255, 255, 255, 255))
    apple.paste(marca, (0, 0), marca)
    caminho_apple = DESTINO / "apple-icon.png"
    apple.convert("RGB").resize((180, 180), Image.LANCZOS).save(
        caminho_apple, "PNG", optimize=True
    )
    print(f"gerado: {caminho_apple.name}")


if __name__ == "__main__":
    main()
