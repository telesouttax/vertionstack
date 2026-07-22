import type { CSSProperties } from "react";

type GlowOptions = {
  /** border-radius in px used by the glow ring — match the element's own rounding. */
  radius?: number;
};

/** Spread onto a card/button to give it the cursor-following spotlight border. */
export function glowProps({ radius = 16 }: GlowOptions = {}) {
  return {
    "data-glow": "",
    style: { "--radius": radius } as CSSProperties,
  };
}
