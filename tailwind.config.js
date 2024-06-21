/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'jumbotron': "url('/src/assets/jumbotron.png')",
      }
    },
  },
  plugins: [],
}