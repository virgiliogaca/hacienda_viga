const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      screens: {
        'xs': '200px',
        ...defaultTheme.screens,
      },
      extend: {},
    },
    variants: {},
    plugins: [],
  }