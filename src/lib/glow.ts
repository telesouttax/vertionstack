import type { CSSProperties } from "react";

type GlowOptions = {
  /** border-radius em px do anel de brilho — precisa bater com o arredondamento do elemento. */
  radius?: number;
};

/** Aplique num card/botão pra ganhar a borda violeta que segue o cursor. */
export function glowProps({ radius = 24 }: GlowOptions = {}) {
  return {
    "data-glow": "",
    style: { "--radius": radius } as CSSProperties,
  };
}
