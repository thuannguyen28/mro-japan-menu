import * as React from 'react';
import ListSearch from '../../components/part_order_list/ListSearch';
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
import TextField from '@mui/material/TextField';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Css TextField
const CssTextField = styled(TextField)({

  // '& label.Mui-focused': {
  //   color: '#A0AAB4',
  // },
  // '& .MuiInput-underline:after': {
  //   borderBottomColor: 'transparent',
  // },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: '#fff',
      color:"#325381",
      textAlign:'left',
      borderWidth: 0,
    },
    '& input': {
      backgroundColor: '#fff',
      textAlign:'left',
      color:"#325381",
    },
  },

});

export default function Parts() {
  //mobile
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
      <Grid container spacing={0} sx={{ p: 4,  }}>
        <Grid item xs={12} sx={{ mb:2 }}>
          <Typography color="#325381" >
            <strong>Part Order Search</strong>
          </Typography>
        </Grid>

        <Box sx={{ width: '100%', height: 700, overflow: 'auto', p:2}} backgroundColor="#F5F5F5">
          <Grid container spacing={0} sx={{ pl:4, }}>
            <Grid item xs={4}>
              <Grid container>
                <Typography color="#325381" >
                  <strong>Part Number</strong>
                </Typography>
              </Grid>
              <Grid container>
                 <CssTextField sx={{ width:"95%" }}  size="small" placeholder="Part Number Search" />
              </Grid>
            </Grid>

            <Grid item xs={8}>
              <Grid container>
                <Typography color="#325381" >
                  <strong>期間</strong>
                </Typography>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker sx={{  
                          '& .MuiInputBase-root': {
                            border: 'none',
                            backgroundColor:"#FFF"       
                          },
                          '& .MuiOutlinedInput-root': {
                            height: 40,
                            width:"90%"
                          },

                          '& .MuiOutlinedInput-notchedOutline': {
                            borderWidth: 0,
                          },

                        }} />
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={3}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker sx={{  
                          '& .MuiInputBase-root': {
                            border: 'none',
                            paddingRight:1,
                            backgroundColor:"#FFF"       
                          },
                          '& .MuiOutlinedInput-root': {
                            height: 40,
                            width:"90%"
                          },

                          '& .MuiOutlinedInput-notchedOutline': {
                            borderWidth: 0,
                          },

                        }} />
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={3}>
                  <Button variant="contained" sx={{ width:150,height:40, fontSize:11,backgroundColor: '#325381' }}>
                    <Typography sx={{ color:'#FFFFFF', fontSize:12}}>検索</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <ListSearch />

        </Box>

      </Grid>
    </Box>
    

    {/*----------Footer----------*/}
    <Divider />
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