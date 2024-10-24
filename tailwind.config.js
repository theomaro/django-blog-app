/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/templates/*.html", "./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
