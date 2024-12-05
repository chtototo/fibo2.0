/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue,ts,css}"],
  theme: {
    extend: {
      boxShadow: {
        'delievery': '0px 4px 24px 0px #00000008',
        'new-pizza': '0px 4px 24px 0px #0000000F',
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'roboto': ['Roboto Mono', 'sans-serif'],
      'ubuntu': ['Ubuntu Mono', 'sans-serif'],
    },
  },
  plugins: [],
}

