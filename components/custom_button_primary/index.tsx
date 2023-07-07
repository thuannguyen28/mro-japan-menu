import { ThemeProvider, Typography } from '@mui/material';
import theme from '../../src/theme';
import Button from '@mui/material/Button';
 const CustomButton = ({title,onClick,sx,sxText}) => {
  return (
    <ThemeProvider theme={theme}>
      <Button sx={sx} variant="contained" color="blue" onClick={onClick}>
   <Typography sx={sxText}> {title}</Typography>
  </Button>
  </ThemeProvider>
 
  )
};
export default CustomButton;