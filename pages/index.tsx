import * as React from 'react';
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

const drawerWidth: number = 280;
const drawerWidthMB: number = 420;
const drawerheight: number = 920;

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
          width: `calc(${theme.spacing(9)} + 1px)`,
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


export default function Home() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={open} color="inherit">
        <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >

            <img src="/menu/header.png" width="120" height="25" style={{marginLeft: 40}}/>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              style={{marginLeft: 40}}
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

            <Typography color="black" sx={{ textAlign: 'right', mr:2, display: { xs: 'none', md: 'flex' }}} >
              <strong>Hello Admin</strong>
            </Typography>

            <Avatar alt="Travis Howard" 
                  src="/avatar/2.png"
                  sx={{ width: 50, height: 50, mt:2, mb:2, mr:3 }} />

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

      <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
              mt:2,
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <NestedList />
            <Divider sx={{ my: 10 }} />
          
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          <Toolbar />

          {mainContainer}

        </Box>
    </Box>
  );
}
