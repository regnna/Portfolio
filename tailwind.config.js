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
      },
      animation: {
        'waving-hand': 'wiggle 2s linear infinite',
      },
    },
    fontFamily: {
      signature: ["Great Vibes"]
    },
  },
  plugins: [],
};

