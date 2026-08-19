"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ShowcaseImage = {
  src: string;
  alt: string;
  label: string;
};

type ScreenshotCarouselProps = {
  images: readonly ShowcaseImage[];
};

const INTERVAL_MS = 5000;

/** Carrossel com abas: troca sozinho, mas o visitante pode escolher o que ver. */
export function ScreenshotCarousel({ images }: ScreenshotCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (images.length <= 1 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [images.length, paused]);

  // Setas do teclado navegam entre as abas, como manda o padrão de tablist.
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      const next =
        e.key === "ArrowRight"
          ? (index + 1) % images.length
          : (index - 1 + images.length) % images.length;
      setIndex(next);
      tabsRef.current[next]?.focus();
    },
    [index, images.length]
  );

  const current = images[index];

  return (
    <div
      className="relative flex h-full w-full flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative min-h-0 flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.alt}
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full object-cover object-top"
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div
          role="tablist"
          aria-label="Escolher exemplo de entrega"
          onKeyDown={onKeyDown}
          className="flex shrink-0 items-center justify-center gap-1.5 border-t border-line bg-white/85 px-3 py-2.5 backdrop-blur"
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              ref={(el) => {
                tabsRef.current[i] = el;
              }}
              type="button"
              role="tab"
              aria-selected={i === index}
              tabIndex={i === index ? 0 : -1}
              onClick={() => setIndex(i)}
              className={cn(
                "cursor-pointer rounded-lg px-3 py-2 text-xs font-medium outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand sm:text-sm",
                i === index
                  ? "bg-brand text-white"
                  : "text-ink-soft hover:bg-violet-50 hover:text-brand"
              )}
            >
              {img.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
