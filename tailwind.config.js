module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ["'Rubik'", 'sans-serif'],
    },
    fontSize: {
      sm: ['1.4rem', '2.24rem'],
      md: ['1.6rem', '3rem'],
      lg: ['2.5rem', '3rem'],
      xl: ['3.5rem', '5rem'],
      '2xl': ['5rem', '7rem'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        red: '#F53838',
        darkText: '#4F5665',
        lightText: '#AFB5C0',
      },
      other: {
        lightRed: '#FFECEC',
        line: '#DDDDDD',
      },
    },
    boxShadow: {
      md: '0px 8px 12px 0px #F5383859',
      none: '0 0 #0000',
    },
    extend: {},
  },
  plugins: [],
};
