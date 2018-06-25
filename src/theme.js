import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway',
      'Roboto',
      'sans-serif'
    ].join(','),
    button: {
      letterSpacing: 1,
      fontWeight: 600,
    },
    title: {
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      light: '#1B69B0',
      main: '#063C7F',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#F3E466',
      main: '#EED929',
      dark: '#EBAF20',
      contrastText: '#000',
    },
  },
});
