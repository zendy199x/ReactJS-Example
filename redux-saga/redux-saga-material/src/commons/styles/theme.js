import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: red,
    error: red
  },
  typography: {
    fontFamily: 'Roboto,"Helvetica Neue",Arial,sans-serif',
    headline: {
      fontSize: '1rem'
    },
    subheading: {
      fontSize: '0.8125rem'
    },
    button: {
      fontWeight: 400,
      textTransform: 'initial'
    }
  },
  shape: {
    borderRadius: 4
  },
  text: {
    default: '#000000'
  }
});

export default theme;
