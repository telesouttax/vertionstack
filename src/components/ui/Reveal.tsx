"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Atraso em segundos — use pra escalonar itens de uma lista (0.06 por item). */
  delay?: number;
  as?: "div" | "li" | "section";
};

/**
 * Aparição suave quando o bloco entra na tela.
 *
 * A animação em si é CSS (classe .revelar). Aqui o JavaScript só avisa
 * "chegou na tela" e para de observar — nada de conta por quadro.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento || visivel) return;

    // Sem IntersectionObserver, mostra direto em vez de sumir com o conteúdo.
    if (typeof IntersectionObserver === "undefined") {
      setVisivel(true);
      return;
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        setVisivel(true);
        observador.disconnect();
      },
      { rootMargin: "-80px" }
    );

    observador.observe(elemento);
    return () => observador.disconnect();
  }, [visivel]);

  return (
    <Tag
      ref={ref as never}
      style={delay ? ({ "--atraso": `${delay}s` } as React.CSSProperties) : undefined}
      className={cn("revelar", visivel && "revelar--visivel", className)}
    >
      {children}
    </Tag>
  );
}
