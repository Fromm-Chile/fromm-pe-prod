/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'lightGray': '#f7f7fd',
        'shadowBlack': '#2d2d2d',
        'red': '#f10503',
        'primaryGray': '#E4E4E4',
        'textGray': '#404040'
      }
    },
  },
  plugins: [],
}

