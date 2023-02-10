/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: {
          solid: 'var(--tw-color-primary-solid)',
          light: 'var(--tw-color-primary-light)',
          dark: 'var(--tw-color-primary-dark)',
        },
        dark: '#222222',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
