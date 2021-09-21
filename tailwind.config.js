module.exports = {
  purge: [
    './struttandparker/**/*.html',
    './struttandparker/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '954px',
      xl: '1140px',
      xxl: '1400px',
    },
    container: {
      center: true,
      padding: '20px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '954px',
        xl: '1140px',
        xxl: '1400px',
      },
    },
  variants: {
    extend: {},
  },
  plugins: [],
}