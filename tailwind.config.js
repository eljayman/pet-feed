/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.handlebars",
  ],
  theme: {
    extend: {},
    colors: {
      'petgreen': '#054720',
      'accentgreen': '#032B13',
      'pettext':'#D0DAF1',
      'texthover': '#E8F1D0'
    }
  },
  plugins: [],
}
