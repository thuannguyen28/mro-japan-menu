import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { alpha, styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import MenuIcon from '@mui/icons-material/Menu';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import Autocomplete from '@mui/material/Autocomplete';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Select, { SelectChangeEvent } from '@mui/material/Select';
const cssBox2 = { background : '#F5F5F5', px: 1, py: '19px', borderRadius: '5px'};

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
    },
  },

});

// CSS
const cssTitle = { color: '#325381', textAlign:'center' };
const cssDivider = { my: 1, ml:2, mr:2 };
const cssMenu = {minWidth: 100, textAlign:'center'};

export default function ListAll(props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Mobile
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
	  {/*----------Title----------*/}
	    <Grid container spacing={0} sx={{ mt:2 }}>
	      <Grid item xs={0.5}>
	        <Typography sx={cssTitle} >
	         
	        </Typography>
	      </Grid>

	      <Grid item xs={1}>
	        <Typography sx={cssTitle} >
	          <strong>No.</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs={1}>
	        <Typography sx={cssTitle} >
	          <strong>STS</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs={1}>
	        <Typography sx={cssTitle} >
	          <strong>WO</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs={1}>
	        <Typography sx={cssTitle} >
	          <strong>Task Card</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs={1}>
	        <Typography sx={cssTitle} >
	          <strong>Zone</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs={1}>
	        <Typography sx={cssTitle} >
	          <strong>EMP</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs={1}>
	        <Typography sx={cssTitle} >
	          <strong>AC No.</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs={0.7}>
	        <Typography sx={cssTitle} >
	          <strong>RSN</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs={1}>
	        <Typography sx={cssTitle} >
	          <strong>Date</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs={1}>
	        <Typography sx={cssTitle} >
	          <strong>Time</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs={1}>
	        <Typography sx={cssTitle} >
	          <strong>受領者</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs={0.5}>
	        <Typography sx={cssTitle} >
	          <strong>航空会社</strong>
	        </Typography>
	      </Grid>
	    </Grid>
	  {/*----------End Title----------*/}
	  <Divider sx={cssDivider} />
	  {/*----------Data----------*/}
	    <Grid container spacing={1}>

	      <Grid item xs={0.5}>
	          <Button
	            id="basic-button"
	            aria-controls={open ? 'basic-menu' : undefined}
	            aria-haspopup="true"
	            aria-expanded={open ? 'true' : undefined}
	            onClick={handleClick}
	          >
	            <MoreVertIcon style={{ color: '#9C9C9C' }} />
	          </Button>
	          <Menu
	            id="basic-menu"
	            anchorEl={anchorEl}
	            open={open}
	            onClose={handleClose}
	            MenuListProps={{
	              'aria-labelledby': 'basic-button',
	            }}
	            sx={{ ml:4,}}
	          >
	            <MenuItem onClick={handleClose}><Typography sx={cssMenu}>View</Typography></MenuItem>
	            <MenuItem onClick={handleClose}><Typography sx={cssMenu}>PDF</Typography></MenuItem>
	            <MenuItem onClick={handleClose}><Typography sx={cssMenu}>印刷</Typography></MenuItem>
	          </Menu>
	      </Grid>

	      <Grid item xs={1}>
	        <FormControl variant="standard">
	          <CssTextField  size="small" placeholder="ID" />
	        </FormControl>
	      </Grid>

	      <Grid item xs={1}>
	        <FormControl>
	          <CssTextField size="small" placeholder="Status" />
	        </FormControl>
	      </Grid>

	      <Grid item xs={1}>
	        <Autocomplete
	          disableClearable
	          id="combo-box-demo"
	          options={top100Wo}
	          sx={{ width: '100%', 
	                '& .MuiOutlinedInput-notchedOutline': {
	                      border: 'none',
	                    },
	                '& input:focus': {
	                  backgroundColor: '#FFF',
	                  color:"#325381",
	                },
	                '& .MuiAutocomplete-popupIndicator': {
	                  visibility: 'hidden',
	                },
	                '&:hover .MuiAutocomplete-popupIndicator': {
	                  visibility: 'visible',
	                },
	              }}

	          renderInput={(params) => (<TextField {...params} size="small" placeholder="Work Order"  />)}
	        />
	      </Grid>

	      <Grid item xs={1}>
	        <CssTextField id="custom-css-outlined-input" size="small" placeholder="task" />
	      </Grid>

	      <Grid item xs={1}>
	        <Autocomplete
	        disableClearable
	          freeSolo
	          id="combo-box-demo"
	          options={top100Zone}
	          sx={{ width: '100%', 
	                '& .MuiOutlinedInput-notchedOutline': {
	                      border: 'none',
	                    },
	                '& input:focus': {
	                  backgroundColor: '#FFF',
	                  color:"#325381",
	                },
	                '& .MuiAutocomplete-popupIndicator': {
	                  visibility: 'hidden',
	                },
	                '&:hover .MuiAutocomplete-popupIndicator': {
	                  visibility: 'visible',
	                },
	                '& .MuiAutocomplete-input':{textAlign:'center'},
	              }}

	          renderInput={(params) => (<TextField {...params} size="small" placeholder="Zone"  />)}
	        />
	      </Grid>

	      <Grid item xs={1}>
	        <FormControl variant="standard">
	          <CssTextField id="custom-css-outlined-input" size="small" placeholder="EMP" />
	        </FormControl>
	      </Grid>

	      <Grid item xs={1}>
	        <FormControl variant="standard">
	          <CssTextField id="custom-css-outlined-input" size="small" placeholder="AC No." />
	        </FormControl>
	      </Grid>

	      <Grid item xs={0.7}>
	        <Autocomplete
	          disableClearable
	          id="combo-box-demo"
	          options={topRSNN}
	          sx={{ width: '100%', 
	                '& .MuiOutlinedInput-notchedOutline': {
	                      border: 'none',
	                    },
	                '& input:focus': {
	                  backgroundColor: '#FFF',
	                  color:"#325381",
	                },
	                '& .MuiAutocomplete-popupIndicator': {
	                  visibility: 'hidden',
	                },
	                '&:hover .MuiAutocomplete-popupIndicator': {
	                  visibility: 'visible',
	                },
	                '& .MuiAutocomplete-input':{textAlign:'center'},
	              }}

	          renderInput={(params) => (<TextField {...params} size="small" placeholder="TC"  />)}
	        />
	      </Grid>

	      <Grid item xs={1}>
	        <LocalizationProvider dateAdapter={AdapterDayjs}>
	          <DatePicker sx={{  
	                '& .MuiInputBase-root': {
	                  border: 'none',
	                  fontSize: 13,
	                  paddingRight:1,            
	                },
	                '& .MuiOutlinedInput-root': {
	                  border: 'none',
	                  fontSize: 13,
	                  height: 40,
	                },

	                '& .MuiOutlinedInput-notchedOutline': {
	                  borderWidth: 0,
	                },

	              }} />
	        </LocalizationProvider>
	      </Grid>

	      <Grid item xs={1}>
	        <FormControl variant="standard">
	          <CssTextField id="custom-css-outlined-input" size="small" placeholder="AC No." />
	        </FormControl>
	      </Grid>

	      <Grid item xs={1}>
	        <FormControl variant="standard">
	          <CssTextField id="custom-css-outlined-input" size="small" placeholder="社員番号" />
	        </FormControl>
	      </Grid>

	      <Grid item xs={0.5} textAlign="center" sx={{ mt:1,}}>
	        <img src="../part-order/anal_1.png" width="60" height="22" />
	      </Grid>
	    </Grid>
	  {/*----------End Data----------*/}

	  <Divider sx={cssDivider} />
	</div>
  );
}

const top100Wo = [
  { label: '10023879 JA4 10023879 JA4' },
  { label: '10023879 JA4 10023879 JA4' },
  { label: '10023879 JA4 10023879 JA4' },
  { label: '10023879 JA4 10023879 JA4' },
  { label: '10023879 JA4 10023879 JA4' },
];

const top100Zone = [
  { label: 'EXT1' },
  { label: 'EXT2' },
  { label: 'INT' },
  { label: 'EEM' },
  { label: 'MAM' },
];

const topRSNN = [
  { label: 'TC' },
  { label: 'EO'},
  { label: 'RC'},
  { label: 'TR' },
  { label: 'RC'},
  { label: 'OT'},
];