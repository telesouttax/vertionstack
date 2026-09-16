/** Tipos para a implementação em JavaScript puro de thinking-orbs.js. */

export type ThinkingOrbState =
  | "working"
  | "searching"
  | "solving"
  | "listening"
  | "composing"
  | "shaping";

export type ThinkingOrbTheme = "auto" | "dark" | "light";

export type ThinkingOrbsOptions = {
  /** Estado padrão dos canvas que não trouxerem data-orb-state. */
  state?: ThinkingOrbState;
  /** Tamanho em pixels CSS. Os desenhos de 20px e 64px são exatos; o meio interpola. */
  size?: number;
  /** Multiplicador sobre a velocidade já calibrada do estado. */
  speed?: number;
  theme?: ThinkingOrbTheme;
  paused?: boolean;
};

/**
 * Inicializa todo canvas com [data-thinking-orb] dentro de `scope`.
 * Devolve a função de limpeza, que deve ser chamada ao desmontar.
 */
export function thinkingOrbs(
  scope?: Document | Element,
  options?: ThinkingOrbsOptions
): () => void;
