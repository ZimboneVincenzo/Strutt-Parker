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
    borderColor: theme => ({
      ...theme('colors'),
      'borderInput':'#CCD1D9',
      'borderToggle':'#C2052F',
      
     }),
     fontSize: {
       'sales':"14px"
     },
    extend: {
      rotate: {
        '135':'135deg',
        'm45':'-45deg',
        '45':'45deg'
      },
      padding: {
        'reportText':'2.875rem',
      },

      width: {
        '01875':'0.1875rem',
        '1125':'11.25rem',
        'input2/3':'60%',
        'input1/3':'20%',
        'toggleDesk':'3.75rem',
        'cardG1W':'17.5rem',
        'elementcardG1xl':'13.75rem',
        'elementcardG1':'16.625rem',
        
      },
      height:{
        '4.5':'4.5rem',
      '9.11':'9.1118rem',
      'arrow':'0.4375rem',
      '4.5':'4.5rem',
      '1375':'1.375rem',
      'cardG1':'21.625rem',
      'cardGroup1':'12.5rem',
      },
      borderRadius: {
        'toggle':'30px'
      },

    

      fontSize: {
        'nav':'15px',
        'h1SizeMobile':'32px',
        'h1SizeDesk':'44px',
        'reports':'1.375rem',
        'reportsSmall':'1rem',
        'btnReport':'0.87',
        '1.75':'1.75rem',
        '20':'1.25rem',
        '24':'1.5rem',
        '14':'0.875rem',
        '11':'0.6875rem'
      },
      lineHeight: {
        'h1LineMobile': '38px',
        'h1LineDesk': '40px',
        '1.375':'1.375rem'
        
       
       },
      colors: {
        'baseText':'#FFFFFF',
        'place':'#656D78',
        'toggle':'#C2052F',
        'text1':'#3E4245',
        'bkgdefault':'#E5E5E5',
        'regal-blue': '#cc8899',
        'icon-nav': '#C20430',
        'menu-nav':'#3E4245',
        'footer':'#3E4245',
        'card-element':'#B9AC9B',
        'knowledge':'#F7F7F7',
        'knowdiv': '#B9AC9B',
        'mapbkg':'#CCD1D9',
        'cardReport':'#E6E9ED'
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
        'crown':"url('./img/corona.png')",
        'rettangle': "url('./img/Rectangle 7.png')",
      
      },
      gridTemplateRows: {
        
        //3 row grid
        'mincontent2row': 'repeat(2, minmax(0, mincontent))',
        //3 row grid
        'mincontent3row': 'repeat(3, minmax(377px, max-content))',
        //5 row grid
       'mincontent5row': 'repeat(5, minmax(0, mincontent))',
       //column
       
      },

      gridTemplateColumns: {
        'column40px':'repeat(6, max(40px, max-content))'
      },

    },
 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
