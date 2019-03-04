const blue = '#4da1ff';
const gray = '#f3f3f3';
const lightgray = '#fafbfc';
const lightergray = '#fcfcfc';
const darkgray = '#ccc';
const darkergray = '#999';
const darkestgray = '#1c2230';
const placeholdergray = '#323c47';
const copywritegray = '#9b9b9b';
const instagramBlue = '#125688';
const fashpink = '#ec6c68';
const white = '#fff';
const steemConnectBlue = '#108ee9';

const headerHeight = [60, 73];
const sidebarWidth = 70;

const space = [0, 4, 8, 16, 32, 64, 128, 256];
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64];
const radiusSizes = [4, 25];
const zIndexScale = [-100, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

export default {
  fontSizes,
  radiusSizes,
  space,
  colors: {
    blue,
    instagramBlue,
    steemConnectBlue,
    white,
    gray,
    lightgray,
    lightergray,
    darkgray,
    darkergray,
    darkestgray,
    placeholdergray,
    copywritegray,
    fashpink,
  },
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  Heading: {
    fontFamily: '"Montserrat", sans-serif',
    lineHeight: 1.25,
  },
  Text: {
    fontFamily: '"Montserrat", sans-serif',
    letterSpacing: 0.3,
    lineHeight: 1.25,
  },
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: blue,
    },
    primaryLarge: {
      color: '#fff',
      backgroundColor: blue,
      padding: `${space[3]}px ${space[5]}px`,
      fontWeight: 'normal',
    },
    default: {
      color: darkestgray,
      fontWeight: 'normal',
      backgroundColor: 'white',
      position: 'relative',
      boxShadow: `${gray} 0 0 0 1px`,
      '&:hover': {
        boxShadow: `${darkgray} 0 0 0 1px`,
      },
      '&:focus': {
        boxShadow: `${darkestgray} 0 0 0 1px`,
      },
    },
    outlineDefault: {
      color: blue,
      backgroundColor: 'white',
      boxShadow: '0 0 2px 1px',
    },
    outline: {
      color: blue,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
    transparent: {
      backgroundColor: 'transparent',
      color: 'black',
    },
    transparentSmall: {
      backgroundColor: '#fcfcfc',
      color: 'black',
      padding: space[0],
    },
  },
  Header: {
    height: headerHeight,
    zIndex: zIndexScale[7],
  },
  Sidebar: {
    width: sidebarWidth,
    zIndex: zIndexScale[7],
  },
};
