module.exports = {
  purge: [
    './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      fontFamily: {
        montez: ['Montez', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
