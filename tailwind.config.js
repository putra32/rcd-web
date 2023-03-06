const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        rcd_color_blue: {
          DEFAULT: '#f6fdff',
          light: '#99e2ff',
          btn: '#66d4ff',
          dark: '#157E9B'
        },
        rcd_color_navy: {
          DEFAULT: '#067E9B',
          light: '#079FC3',
          activa: '#056D86',
        },
        rcd_color_green: {
          DEFAULT: '#2BF21A'
        },
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        pink: colors.pink,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}