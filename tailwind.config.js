/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'unbounded': ['Unbounded'],
        'inter': ['Inter'],
      },
      colors: {
        'void': '#0E0B16',
        'fuschia': '#A239CA',
        'jewel': '#4717F6',
        'stark': '#E7DFDD',
        'analagous': '#463C63',
      }
    },
  },
  plugins: [],
}

