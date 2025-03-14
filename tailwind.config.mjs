const colors = require('tailwindcss/colors')

const rems = {
  14: '3.5rem',
  22: '5.5rem',
  110: '26rem',
  112: '28rem',
  128: '32rem',
  160: '40rem',
  192: '48rem',
  224: '56rem',
  242: '64rem',
  300: '85rem',
  400: '114rem',
}

const contents = {
  'fit-content': 'fit-content',
  'min-content': 'min-content',
  'max-content': 'max-content',
}

const screenHeights = {
  'screen-1/5': '20vh',
  'screen-1/4': '25vh',
  'screen-1/3': '33vh',
  'screen-2/5': '40vh',
  'screen-1/2': '50vh',
  'screen-2/4': '50vh',
  'screen-3/5': '60vh',
  'screen-2/3': '66vh',
  'screen-3/4': '75vh',
  'screen-4/5': '80vh',
}

const screenWidths = {
  22: '5.5rem',
  112: '28rem',
  128: '32rem',
  160: '40rem',
  192: '48rem',
  224: '56rem',
  'screen-1/5': '20vw',
  'screen-1/4': '25vw',
  'screen-1/3': '33vw',
  'screen-2/5': '40vw',
  'screen-1/2': '50vw',
  'screen-2/4': '50vw',
  'screen-3/5': '60vw',
  'screen-2/3': '66vw',
  'screen-3/4': '75vw',
  'screen-4/5': '80vw',
  'fit-content': 'fit-content',
  'min-content': 'min-content',
  'max-content': 'max-content',
}

const ratios = {
  '1/5': '20%',
  '1/4': '25%',
  '1/3': '33%',
  '2/5': '40%',
  '1/2': '50%',
  '9/16': '56.25%',
  '2/4': '50%',
  '3/5': '60%',
  '2/3': '66%',
  '3/4': '75%',
  '4/5': '80%',
  full: '100%',
}

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  mode: 'jit',
  important: true,
  theme: {
    extend: {
      blur: {
        xs: '2px',
      },
      colors: {
        blue: {
          DEFAULT: '#2896FE',
          50: '#F0F7FF',
          100: '#CAE5FF',
          200: '#A2D1FF',
          300: '#79BEFE',
          400: '#51AAFE',
          500: '#2896FE',
          600: '#017AED',
          700: '#015DB5',
          800: '#01417D',
          900: '#002445',
        },
        gray: colors.slate,
        green: colors.lime,
        red: colors.rose,
        yellow: colors.amber,
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        11: 'repeat(11, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))',
      },
      height: {
        ...rems, ...ratios, ...screenHeights, ...contents,
      },
      margin: { ...rems, ...ratios, ...screenHeights },
      minHeight: {
        ...rems, ...ratios, ...screenHeights, ...contents,
      },
      maxHeight: {
        ...rems, ...ratios, ...screenHeights, ...contents,
      },
      padding: { ...rems, ...ratios, ...screenHeights },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '3.5rem',
        '8xl': '6rem',
        '9xl': '6.5rem',
      },
      width: {
        ...rems, ...ratios, ...screenWidths, ...contents,
      },
      maxWidth: {
        ...rems, ...ratios, ...screenWidths, ...contents,
      },
      minWidth: {
        ...rems, ...ratios, ...screenWidths, ...contents,
      },
      flexBasis: {
        ...rems, ...ratios, ...screenWidths, ...contents,
      },
      screens: {
        xs: '390px',
      },
    },
    boxShadow: {
      DEFAULT: '0 0px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      sm: '0 0px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 1px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 2px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 3px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 7px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 9px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      backgroundImage: ['disabled', 'hover'],
      backgroundPosition: ['hover'],
      borderColor: ['disabled', 'hover', 'last'],
      borderWidth: ['disabled', 'hover', 'last'],
      boxShadow: ['active', 'disabled'],
      gridColumn: ['last'],
      margin: ['last'],
      textColor: ['dark', 'disabled', 'last'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
}
