/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandGreen: "#74AC48",
        brandDarkGreen: "#2C6731",
        brandLightGreen: "#F1FFE5"
      },
    },
  },
  plugins: [],
}

