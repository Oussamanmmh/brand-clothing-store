const { Oswald } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'dark':"#333333",
        'blue':"#0a043c",
        'red':"#E50914",
        'gray':"#3c433b",
        'green':'#06D001',
         'scrollbar-1':"#b8d2b3",
         'scrollbar-2':"#a9c5a0"
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      screens:{
        "md":"1025px",
      }
    },
  },
  plugins: [],
};
