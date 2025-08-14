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
  },
  typography: {
    h6: {
      fontFamily: ['Orbitron Variable', 'sans-serif'].join(','),
    },
  },
  // Add more customizations here (typography, components, etc.)
});

export default theme;
