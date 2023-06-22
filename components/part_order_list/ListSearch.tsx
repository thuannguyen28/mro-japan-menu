import * as React from 'react';
import ListPart from '../../components/request_for_part_and_material/ListPart';
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

// Dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';

import Select, { SelectChangeEvent } from '@mui/material/Select';


function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 2,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

// ccs
const cssMro = { width: '100%', color: '#325381', textAlign: 'right', fontSize: '13px', position: 'absolute', right: 0, bottom: 0 };
const cssOder = { width: '100%', textAlign: 'right', fontSize: '12px', fontWeight: 700, mb: '5px' };
const cssBox = { background : '#F5F5F5', px: 1, py: 1, borderRadius: '5px'};
const font12 = { fontSize: '12px'};
const font12Center = { fontSize: '12px', textAlign: 'center' };
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

  // Dialog Search
  const [openSearch, setOpenSearch] = React.useState(false);

  const handleClickOpenSearch = () => {
    setOpenSearch(true);
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
  };
  // END Dialog Memo'

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

	      <Grid item xs>
	        <Typography sx={cssTitle} >
	          <strong>No.</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs>
	        <Typography sx={cssTitle} >
	          <strong>STS</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs>
	        <Typography sx={cssTitle} >
	          <strong>WO</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs>
	        <Typography sx={cssTitle} >
	          <strong>Task Card</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs>
	        <Typography sx={cssTitle} >
	          <strong>Zone</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs>
	        <Typography sx={cssTitle} >
	          <strong>EMP</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs>
	        <Typography sx={cssTitle} >
	          <strong>AC No.</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs>
	        <Typography sx={cssTitle} >
	          <strong>Date</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs>
	        <Typography sx={cssTitle} >
	          <strong>Time</strong>
	        </Typography>
	      </Grid>

	      <Grid item xs={1}>
	        
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
	            <MenuItem onClick={handleClickOpenSearch}><Typography sx={cssMenu} >View</Typography></MenuItem>
	          </Menu>
	      </Grid>

	      <Grid item xs>
	        <FormControl variant="standard">
	          <CssTextField  size="small" placeholder="ID" />
	        </FormControl>
	      </Grid>

	      <Grid item xs>
	        <FormControl>
	          <CssTextField size="small" placeholder="Status" />
	        </FormControl>
	      </Grid>

	      <Grid item xs>
	        <Autocomplete
	          disableClearable
	          id="combo-box-demo"
	          options={topWo}
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
	                '& .MuiAutocomplete-root': {
	                  textOverflow: 'inherit',
	                  color:"#325381",
	                },
	                '& .MuiAutocomplete-input': {
	                  textOverflow: 'inherit',
	                  color:"#325381",
	                },
	                
	              }}

	          renderInput={(params) => (<TextField {...params} size="small" placeholder="Work Order"  />)}
	        />
	      </Grid>

	      <Grid item xs>
	        <CssTextField id="custom-css-outlined-input" size="small" placeholder="task" />
	      </Grid>

	      <Grid item xs>
	        <Autocomplete
	          disableClearable
	          freeSolo
	          id="combo-box-demo"
	          options={top100Films}
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

	          renderInput={(params) => (<TextField {...params} size="small" placeholder="Zone"  />)}
	        />
	      </Grid>

	      <Grid item xs>
	        <FormControl variant="standard">
	          <CssTextField id="custom-css-outlined-input" size="small" placeholder="EMP" />
	        </FormControl>
	      </Grid>

	      <Grid item xs>
	        <FormControl variant="standard">
	          <CssTextField id="custom-css-outlined-input" size="small" placeholder="AC No." />
	        </FormControl>
	      </Grid>

	      <Grid item xs>
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

	      <Grid item xs>
	        <FormControl variant="standard">
	          <CssTextField id="custom-css-outlined-input" size="small" placeholder="Time" />
	        </FormControl>
	      </Grid>

	      <Grid item xs={1} textAlign="center" sx={{ mt:1,}}>
	        <img src="../part-order/anal_1.png" width="60" height="22" />
	      </Grid>
	    </Grid>
	  {/*----------End Data----------*/}

	  <Divider sx={cssDivider} />

	  {/*Dialog memo*/}
     <Dialog open={openSearch} onClose={handleCloseSearch} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseSearch}> 
            <Grid container spacing={2}>
              <Grid item xs={7} md={9}>
                <CardMedia
                  sx={{ width: { xs: 150, md: 222} , height: { xs: 40, md: 58}}}
                  image="../part-order/anal_1.png"
                  title="ANA"
                />
              </Grid>
              <Grid item xs={5} md={3} sx={{ position: 'relative' }}>  
                <Link href="https://www.mrojpn.co.jp" underline="none" target="_blank">
                  <Typography sx={cssMro}>
                  https://www.mrojpn.co.jp
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Divider sx={{ my: 1}} />
          </BootstrapDialogTitle>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  width: 1200,
                  height: 700,
                  ml:2,
                  mr:1,
                },
              }}
            >
              <Paper elevation={0}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography sx={cssOder}>21 - 15292</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                      <Typography sx={{ fontSize: '16px' }}>Request For Part And Materials</Typography>
                      <Typography sx={{ fontSize: '14px', mt: 1, mb: 1 }}>資村出庫要求伝票</Typography>
                      <Box sx={cssBox}>
                        <Grid container sx={{ height: '58px' }}>
                          <Grid item xs>
                            <Typography sx={{ fontSize: '12px', ml: 1, mt: '10px' }}>Issued Parts</Typography>
                            <Typography sx={{ fontSize: '12px', ml: 1 }}>出庫資村</Typography>
                          </Grid>
                          <Divider orientation="vertical" flexItem />
                          <Grid item xs>
                            <Grid container spacing={0} sx={{ mt: '10px' }}>
                              <Grid item xs={4}>
                                <Checkbox inputProps={{ 'aria-label': 'controlled' }} />
                              </Grid>
                              <Grid item xs={8}>
                                <Typography sx={font12}>MJP</Typography>
                                <Typography sx={font12}>自社資村</Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Divider orientation="vertical" flexItem />
                          <Grid item xs>
                            <Grid container spacing={0} sx={{ mt: '10px' }}>
                              <Grid item xs={4}>
                                <Checkbox inputProps={{ 'aria-label': 'controlled' }} />
                              </Grid>
                              <Grid item xs={8}>
                                <Typography sx={font12}>Customer</Typography>
                                <Typography sx={font12}>支給資村</Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Box sx={cssBox}>
                      <Typography sx={font12Center}>Requested by / 資村要求者</Typography>
                      <Divider sx={{ my: '4px'}} />
                      <Grid container>
                        <Grid item xs>
                          <Typography sx={font12Center}>Zone</Typography>
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs>
                          <Typography sx={font12Center}>Name</Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ my: '4px'}} />
                      <Grid container>
                        <Grid item xs>
                          <Typography sx={font12Center}></Typography>
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs>
                          <Typography sx={{ fontSize: '12px', textAlign: 'center', height: '65px' }}></Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Box sx={cssBox}>
                      <Typography sx={font12Center}>Received By / 資村受領者</Typography>
                      <Divider sx={{ my: '4px'}} />
                      <Grid container>
                        <Grid item xs>
                          <Typography sx={font12Center}>Zone</Typography>
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs>
                          <Typography sx={font12Center}>Name</Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ my: '4px'}} />
                      <Grid container>
                        <Grid item xs>
                          <Typography sx={{ fontSize: '12px', textAlign: 'center', height: '65px' }}></Typography>
                        </Grid>
                        <Divider orientation="vertical" flexItem>
                        </Divider>
                        <Grid item xs>
                          <Typography sx={{ fontSize: '12px', textAlign: 'center', height: '65px' }}></Typography>
                        </Grid>
                      </Grid>
                    </Box>          
                    
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Box sx={cssBox}>
                          <Typography sx={font12Center}>Supply Section</Typography>
                          <Typography sx={font12Center}>出庫担当者</Typography>
                          <Divider sx={{ my: '13px'}} />
                          <Grid container>
                            <Grid item xs>
                              <Typography sx={{ fontSize: '12px', textAlign: 'center', height: '56px' }}></Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={cssBox2}>
                          <Grid container spacing={1}>
                            <Grid item xs={12}>
                              <CardMedia
                                sx={{ width: 97 , height: 97, margin: 'auto' }}
                                image="../qr_code/QR 1.png"
                                title="ANA"
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <ListPart />

                <Grid container spacing={0} sx={{ mt : 2 }}>
                  <Grid item xs={12} md={9}>
                   <Typography sx={{ fontSize : '12px' }}>Note : 　① 　A/C-No. = Aircraft Registration No./ 機体登録　No.</Typography>
                   <Typography sx={{ fontSize : '12px', ml: '50px' }}>②　RSN. = Reason Code / 部品消費理由コード (TC = MR TASK CARD / EO = EO 作業 / TR = TRP / RC = Discrepancy Repair 不具合修復 / MQ = Maintenance Quality 作業品質関連 / OT = Other その他)</Typography>          
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography sx={{ fontSize : '12px', textAlign: 'right', mt: 2 }}>MRO Japan Form - SD - 004C</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider sx={{ my: 1}} />
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    {/*----------End Dialog memo----------*/}

	</div>
  );
}

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
];

const topWo = [
  { label: '10024280' },
  { label: '10024281' },
  { label: '10024282'},
];