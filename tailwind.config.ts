import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brass: {
          200: "#E7C98A",
          400: "#D9AA5C",
          500: "#B6883A",
          600: "#9C7430",
          700: "#8C6526",
        },
        ink: {
          900: "#0B0A08",
          800: "#100F0B",
          700: "#110F0A",
          600: "#1C1A14",
          500: "#1E1B15",
        },
        parchment: {
          100: "#F1ECDD",
          200: "#E4DCC8",
        },
        stone: {
          400: "#9C9484",
          500: "#6E6757",
          600: "#4A453A",
          700: "#38342B",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
