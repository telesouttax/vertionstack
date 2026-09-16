"use client";
import { useEffect, useRef } from "react";
import { thinkingOrbs, type ThinkingOrbState, type ThinkingOrbTheme } from "@/lib/thinking-orbs";
import { cn } from "@/lib/utils";

type ThinkingOrbProps = {
  /** working · searching · solving · listening · composing · shaping */
  state?: ThinkingOrbState;
  /** Tamanho em pixels CSS. 20 e 64 são os desenhos exatos do original. */
  size?: number;
  /** Multiplicador de velocidade: 0.8 mais devagar, 1.25 mais rápido. */
  speed?: number;
  /** "dark" pinta pontos claros (para fundo preto); "light" faz o contrário. */
  theme?: ThinkingOrbTheme;
  paused?: boolean;
  /** Descrição para leitor de tela. Vence o rótulo automático em inglês. */
  label?: string;
  className?: string;
};

/**
 * Orbe animado em canvas, dos "Thinking Orbs" de Jakub Antalik (MIT).
 * O desenho vive em @/lib/thinking-orbs.js; aqui só montamos o canvas e
 * cuidamos do ciclo de vida do React.
 */
export function ThinkingOrb({
  state = "working",
  size = 64,
  speed = 1,
  theme = "dark",
  paused = false,
  label,
  className,
}: ThinkingOrbProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    // O canvas precisa existir no DOM antes de inicializar, por isso roda aqui.
    const destroy = thinkingOrbs(canvas, { state, size, speed, theme, paused });
    return destroy;
  }, [state, size, speed, theme, paused]);

  return (
    <canvas
      ref={ref}
      data-thinking-orb=""
      data-orb-state={state}
      data-orb-size={size}
      data-orb-speed={speed}
      data-orb-theme={theme}
      data-orb-paused={paused ? "true" : "false"}
      role="img"
      aria-label={label ?? "Animação de processamento"}
      className={cn("block", className)}
      style={{ width: size, height: size }}
    />
  );
}
