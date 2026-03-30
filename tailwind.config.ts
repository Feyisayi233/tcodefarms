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
          light: "#00b366",
        },
        cream: {
          50: "#FFFEF7",
          100: "#FFF8E7",
          200: "#FFEFC2",
          300: "#FFE49A",
        },
        amber: {
          warm: "#D4A017",
          light: "#F5C543",
        },
        earth: {
          DEFAULT: "#5C4033",
          light: "#8B6914",
        },
        barn: {
          DEFAULT: "#8B2500",
          light: "#A0522D",
        },
      },
    },
  },
  plugins: [],
};
export default config;
