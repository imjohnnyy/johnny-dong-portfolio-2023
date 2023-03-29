/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
        roboto: "'Roboto', sans-serif"
      },
      colors: {
        gray: "#2d2e32"
      }
    },
  },
  plugins: [],
}
