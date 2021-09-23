module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
    extend: {
      colors: {
        'bkgdefault':'#E5E5E5',
        'regal-blue': '#cc8899',
        'icon-nav': '#C20430',
        'menu-nav':'#3E4245',
        'footer':'#3E4245',
        'btn-report':'#B9AC9B',
        'knowledge':'#F7F7F7',
        'knowdiv': '#B9AC9B',
        'mapbkg':'#CCD1D9',
      },
      backgroundImage: {
        'house-img': "url('./img/house.png')",
        'countryside-img': "url('./img/countryside.png')",
        'city': "url('./img/city.png')",
        'above':"url('./img/above.png')",
        'bnp':"url('./img/bnp.png')",
        'street':"url('./img/street.png')",
        'mountains':"url('./img/mountains.png')",
        'door':"url('./img/door.png')",
        'sky':"url('./img/sky.png')",
        'britain':"url('./img/Britain.png')",
        'crown':"url('./img/corona.png')"
      },
      gridTemplateRows: {
        
        //3 row grid
        'mincontent2row': 'repeat(2, minmax(0, mincontent))',
        //3 row grid
        'mincontent3row': 'repeat(3, minmax(0, mincontent))',
        //5 row grid
       'mincontent5row': 'repeat(5, minmax(0, mincontent))',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
