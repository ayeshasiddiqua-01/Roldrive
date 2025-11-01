
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica Neue', 'Arial', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brandDark: '#08121C',
        brandGold: '#FDC65C',
      },
      screens: {
        'custom': { 'max': '752px' },
      },
    },
  },
  plugins: [],
};
