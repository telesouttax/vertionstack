"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Expand, Lock, Monitor, Smartphone, X } from "lucide-react";
import { cn } from "@/lib/utils";

type SitePreviewProps = {
  url: string;
  nome: string;
};

/** O "papel" que o iframe pequeno renderiza antes de ser reduzido. */
const PAPEL = { largura: 1440, altura: 900 };

/**
 * Preview de um site entregue. No cartão ele é uma miniatura viva, mas
 * travada; ao clicar abre em tela cheia e aí sim dá pra rolar e clicar.
 *
 * O iframe pequeno só é montado quando o cartão chega perto da tela e só em
 * telas grandes. Carregar cinco sites inteiros de uma vez derruba celular
 * antigo, e no celular a miniatura sairia pequena demais pra valer a pena.
 */
export function SitePreview({ url, nome }: SitePreviewProps) {
  const [aberto, setAberto] = useState(false);
  const [carregarMini, setCarregarMini] = useState(false);
  const [escala, setEscala] = useState(0.3);
  const cartaoRef = useRef<HTMLButtonElement>(null);
  const palcoRef = useRef<HTMLDivElement>(null);

  // Só monta a miniatura perto da tela e a partir de 1024px.
  useEffect(() => {
    const telaGrande = window.matchMedia("(min-width: 1024px)");
    if (!telaGrande.matches) return;

    const alvo = cartaoRef.current;
    if (!alvo) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setCarregarMini(true);
          observador.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observador.observe(alvo);
    return () => observador.disconnect();
  }, []);

  // A miniatura é o site em 1440px reduzido até caber na largura do cartão.
  useEffect(() => {
    const palco = palcoRef.current;
    if (!palco) return;

    const medir = () => setEscala(palco.clientWidth / PAPEL.largura);
    medir();

    const observador = new ResizeObserver(medir);
    observador.observe(palco);
    return () => observador.disconnect();
  }, []);

  const fechar = useCallback(() => setAberto(false), []);

  return (
    <>
      <button
        ref={cartaoRef}
        type="button"
        onClick={() => setAberto(true)}
        aria-label={`Abrir o site da ${nome} em tela cheia`}
        // O cartão vive num painel escuro: o foco e o hover usam violeta
        // claro, que é o que aparece ali. O #7A16E0 sumiria no fundo.
        className="group relative block w-full cursor-pointer overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-card outline-none transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-lift focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      >
        {/* Barra de navegador: dá o contexto de "isto é um site", não uma foto. */}
        <div className="flex items-center gap-2 border-b border-line bg-surface-raised px-3.5 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          </span>
          {/* Barra de endereço sem endereço: ela existe só pra dar a leitura
              de navegador. O domínio em si não interessa a quem visita. */}
          <span
            aria-hidden="true"
            className="ml-1 flex h-[1.625rem] flex-1 items-center gap-1.5 rounded-md bg-surface px-2.5"
          >
            <Lock className="h-2.5 w-2.5 shrink-0 text-ink-faint/60" />
            <span className="h-1 w-16 rounded-full bg-line-strong/70" />
          </span>
        </div>

        <div ref={palcoRef} className="relative aspect-[16/10] overflow-hidden bg-surface-raised">
          {carregarMini ? (
            <iframe
              src={url}
              title={`Prévia do site da ${nome}`}
              loading="lazy"
              tabIndex={-1}
              aria-hidden="true"
              // pointer-events-none: no cartão o site é só vitrine. Clique
              // tem que abrir a tela cheia, não navegar dentro da miniatura.
              className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
              style={{
                width: PAPEL.largura,
                height: PAPEL.altura,
                transform: `scale(${escala})`,
              }}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
              <span className="font-display text-lg font-semibold text-ink">{nome}</span>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-faint">
                Toque para abrir o site
              </span>
            </div>
          )}

          {/* Véu com o convite. Fica discreto até o mouse chegar. */}
          <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-carbon-950/0 p-4 transition-colors duration-300 group-hover:bg-carbon-950/25">
            <span className="flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-surface opacity-0 shadow-lift transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-safe:translate-y-2 motion-safe:group-hover:translate-y-0">
              <Expand className="h-4 w-4" aria-hidden="true" />
              Explorar o site
            </span>
          </div>
        </div>
      </button>

      {aberto && <TelaCheia url={url} nome={nome} aoFechar={fechar} />}
    </>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */

type TelaCheiaProps = {
  url: string;
  nome: string;
  aoFechar: () => void;
};

function TelaCheia({ url, nome, aoFechar }: TelaCheiaProps) {
  const [montado, setMontado] = useState(false);
  const [celular, setCelular] = useState(false);
  const fecharRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMontado(true), []);

  useEffect(() => {
    fecharRef.current?.focus();

    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") aoFechar();
    };
    document.addEventListener("keydown", aoTeclar);

    // Trava a rolagem do site atrás, senão a página de fundo rola junto.
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = overflowAnterior;
    };
  }, [aoFechar]);

  if (!montado) return null;

  const aba =
    "inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-violet-400";

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Site da ${nome}`}
      className="fixed inset-0 z-[90] flex flex-col bg-surface-invert/95 p-3 backdrop-blur-sm sm:p-5"
    >
      {/* O fundo fecha ao clique, como qualquer modal. */}
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={aoFechar}
        className="absolute inset-0 cursor-default"
      />

      <div className="relative mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate font-display text-base font-semibold text-white">{nome}</p>
        </div>

        <div className="flex items-center gap-2">
          {/* Mostrar como fica no celular é metade do argumento de venda. */}
          <div className="hidden rounded-xl border border-white/15 p-1 sm:flex">
            <button
              type="button"
              onClick={() => setCelular(false)}
              aria-pressed={!celular}
              className={cn(aba, celular ? "text-white/60 hover:text-white" : "bg-white/10 text-white")}
            >
              <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
              Computador
            </button>
            <button
              type="button"
              onClick={() => setCelular(true)}
              aria-pressed={celular}
              className={cn(aba, celular ? "bg-white/10 text-white" : "text-white/60 hover:text-white")}
            >
              <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
              Celular
            </button>
          </div>

          {/* Não existe "abrir em nova aba" aqui: fora do sandbox o visitante
              chegaria no WhatsApp do cliente, que é justamente o que a trava
              evita. */}
          <button
            ref={fecharRef}
            type="button"
            onClick={aoFechar}
            aria-label="Fechar"
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white/15 text-white outline-none transition-colors duration-200 hover:border-violet-400 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className={cn(
          // Branco literal: é o fundo que aparece enquanto o site carrega, e
          // os sites embutidos são claros. Com token, piscaria escuro antes.
          "relative mx-auto w-full flex-1 overflow-hidden rounded-2xl border border-white/15 bg-white transition-[max-width] duration-300",
          celular ? "max-w-[420px]" : "max-w-none",
        )}
      >
        {/* O sandbox é o que impede o visitante de cair no WhatsApp do
            cliente. `allow-scripts` + `allow-same-origin` deixam o site
            funcionar inteiro — menu, filtro, rolagem — mas sem
            `allow-popups` nem `allow-top-navigation` o navegador recusa
            abrir aba nova e disparar protocolo externo. Nos cinco sites todo
            link de wa.me é target="_blank" e todo telefone é `tel:`, então
            são exatamente esses dois que ficam inertes.
            Sem `allow-forms`: nenhum formulário de cliente é enviado daqui. */}
        <iframe
          src={url}
          title={`Site da ${nome}`}
          className="h-full w-full border-0"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>

      <p className="relative mt-2.5 text-center font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-white/40">
        Site de verdade · role e explore · os contatos do cliente ficam desativados
      </p>
    </div>,
    document.body,
  );
}
