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
        ivory: { DEFAULT: "#F8F4EC", soft: "#F3EFE6" },
        bege:  { DEFAULT: "#EFE6D8", deep: "#E3D5C0" },
        gold:  { DEFAULT: "#B8893B", bright: "#D4A84B", deep: "#8E682B" },
        ink:   { DEFAULT: "#222222", soft: "#3A3732" },
        stone: { DEFAULT: "#6C665D", light: "#9A948C", faint: "#C8C2BA" },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        ui:      ["'Montserrat'", "sans-serif"],
      },
      maxWidth: { site: "1280px" },
    },
  },
  plugins: [],
};
export default config;
