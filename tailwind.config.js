module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'lightblue',
          DEFAULT: 'blue',
          dark: 'darkblue',
        },
        secondary: {
          light: 'lightblue',
          DEFAULT: 'blue',
          dark: 'darkblue',
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
