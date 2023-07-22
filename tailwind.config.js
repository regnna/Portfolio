  // @type {import('tailwindcss').Config} 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        scaleImage: {
          '0%' : {
            filter: 'grayscale(0)',
            transform: 'scale(.8)'
          },
      
          '50%' : {
            transform: 'scale(1.1)',
            filter: 'grayscale(0)',
            // boxshadow: '3px 3px 10px black',
          },
      
          '100%': {
            transform: 'scale(.8)',
            filter: 'grayscale(1)'
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
      },
      animation: {
        'waving-hand': 'wiggle 2s linear infinite',
        'img':'scaleImage 2s linear infinite',
        'w-hand': 'wave 2s linear infinite',
      },
    },
    fontFamily: {
      signature: ["Great Vibes"]
    },
  },
  plugins: [],
};

