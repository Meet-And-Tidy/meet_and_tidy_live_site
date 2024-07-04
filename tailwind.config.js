/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'jumbotron': "url('/src/assets/jumbotron.png')",
      },
      colors: {
        brandGreen: "#74AC48",
        brandGreenDark: "#425C2E"
      },
    },
  },
  plugins: [],
}

