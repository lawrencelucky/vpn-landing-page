module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ["'Rubik'", 'sans-serif'],
    },
    fontSize: {
      sm: ['1.4rem', '2.24rem'],
      md: ['1.6rem', '2.5rem'],
      lg: ['2.5rem', '3rem'],
      xl: ['3.5rem', '5rem'],
      '2xl': ['5rem', '7rem'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        red: '#F53838',
        darkText: '#0B132A',
        grayText: '#4F5665',
        lightText: '#AFB5C0',
      },
      other: {
        lightRed: '#FFECEC',
        line: '#DDDDDD',
        white: '#FFFFFF',
      },
    },
    borderRadius: {
      DEFAULT: '8px',
      '4xl': '124px',
      full: '100%',
    },
    boxShadow: {
      'sm-dark': '0px 2px 6px 0px rgba(0,0,0,0.1)',
      md: '0px 8px 12px 0px #F5383859',
      'md-dark': '0px 6px 8px 0px rgba(0,0,0,0.1)',
      none: '0 0 #0000',
    },
    screens: {
      sm: '641px',
      md: '769px',
      lg: '1025px',
      xl: '1281px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
};
