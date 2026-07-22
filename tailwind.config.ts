import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        accent: "#A78BFA",
        ink: "#F5F3FA",
        bg: "#0B0A12",
        surface: "#16131F",
        muted: "#A29CC2",
        border: "#2A2440",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
      },
      boxShadow: {
        glow: "0 0 24px rgba(124,58,237,0.45)",
        "glow-lg": "0 0 60px rgba(124,58,237,0.35)",
      },
      maxWidth: {
        container: "1200px",
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
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
