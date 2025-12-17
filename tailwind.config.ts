import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#008751",
          dark: "#006B3F",
        },
        gold: {
          DEFAULT: "#FFD700",
          dark: "#E6C200",
        },
      },
    },
  },
  plugins: [],
};
export default config;

