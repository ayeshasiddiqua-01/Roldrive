/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica Neue', 'Arial', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#FDC65C",
        brandDark: "#08121C",
        brandGold: "#FDC65C",
      },
      screens: {
        custom: { max: "752px" },
      },
    },
  },
  plugins: [],
};
