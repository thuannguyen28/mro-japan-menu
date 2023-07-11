import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    blue:createColor('#325381'),
    white:createColor('#ffffff'),
    
  },
});

export default theme;
