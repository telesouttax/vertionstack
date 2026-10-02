import type { Config } from "tailwindcss";

/**
 * Tokens em três camadas: primitivo (violet-*, carbon-*) → semântico (brand,
 * ink, surface, line) → componente (classes em globals.css). Nada de hex solto
 * no JSX.
 *
 * Os primitivos são hex fixo. Os semânticos são variáveis CSS, definidas em
 * globals.css para o tema claro e redefinidas no escuro — é isso que faz o
 * site inteiro virar com um atributo no <html>, sem repintar componente.
 *
 * Elas guardam os canais ("18 16 27") e não a cor pronta, senão `bg-ink/15` e
 * `text-white/60` parariam de funcionar.
 */
const comCanais = (variavel: string) => `rgb(var(${variavel}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", '[data-tema="escuro"]'],
  theme: {
    extend: {
      colors: {
        // ── primitivos ────────────────────────────────────────────────
        violet: {
          50: "#F7F2FE",
          100: "#EFE4FD",
          200: "#DFC9FB",
          300: "#C5A1F6",
          400: "#A66DF0",
          500: "#8C3BE8",
          600: "#7A16E0",
          700: "#6410BC",
          800: "#4C0C90",
          900: "#320760",
        },
        carbon: {
          50: "#F8F7FB",
          100: "#F1EFF7",
          200: "#E7E3F1",
          300: "#D5CFE5",
          400: "#A9A2BF",
          500: "#7C7593",
          600: "#565068",
          700: "#3A3549",
          800: "#1E1B29",
          900: "#12101B",
          950: "#0A0910",
        },

        // ── semânticos (viram com o tema) ─────────────────────────────
        brand: {
          DEFAULT: comCanais("--cor-brand"), // ações, links, ícones
          vivid: comCanais("--cor-brand-vivid"), // brilhos e grafismos
          soft: comCanais("--cor-brand-soft"),
          deep: comCanais("--cor-brand-deep"),
        },
        ink: {
          DEFAULT: comCanais("--cor-ink"), // texto principal
          soft: comCanais("--cor-ink-soft"), // texto de apoio
          faint: comCanais("--cor-ink-faint"), // legendas
        },
        surface: {
          DEFAULT: comCanais("--cor-surface"),
          raised: comCanais("--cor-surface-raised"),
          sunken: comCanais("--cor-surface-sunken"),
          invert: comCanais("--cor-surface-invert"), // painel de destaque
        },
        line: {
          DEFAULT: comCanais("--cor-line"),
          strong: comCanais("--cor-line-strong"),
          invert: "rgba(255,255,255,0.12)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        label: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #9500FF 0%, #6410BC 100%)",
        "brand-sheen": "linear-gradient(135deg, #A66DF0 0%, #7A16E0 45%, #4C0C90 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,16,27,0.04), 0 8px 24px -12px rgba(18,16,27,0.10)",
        lift: "0 2px 4px rgba(18,16,27,0.04), 0 24px 48px -24px rgba(76,12,144,0.28)",
        brand: "0 8px 24px -8px rgba(122,22,224,0.45)",
        "brand-lg": "0 20px 60px -20px rgba(122,22,224,0.55)",
      },
      maxWidth: {
        container: "76rem",
      },
      borderRadius: {
        panel: "1.75rem",
      },
      spacing: {
        18: "4.5rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.5" },
          "70%": { transform: "scale(1.4)", opacity: "0" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        "social-neighbor": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "grow-y": {
          "0%": { transform: "scaleY(0.05)", opacity: "0" },
          "100%": { transform: "scaleY(1)", opacity: "1" },
        },
        "sweep-x": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        "social-neighbor": "social-neighbor 0.16s ease-out",
        "grow-y": "grow-y 0.9s cubic-bezier(0.16,1,0.3,1) both",
        "sweep-x": "sweep-x 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
