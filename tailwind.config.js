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
        lightgray: "#7d7983",
        gray: "#2d2e32"
      }
    },
    variants: {
      fill: ['hover', 'focus']
    }
  },
  plugins: [],
}
