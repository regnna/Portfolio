  // @type {import('tailwindcss').Config} 

const plugin = require('tailwindcss/plugin')

// create default values
const screenKeys = Array.from({length: 20}, (_, i) => i*5)
const screenSizes = screenKeys.reduce((v, key) => Object.assign(v, {[key]: key}), {});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  

  
  theme: 
  {
    
    extend: {
      height: {
        'screen/75': '75vh',
      },
      width: {
        'screen/50': '50vw',
      },
      // screens:{
      //   'slg':{'min': '50dvw', 'max': '75dvw'},
      //   'ssm':'10dvw'
      // },
      
      keyframes: {
        
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        scaleImage: {
          '0%' : {
            filter: 'grayscale(0)',
            transform: 'scale(.5)'
          },
      
          '50%' : {
            transform: 'scale(.8)',
            filter: 'grayscale(0.4)',
            // boxshadow: '3px 3px 10px black',
          },
      
          '100%': {
            transform: 'scale(.8)',
            filter: 'grayscale(0)'
          },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        ping :{
          '100%' :{transform: 'scale(2)',opacity: '0'},
  '75%':{transform: 'scale(2)',opacity: '0'}
},
      },
      animation: {
        'waving-hand': 'wiggle 2s linear infinite',
        'img':'scaleImage 5s linear infinite',
        'w-hand': 'wave 2s linear infinite',
        "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"]
    },
  },
  plugins: [
    plugin(function ({matchUtilities, theme}) {
      matchUtilities(
        {
          'w-screen': width => ({
            width: `${width}vw`
          })
        },
        { values: Object.assign(screenSizes, theme('screenSize', {})) }
      ),
      matchUtilities(
        {
          'h-screen': height => ({
            height: `${height}vh`
          })
        },
        { values: Object.assign(screenSizes, theme('screenSize', {})) }
      )
    })
  ],
};

