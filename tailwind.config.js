/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{jsx,js}"],
  darkmode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'custom-navy': '#153448',
        'custom-lightblue': '#3C5B6F',
        'custom-brown': '#948979',
        'custom-beige': '#DFD0B8',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['placeholder'],
    },
  },
  plugins: [],
}

