/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        'home': 'url("/src/assets/home.svg")',
      },
      listStyleImage: {
        checkmark: 'url("/src/assets/typescript.png")',
      },
      boxShadow: {
        'Nbutton': '0px 0px 8px 5px rgb(0 0 0 / 0.1)',
      },
      colors: {
        gray: '#ffffff34',
        table: '#393a3c',
        disabled: '#6b6b6b',
        description: '#939393',
        secodary: '#00ffc9',
        blueHight: '#1f2227',
        outlineEffect1: '#15bffd',
        outlineEffect2: '#71ffe0',
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

