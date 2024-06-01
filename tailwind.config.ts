import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    fontSize: {
      sm: ["20px", ""],
      base: ["24px", ""],
      lg: ["28px", ""],
      xl: ["32px",""],
      "3xl": ["36px",""],
      "2xl": ["21px",""],
      "4xl": ["50px",""],
    },
    borderRadius: {
      'large': "20px",
      'full': "9999px",
      'lg' : "10px",
    },
    extend: {
      colors: {
        primary: "#1B599D",
        secondary: "#0A2C69",
        accent: {
          DEFAULT: "#FEB811",
          hover: "#FFD44A",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix- accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
