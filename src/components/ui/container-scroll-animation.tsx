"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, useReducedMotion } from "framer-motion";

/**
 * Moldura de dispositivo que "deita" e vai se endireitando conforme a página
 * rola — dá a sensação de estar abrindo a tela do projeto na sua frente.
 */
export function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.55], [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.55], [0.92, 1]);
  const lift = useTransform(scrollYProgress, [0, 0.55], [60, 0]);

  const motionStyle = prefersReducedMotion
    ? undefined
    : { rotateX: rotate, scale, translateY: lift };

  return (
    <div ref={containerRef} className="container-x">
      <div className="mx-auto max-w-3xl text-center">{titleComponent}</div>

      <div className="mt-12 sm:mt-16" style={{ perspective: "1200px" }}>
        <motion.div
          style={motionStyle}
          className="relative mx-auto w-full max-w-5xl rounded-panel border border-line bg-white p-2 shadow-lift sm:p-3"
        >
          {/* Halo violeta por trás da moldura */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 -z-10 rounded-panel bg-brand-vivid/15 blur-[70px]"
          />

          {/* Barra da janela */}
          <div className="flex items-center gap-1.5 px-3 py-2.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-carbon-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-carbon-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-carbon-200" />
          </div>

          <div className="aspect-[16/9] w-full overflow-hidden rounded-[1.25rem] border border-line bg-surface-raised">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
