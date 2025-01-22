/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import { COLORS } from "./src/styles/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["IBM Plex Mono"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        hoverDark: COLORS.hoverDark,
        lightGrey: COLORS.lightGray,
      },
      borderWidth: {
        30: "30px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
