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
  boxShadow:'0px 0px 10px rgba(0, 0, 0, 0.2)',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
  boxShadow: '0px 0px 20px rgba(50, 83, 129, 100)',
  },
  [theme.breakpoints.up('sm')]: {
          width: 466,
          height:138,
          marginRight:20,
          padding: theme.spacing(0),
          textAlign: 'center',
          color: theme.palette.text.secondary,
          borderRadius: '10px',
          boxShadow:'0px 0px 10px rgba(1, 1, 1, 0.2)',
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
          boxShadow: '0px 0px 20px rgba(50, 83, 129, 100)',
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
    
  </div>
  );
}