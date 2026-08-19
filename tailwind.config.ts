import type { Config } from "tailwindcss";

/**
 * Tokens em três camadas: primitivo (violet-*, ink-*) → semântico (brand, ink,
 * surface, line) → componente (classes em globals.css). Nada de hex solto no JSX.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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

        // ── semânticos ────────────────────────────────────────────────
        brand: {
          DEFAULT: "#7A16E0", // ações, links, ícones — 6.9:1 no branco
          vivid: "#9500FF", // igual ao logo: brilhos, gradientes, grafismos
          soft: "#EFE4FD",
          deep: "#4C0C90",
        },
        ink: {
          DEFAULT: "#12101B", // texto principal
          soft: "#565068", // texto de apoio
          faint: "#6E6788", // legendas
        },
        surface: {
          DEFAULT: "#FFFFFF",
          raised: "#F8F7FB",
          sunken: "#F1EFF7",
          invert: "#0A0910",
        },
        line: {
          DEFAULT: "#E7E3F1",
          strong: "#D5CFE5",
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
        "grow-y": "grow-y 0.9s cubic-bezier(0.16,1,0.3,1) both",
        "sweep-x": "sweep-x 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
