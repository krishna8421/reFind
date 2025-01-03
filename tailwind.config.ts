import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        "pixelify-sans": ["var(--font-pixelify-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      borderWidth: {
        3: "3px",
      },
      colors: {
        primary: {
          light: "#292C3B",
          background: "#1A1C28",
          dark: "#161922",
          darkest: "#16171C",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
