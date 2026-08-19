"use client";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { cn } from "@/lib/utils";

export type ShowcaseSlide = {
  id: string;
  label: string;
  /** Descrição lida por leitores de tela — o mockup em si é decorativo. */
  description: string;
  content: ReactNode;
};

type ShowcaseGalleryProps = {
  title: ReactNode;
  slides: ShowcaseSlide[];
  caption?: string;
};

const INTERVAL_MS = 6000;

/** Galeria de exemplos: troca sozinha, mas o visitante pode escolher o que ver. */
export function ShowcaseGallery({ title, slides, caption }: ShowcaseGalleryProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (slides.length <= 1 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [slides.length, paused]);

  // Setas do teclado navegam entre as abas, como manda o padrão de tablist.
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      const next =
        e.key === "ArrowRight"
          ? (index + 1) % slides.length
          : (index - 1 + slides.length) % slides.length;
      setIndex(next);
      tabsRef.current[next]?.focus();
    },
    [index, slides.length]
  );

  const current = slides[index];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <ContainerScroll titleComponent={title}>
        {/* Os slides ficam empilhados e só a opacidade muda. Nada monta ou
            desmonta na troca, então a transição nunca fica pela metade e as
            imagens já entram carregadas. */}
        <div role="img" aria-label={current.description} className="relative h-full w-full">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              aria-hidden={i !== index}
              className={cn(
                "absolute inset-0 transition-opacity duration-500 ease-out",
                i === index ? "opacity-100" : "pointer-events-none opacity-0"
              )}
            >
              {slide.content}
            </div>
          ))}
        </div>
      </ContainerScroll>

      <div className="container-x mt-8 flex flex-col items-center gap-4">
        <div
          role="tablist"
          aria-label="Escolher exemplo de entrega"
          onKeyDown={onKeyDown}
          className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-line bg-white p-1.5 shadow-card"
        >
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              ref={(el) => {
                tabsRef.current[i] = el;
              }}
              type="button"
              role="tab"
              aria-selected={i === index}
              tabIndex={i === index ? 0 : -1}
              onClick={() => setIndex(i)}
              className={cn(
                "min-h-[44px] cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                i === index
                  ? "bg-brand text-white shadow-brand"
                  : "text-ink-soft hover:bg-violet-50 hover:text-brand"
              )}
            >
              {slide.label}
            </button>
          ))}
        </div>

        {caption && (
          <p className="font-mono text-[0.625rem] uppercase tracking-widest text-ink-faint">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
