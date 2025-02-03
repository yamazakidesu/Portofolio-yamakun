import { Outfit, Ovo } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#bd50e6",
        darkHover: "#2a004a",
        darkTheme: "#0a0a0a",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif" ],
        Ovo: ["Ovo", "serif"]
      }
    },
  },
  plugins: [],
};
