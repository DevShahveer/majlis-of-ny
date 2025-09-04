/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./*.html"],
  theme: {
    extend: {
      screens: {
        'xs320': '320px',
        'xs375': '375px',
        'xs425': '425px',
        'xl1440': '1440px',
        'xl2560': '2560px',
    },
  plugins: [],
}
}}
