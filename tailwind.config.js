const _ = require('lodash')

module.exports = {
  theme: {
    colors: {
      'transparent': '#0000',
      
      'white': '#fff',
      'grey-darkest': '#262626',
      'grey-darker': '#3f3f3f',
      'grey-dark': '#656565',
      'grey': '#7f7f7f',
      'grey-light': '#bebebe',
      'grey-lighter': '#d7d7d7',
      'grey-lightest': '#efefef',
      'black': '#000',
      
      'theme-primary': '#468ffd',
    },
    
    fonts: {
    },
    
    minWidth: {
      '0': '0',
      '16': '4rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      '96': '24rem',
      '128': '32rem',
      '192': '48rem',
      '256': '64rem',
      'full': '100%',
    },
    
    minHeight: {
      '0': '0',
      '16': '4rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      '96': '24rem',
      '128': '32rem',
      '192': '48rem',
      '256': '64rem',
      'full': '100%',
      'screen': '100vh'
    },
    
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      'screen': '100vh',
      'half': '50vh',
      'most': '75vh',
      'least': '25vh',
    },
    
    width: {
      'auto': 'auto',
      'px': '1px',
      '0': '0px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      '96': '24rem',
      '128': '32rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      'full': '100%',
      'screen': '100vw',
      'half': '50vw',
      'most': '75vw',
      'least': '25vw',
    },
    
    maxWidth: {
      'auto': 'auto',
      'px': '1px',
      '0': '0px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      '96': '24rem',
      '128': '32rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      'full': '100%',
      'screen': '100vw',
      'half': '50vw',
      'most': '75vw',
      'least': '25vw',
    },
    
    height: {
      'auto': 'auto',
      'px': '1px',
      '0': '0px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      'full': '100%',
      'screen': '100vh',
      'half': '50vh',
      'most': '75vh',
      'least': '25vh',
    },
  },
  
  transition: {
    '1': '50ms ease-in-out',
    '2': '100ms ease-in-out',
    '3': '150ms ease-in-out',
    '4': '200ms ease-in-out',
    '5': '250ms ease-in-out',
    '6': '300ms ease-in-out',
    '7': '350ms ease-in-out',
    '8': '400ms ease-in-out',
    '9': '450ms ease-in-out',
    '10': '500ms ease-in-out',
  },
  boxShadow: {
    default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
    md: ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
    lg: ' 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
    xl: ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
  },
  
  variants: {
    boxShadow: ['responsive', 'hover', 'focus', 'group-hover', 'top', 'nottop'],
    margin: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'top', 'nottop'],
    textColor: ['responsive', 'hover', 'focus', 'top', 'nottop'],
    borderWidth: ['responsive', 'hover', 'focus', 'top', 'nottop'],
  },
  
  plugins: [
    function({addUtilities, config, e}) {
      const trUtils = _.map(config('transition'), (value, key) => {
        return {
          [`.${e(`t-${key}`)}`]: {
            transition: `all ${value}`
          }
        }
      })
      
      addUtilities(trUtils)
    },
    function({ addVariant, e }) {
      addVariant('top', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `[data-scroll-top=top] .${e(`top${separator}${className}`)}`
        })
      })
      addVariant('nottop', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `[data-scroll-top=nottop] .${e(`nottop${separator}${className}`)}`
        })
      })
    }
  ]
};
