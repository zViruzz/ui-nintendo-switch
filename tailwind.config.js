/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'Nbutton': '0px 0px 8px 5px rgb(0 0 0 / 0.1)',
      },
      colors: {
        outlineColor1: '#15bffd',
        outlineColor2: '#ff0000',
      },
      animation: {
        wiggle: 'wiggle 1s infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { 'outline-color': '#15bffd'},
          '50%': { 'outline-color': '#71ffe0' },
          '100%': { 'outline-color': '#15bffd' },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

