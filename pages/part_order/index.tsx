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

import MenuIcon from '@mui/icons-material/Menu';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  marginLeft:20,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow:'none',
  [theme.breakpoints.up('sm')]: {
            marginLeft:100,
            textAlign: 'center',
            color: theme.palette.text.secondary,
            boxShadow:'none',
        },
}));
// dọc
const ItemColumn = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  
  textAlign: 'left',
  marginLeft:8,
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.text.secondary,
  boxShadow:'none',
}));
// ngang
const ItemRow = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  color: theme.palette.text.secondary,
  boxShadow:'none',
}));

const ItemFrame = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2, 
  width:175,
  height:95,

  marginBottom:10,
  boxShadow:'0px 0px 5px rgba(0, 0, 0, 0.2)',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
  boxShadow: '0px 0px 10px rgba(50, 83, 129, 100)',
  },
  [theme.breakpoints.up('sm')]: {
          width: 466,
          height:138,
          marginRight:20,
          padding: theme.spacing(0),
          textAlign: 'center',
          color: theme.palette.text.secondary,
          borderRadius: '10px',
          boxShadow:'0px 0px 5px rgba(1, 1, 1, 0.2)',
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
          boxShadow: '0px 0px 10px rgba(50, 83, 129, 100)',
          },
        },
}));

const ItemAvatar = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2, 
  width:160,
  height:68,
  margin: 'auto',
  padding: theme.spacing(1),
  boxShadow:'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
          width: 300,
          height:126,
          padding: theme.spacing(1),
          margin: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: theme.palette.text.secondary,
          boxShadow:'none',
        },
}));

const cardMedia = { margin: 'auto', width: { xs: 138, md: 224 }, height: { xs: 68, md: 126 } };
const cardMedia1 = { margin: 'auto', mt:2 ,width: { xs: 160, md: 320 }, height: { xs: 36, md: 72 } };
const cardMedia2 = { margin: 'auto', mt:2 , width: { xs: 120, md: 232 }, height: { xs: 36, md: 72 } };

const FrameCenter = { display: 'flex',alignItems: 'center',justifyContent: 'center' };

const cssLink = { textDecoration: 'none', color: 'inherit' };


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
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box sx={{ width: '100%', height: '100%',overflow: 'auto'}} backgroundColor="#FFFFFF">
            <Typography color="#3A5075" sx={{ p: { xs: 2, md: 4 }  }}>
              <strong>Part Order</strong>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ ml:31 }}
                >
                { isMobile ? <MenuIcon /> : ''}
              </IconButton>

            </Typography>
            <Typography color="#3A5075" sx={{ mb:{xs:6, md:0}, ml:{xs:2, md:0}}}>
              <strong>{ isMobile ? 'Customer select' : ''}</strong>
            </Typography>
            <Grid container spacing={2} >
              <Grid item xs={6} sx={FrameCenter}>
                <Link  href="/part_order/anal" sx={cssLink}>
                  <ItemFrame>
                    <ItemAvatar>
                      <CardMedia
                        sx={cardMedia}
                        image="part-order/anal.png"/>
                    </ItemAvatar>
                  </ItemFrame>
                </Link>
              </Grid>

              <Grid item xs={6} >
                <Link  href="/part_order" sx={cssLink}>
                  <ItemFrame>
                    <ItemAvatar>
                      <CardMedia
                        sx={cardMedia1}
                        image="part-order/solaseed.png"/>
                    </ItemAvatar>
                  </ItemFrame>
                </Link>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt:4 }}>
              <Grid item xs={6} sx={FrameCenter}>
                <Link  href="/part_order" sx={cssLink}>
                  <ItemFrame>
                    <ItemAvatar>
                      <CardMedia
                        sx={cardMedia2}
                        image="part-order/peach.png"/>
                    </ItemAvatar>
                  </ItemFrame>
                </Link>
              </Grid>

              <Grid item xs={6}>
                <Link  href="/part_order" sx={cssLink}>
                  <ItemFrame>
                    <ItemAvatar>
                      <CardMedia
                        sx={cardMedia}
                        image="part-order/starflyer.png"/>
                    </ItemAvatar>
                  </ItemFrame>
                </Link>
              </Grid>
            </Grid>
          </Box>
         </Grid>
      </Grid>
    </Box>
  </div>
  );
}