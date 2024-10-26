import { fontFamily } from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", ...fontFamily.sans],
        serif: ["var(--font-bree-serif)", ...fontFamily.serif],
      },
    },
  },
  plugins: [forms],
};
export default config;
