"use client";
import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Atraso em segundos — use pra escalonar itens de uma lista (0.06 por item). */
  delay?: number;
  as?: "div" | "li" | "section";
};

const TAGS = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
} as const;

/**
 * Aparição suave quando o bloco entra na tela. Roda uma vez só e some
 * inteira quando o sistema pede menos movimento.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = TAGS[as];

  if (prefersReducedMotion) {
    return (
      <Tag className={cn(className)} initial={false}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
