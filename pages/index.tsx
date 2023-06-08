import * as React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { styled, createTheme, ThemeProvider} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { mainListItems, secondaryListItems } from './components/menu';
import { mainContainer } from './components/container';

import NestedList from './components/menu';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Head from 'next/head';

const drawerWidth: number = 280;
const drawerWidthMB = '100%';
const drawerheight = '100vh';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `100%`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidthMB,
      [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          position: 'relative',
      },
      [theme.breakpoints.down('sm')]: {
          position: 'absolute',
      },
      height:drawerheight,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: `calc(${theme.spacing(0)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
          width: `calc(${theme.spacing(7)} + 1px)`,
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {

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

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div>
    <Head>
        <title>MRO Japan - Home</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={open} color="inherit">
        <Toolbar sx={{ pt: 1, pb: 1 }}>
            <img src="/menu/header.png" width="120" height="25" style={{ marginLeft: isMobile ? 0 : 40 }}/>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              style={{marginLeft: 50}}
              onClick={toggleDrawer}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }} />

            <Typography sx={{ color : '#325381', textAlign: 'right', mr:2, display: { xs: 'none', md: 'flex' }}} >
              Hello<strong style={{ marginLeft: 5 }}>Admin</strong>
            </Typography>

            <Avatar alt="Travis Howard" 
                  src="/avatar/avatar.png"
                  sx={{ width: 50, height: 50, mr:3, display: { xs: 'none', md: 'flex' } }} />

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

          </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={isMobile ? !open : open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
              mt:2,
            }}
          >
          </Toolbar>
          <List component="nav">
            <NestedList data={open}/>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            height: '100vh'
          }}
        >
          <Toolbar />

          {mainContainer}

        </Box>
    </Box>
  </div>  
  );
}
