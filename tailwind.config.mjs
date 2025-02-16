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
        lightHover: "#DFD7AC",
        darkHover: "#F4F1E3",
        darkTheme: "#0a0a0a",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif" ],
        Ovo: ["Ovo", "serif"]
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff',
      }
    },
  },
  plugins: [],
};
