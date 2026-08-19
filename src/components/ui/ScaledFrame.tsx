"use client";
import { ReactNode, useLayoutEffect, useRef, useState } from "react";

type ScaledFrameProps = {
  /** Largura de referência em que o conteúdo foi desenhado. */
  width: number;
  /** Altura de referência em que o conteúdo foi desenhado. */
  height: number;
  children: ReactNode;
};

/**
 * Desenha o conteúdo num "papel" de tamanho fixo e reduz tudo
 * proporcionalmente pra caber no espaço disponível. Assim o mockup pode ser
 * escrito em pixels normais e continua nítido em qualquer tela.
 */
export function ScaledFrame({ width, height, children }: ScaledFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => setScale(el.clientWidth / width);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      <div
        style={{
          width,
          height,
          transform: `scale(${scale ?? 0})`,
          transformOrigin: "top left",
          visibility: scale === null ? "hidden" : "visible",
        }}
        className="absolute left-0 top-0"
      >
        {children}
      </div>
    </div>
  );
}
