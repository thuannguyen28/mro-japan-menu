import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuIcon from '@mui/icons-material/Menu';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// Css TextField
const CssTextField = styled(TextField)({

  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'transparent',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: '#fff',
      color:"#325381",
      textAlign:'center',
    },
    '& input': {
      textAlign:'center',
      color:"#325381",
      backgroundColor: '#fff',
    },
  },

});

// ccs
const cssMro = { width: '100%', color: '#325381', textAlign: 'right', fontSize: '13px', position: 'absolute', right: 0, bottom: 0 };
const cssOder = { width: '100%', textAlign: 'right', fontSize: '12px', fontWeight: 700, mb: '5px' };
const cssBox = { background : '#F5F5F5', px: 1, py: 1, borderRadius: '5px'};
const font12 = { fontSize: '12px'};
const font12Center = { fontSize: '12px', textAlign: 'center' };
const cssBox2 = { background : '#F5F5F5', px: 1, py: '19px', borderRadius: '5px'};

const cssTitle = { color: '#325381', textAlign:'center' };
const cssDivider = {my:1, ml:2, mr:2 };

export default function Parts() {
  const [width, setWidth] = React.useState(0);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
      setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;
  return (
  <div>
    <Box sx={{
          width: '100%',}}>
      <Grid container spacing={0} sx={{ pl: 2, pr: 2, pt:2  }}>

        <Grid item xs={6}>
          <Typography color="#325381" >
            <strong>受領者検索 / Recipient search</strong>
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ position: 'relative', justifyContent:"flex-end", textAlign:"right"}}>  
          <Button variant="contained" sx={{ width:150,height:40, fontSize:11,backgroundColor: '#325381', mr:4 }}>
            <Typography sx={{ color:'#FFFFFF', fontSize:12}}>検索実行</Typography>
          </Button>

          <Button variant="contained" sx={{ width:150,height:40, fontSize:11,backgroundColor: '#325381' }}>
            <Typography sx={{ color:'#FFFFFF', fontSize:12}}>リセット</Typography>
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ width: '100%', height: 700,overflow: 'auto', mt:2}} backgroundColor="#F5F5F5">
            <Grid container spacing={2} sx={{ mt:2 }}>
              <Grid item xs={3}>
                <Typography sx={cssTitle} >
                  <strong>ID</strong>
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography sx={cssTitle} >
                  <strong>STS</strong>
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography sx={cssTitle} >
                  <strong>受領日</strong>
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography sx={cssTitle} >
                  <strong>受領者</strong>
                </Typography>
              </Grid>

            </Grid>
            <Divider sx={cssDivider} />
            <Grid container spacing={2}>
              <Grid item xs={3} sx={cssTitle}>
                <CssTextField  size="small" placeholder="ID" />
              </Grid>

              <Grid item xs={3}>
                
              </Grid>

              <Grid item xs={3}>
                
              </Grid>

              <Grid item xs={3}>
               
              </Grid>

            </Grid>
            <Divider sx={cssDivider} />
          </Box>
        </Grid>


      </Grid>
    </Box>

    {/*----------Footer----------*/}
    <Divider sx={cssDivider} />
    <Box component="footer">
      <Grid container>
        <Grid xs={6}>
          <Typography sx={{ color:"#9AA1A9", fontSize:13, ml:4 }}>
            Copyright © 2023 OCC
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography sx={{ color:"#9AA1A9", fontSize:13, mr:4, textAlign:'right' }}>
            Design by Codingdung
          </Typography>
        </Grid>
      </Grid>
      
    </Box>
    {/*----------Footer----------*/}
  </div>
  );
}