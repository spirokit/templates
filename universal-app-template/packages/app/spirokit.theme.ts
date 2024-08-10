import { ITheme } from '@spirokit/ui'

const myTheme: ITheme = {
  config: {
    colors: {
      primary: 'indigo',
    },
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
  resources: {
    colors: {
      // Example of a custom color palette you can use as primary
      steelBlue: {
        100: '#c3dbef',
        200: '#a0c2de',
        300: '#7ca9ce',
        400: '#5a91bf',
        500: '#4077a5',
        600: '#305d82',
        700: '#20425e',
        800: '#0d283b',
        900: '#000e1a',
      },
    },
  },
}

export default myTheme
