/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      screens: {
        'xs320': '320px',
        'xs375': '375px',
        'xs425': '425px',
        'xl1440': '1440px',
        'xl2560': '2560px',
      },
      colors: {
        brand: {
          gold: "#D4AF37",
          dark: "#0d1317",
        },
      },
      fontSize: {
        hero: ['2.5rem', { lineHeight: '1.2' }], // example custom size
      },
    },
  },
  plugins: [],
}
