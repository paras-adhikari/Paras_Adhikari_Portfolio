/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#050510",
          900: "#080814",
          800: "#0d0d1e",
          700: "#12122a",
        },
        aurora: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
          cyan: "#22d3ee",
          pink: "#c084fc",
        },
      },
      fontFamily: {
        display: ["'Clash Display'", "'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "aurora-gradient":
          "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #22d3ee 100%)",
        "aurora-radial":
          "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.35), transparent 60%)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out infinite 1s",
        blob: "blob 18s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "fade-in-up": "fade-in-up 0.8s ease forwards",
        typing: "typing 2s steps(20) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(3deg)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -60px) scale(1.15)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.9)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 0.6, filter: "blur(40px)" },
          "50%": { opacity: 1, filter: "blur(60px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(139,92,246,0.55)",
        "glow-cyan": "0 0 40px -8px rgba(34,211,238,0.55)",
        "glow-blue": "0 0 40px -8px rgba(59,130,246,0.55)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
