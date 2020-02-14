module.exports = {
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'k-white': '#FFFFFF',
        'k-sky': '#29A9DB',
        'k-purple': '#4F208E',
        'k-light-purple': '#7F47C6',
        'k-green': '#2BC88F',
        'k-dark-green': '#068C58',
        'k-dark-purple': '#39126D',
        'k-grey': '#F7F7FC',
        'k-light-grey': '#B7B7B7',
        'k-dark-gray': '#979797',
        'k-black': '#3C4556',
      },
    },
  },
  variants: {
    transitionProperty: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderRadius: ['responsive', 'hover', 'focus', 'first', 'last'],
    borderWidth: ['responsive', 'hover', 'focus', 'first', 'last'],
  },
  plugins: [],
};
