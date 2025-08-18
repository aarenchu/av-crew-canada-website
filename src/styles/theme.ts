import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#020206',
      paper: '#200e58',
    },
    text: {
      primary: '#fff',
      secondary: '#e1731d',
    },
    primary: {
      main: '#2f28a7',
      contrastText: '#16f8ca',
    },
    secondary: {
      main: '#e1731d',
    },
    info: {
      main: '#2f28a780',
    },
  },
  typography: {
    h4: {
      fontFamily: ['Orbitron Variable', 'sans-serif'].join(','),
    },
    h5: {
      fontFamily: ['Orbitron Variable', 'sans-serif'].join(','),
    },
    h6: {
      fontFamily: ['Orbitron Variable', 'sans-serif'].join(','),
    },
    caption: {
      fontFamily: ['Orbitron Variable', 'sans-serif'].join(','),
    },
    // body2: {
    //   fontFamily: ['Orbitron Variable', 'sans-serif'].join(','),
    // },
  },
  // Add more customizations here (typography, components, etc.)
});

export default theme;
