const colors = require('tailwindcss/colors');

module.exports = {
  important: true,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./modules/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      green: colors.emerald,
      yellow: colors.amber,
    }
  },
  plugins: [],
}
