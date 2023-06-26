import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { styled, alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';

import AccessTime from '@mui/icons-material/AccessTime';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
// Dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';

// table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

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
      textAlign:'left',
    },
    '& input': {
      height:10,
      textAlign:'left',
      color:"#325381",
    },
  },

});

// Css PC
const cssMro = { width: '100%', color: '#325381', textAlign: 'right', fontSize: '13px', position: 'absolute', right: 0, bottom: 0 };
const cssBox = { background : {xs:'#FFFFFF', md:'#F5F5F5'}, px: 1, py: 1, borderRadius: '5px'};
const cssBox2 = { height:18};

const cssBox3 = { px: 1, py: 1, borderRadius: '5px'};
const font12Center = { fontSize: '12px', textAlign: 'center' };
const font12Left = { fontSize: '12px', textAlign: 'left' };
const font12 = { fontSize: '12px'};
const cssOder = { width: '100%', textAlign: 'right', fontSize: '12px', fontWeight: 700, mb: '5px' };
const font13Bold = { fontSize: '13px', textAlign: 'center', py: 2, fontWeight: 700 };

const cssTitle = { color : '#325381', fontSize:14, mt:{xs: 0, md:5}, };
const cssTitle1 = { color : '#325381', fontSize:14, mt:{xs: 0, md:5}, ml:{xs: 0, md:2} };
const cssDetailTitle = { color:'#325381', whiteSpace: 'nowrap', fontSize:{xs:11, md:16}};
const cssDetailTitle1 = { color:'#325381', whiteSpace: 'nowrap', fontSize:{xs:11, md:16}, ml:1};
const cssDetail = { color:'#DE0606', fontSize:'11px' };
const cssDetailData = { color:'#325381',fontSize:{ xs:11, md:16 } , textAlign: 'center', height:25 };
const cssData = { ml:2, display:'flex', alignItems:'center', fontSize:12, color:'#DE0606' };
const cssEnd = { textAlign:'center', fontSize:12, color:'#DE0606', mt:1 };

const cssTitleReponsive = { color : '#325381', fontSize:13, ml: 1 };
const cssBoxReponsive = { background : {xs:'#FFFFFF', md:'#F5F5F5'}, px: 1, py: 1, borderRadius: '5px'};
const cssBoxre = { background : {xs:'#FFFFFF', md:'#F5F5F5'}, width:'100%', borderRadius: '5px'};

const CssText={color:'#325381', fontSize:{xs:11,md:16},};

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

//textarea
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 500px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 6;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#F0F0F0'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

// search
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#F0F0F0',
  '&:hover': {
    backgroundColor: '#F0F0F0',
  },
  marginLeft: 0,
  width: '100%',

  [theme.breakpoints.up('sm')]: {
    marginTop:10,
    width: 'auto',
    borderRadius:10,
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100ch',
      '&:focus': {
        width: '100ch',
      },
    },
  },
}));

const ItemCSS = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  color: theme.palette.text.secondary,
  boxShadow:'none',
}));

const ItemFrame = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FFFFFF',
  ...theme.typography.body2, 
  width: 235,
  height:70,
  marginRight:20,
  padding: theme.spacing(0),
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  boxShadow:'none',
}));

const cardMedia = { margin: 'auto', width: { xs: 138, md: 235 }, height: { xs: 68, md: 92 }, mt:2, ml:2 };
const cssSearchData = { fontSize:16,color:'#325381' };
  //endtextarea
// List Data Search

function createData(
  id: number,
  partNumber: string,
  noMen: string,
  UT: string,
  TTL: string,
  MJP: number,
) {
  return { id, partNumber, noMen, UT, TTL, MJP };
}

const rows = [
  createData(
    0,
    'MS2465 - 1',
    'M*PIN COTTER',
    'EA',
    '123',
    '',
  ),
  createData(
    1,
    'MS2465 - 1',
    'M*PIN COTTER',
    'EA',
    '123',
    '',
  ),
  createData(
    2,
    'MS2465 - 1',
    'M*PIN COTTER',
    'EA',
    '123',
    '',
  ),
  createData(
    3,
    'MS2465 - 1',
    'M*PIN COTTER',
    'EA',
    '123',
    '',
  ),
  createData(
    4,
    'MS2465 - 1',
    'M*PIN COTTER',
    'EA',
    '123',
    '',
  ),
  createData(
    5,
    'MS2465 - 1',
    'M*PIN COTTER',
    'EA',
    '123',
    '',
  ),
  createData(
    6,
    'MS2465 - 1',
    'M*PIN COTTER',
    'EA',
    '123',
    '',
  ),
  createData(
    7,
    'MS2465 - 1',
    'M*PIN COTTER',
    'EA',
    '123',
    '',
  ),
  createData(
    8,
    'MS2465 - 1',
    'M*PIN COTTER',
    'EA',
    '123',
    '',
  ),
  createData(
    9,
    'MS2465 - 1',
    'M*PIN COTTER',
    'EA',
    '123',
    '',
  ),
  createData(
    10,
    'MS2465 - 1',
    'M*PIN COTTER',
    'EA',
    '123',
    '',
  ),
];

//CSS
const cssCombobox= {width: '90%', bgcolor:"#F0F0F0", '& .MuiAutocomplete-input':{textAlign:'center', color:"#325381"},};
const cssCombobox1= {width: '90%', ml:2, bgcolor:"#F0F0F0", '& .MuiAutocomplete-input':{textAlign:'center' , color:"#325381"},};

export default function Anal() {

  // Dialog Memo
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // END Dialog Memo

  // Dialog Search
  const [openSearch, setOpenSearch] = React.useState(false);

  const handleClickOpenSearch = () => {
    setOpenSearch(true);
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
  };
  // END Dialog Search

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

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const isMobile = width <= 768;

  return (
  <div>
    <Box sx={{ color: '#325381', mx: { xs: 2, md: 4 }, my: { xs: 3, md: 4 } }}>
    {/*----------HEADER----------*/}
      <Grid container spacing={2}>
        <Grid item xs={7} md={9}>
        { isMobile ? 
          <Typography color="#3A5075" sx={{ p: { xs: 0, md: 4 }, ml:2  }}>
                  <strong>Part Order</strong>
          </Typography>
          :
          <CardMedia
            sx={{ width: { xs: 150, md: 222} , height: { xs: 40, md: 58}}}
            image="../part-order/anal_1.png"
            title="ANA"
          />
        }
        </Grid>
        <Grid item xs={5} md={3} sx={{ position: 'relative' }}>  
          <Link href="https://www.mrojpn.co.jp" underline="none" target="_blank">
          { isMobile ? 

              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{height:20}}
                >
                <FormGroup>
                   <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                </FormGroup>
                <img src="../menu/iconmenu.png" width="20" height="20" />
              </IconButton>
            :
            <Typography sx={cssMro}>
            https://www.mrojpn.co.jp
            </Typography>
          }
          </Link>
        </Grid>
      </Grid>
      <Divider sx={{ my: 1}} />

      <Grid container spacing={2} sx={{ pt: 2 }}>
        <Grid item xs={12} md={12}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs={1.7} md={0.5}>
                <Avatar alt="Travis Howard" 
                src="/avatar/avatar.png"
                sx={{ width: 35, height: 35,ml:{xs:1, md:2}, display: 'flex' }} />
              </Grid>
              <Grid item xs>
                <Typography sx={{ color : '#325381', mt:1, fontSize:14, display: 'flex' }} >
                  桃太郎 桃太郎
                </Typography>
              </Grid>
              <Grid item xs sx={{ display:'flex', alignItems:'right', justifyContent:'right' }}>
                <Link sx={{ cursor:'pointer' }}>
                  <img src="../part-order/print.png" width="32" height="32"/>
                </Link>
              </Grid>
            </Grid>
            {isMobile ?
            <div>
              <Grid container>
                <Grid item xs={3.5} md={2.7}>
                  <Grid container>
                    <Grid item xs>
                      <Typography sx={cssTitle} > Work Order </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={3.5} md={2.6}>
                  <Grid container>
                    <Grid item xs>
                      <Typography sx={cssTitle} > Task Card </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={2.5} md={1.2}>
                  <Grid container>
                    <Grid item xs>
                      <Typography sx={cssTitle} > Zone </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={2.5} md={1.2}>
                  <Grid container>
                    <Grid item xs>
                      <Typography sx={cssTitle} > RSN </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Paper sx={cssBoxre}>
                <Grid container>
                  <Grid item xs={3.5} md={2.7}>
                    <Grid container>
                      <Grid item xs>
                          <Autocomplete
                            disableClearable
                            id="free-solo-demo"
                            sx={{
                              '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                              },
                            }}
                            freeSolo
                            options={topWorkOrderFilms}
                            renderInput={(params) => <TextField {...params} placeholder="10023866" size="small" />}
                          />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={3.5} md={2.6}>
                    <Grid container>
                      <Grid item xs> 
                        <Autocomplete
                          disableClearable
                          id="free-solo-demo"
                          sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                              border: 'none',
                            },
                          }}
                          freeSolo
                          options={topCardFilms}
                          renderInput={(params) => <TextField {...params} placeholder="ANA - 1230006" size="small" sx={{ fontSize: 13 }}/>}
                        />
                      </Grid>
                    </Grid> 
                  </Grid>

                  <Grid item xs={2.5} md={1.2}>
                    <Grid container>
                      <Grid item xs>
                        <Autocomplete
                          disableClearable
                          id="free-solo-demo"
                          sx={{
                              '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                              },
                            }}
                          freeSolo
                          options={topZoneFilms}
                          renderInput={(params) => <TextField {...params} placeholder="EXT2" size="small" sx={{ fontSize: 13 }}/>}
                        />
                      </Grid>
                    </Grid> 
                  </Grid>

                  <Grid item xs={2.5} md={1.2}>
                    <Grid container>
                      <Grid item xs>
                        {isMobile ?
                        <Autocomplete
                          disableClearable
                          id="free-solo-demo"
                          sx={{
                              '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                              },
                            }}
                          freeSolo
                          options={topZoneFilms}
                          renderInput={(params) => <TextField {...params} placeholder="EXT2" size="small" sx={{ fontSize: 13 }}/>}
                        />
                        :
                        <Autocomplete
                          disableClearable
                          id="combo-box-demo"
                          options={topZoneFilms}
                          sx={{ width: {xs:70 , md: 140}, bgcolor:"#F0F0F0" }}
                          renderInput={(params) => <TextField {...params} placeholder="EXT2" size="small" sx={{ fontSize: 13 }} />}
                        />
                      }
                      </Grid>
                    </Grid>   
                  </Grid>
                </Grid>
              </Paper>

              <Grid item xs sx={{ mt:2 }}>
                  <Paper sx={cssBox}>
                    <Grid container>
                      <Grid item xs={3} md={2.7}>
                        <Grid container>
                          <Grid item xs>
                            <Typography sx={cssTitleReponsive}>AC Number</Typography>
                            <Typography sx={cssTitleReponsive}>出庫資村</Typography>
                          </Grid>
                          <Divider orientation="vertical" flexItem />
                        </Grid>
                      </Grid>

                      <Grid item xs={3} md={2.6}>
                        <Grid container>
                          <Grid item xs>
                            <Typography sx={cssTitleReponsive}>要求者</Typography>
                            <Typography sx={cssTitleReponsive}>出庫資村</Typography>
                          </Grid>
                          <Divider orientation="vertical" flexItem />
                        </Grid> 
                      </Grid>

                      <Grid item xs={3} md={1.2}>
                        <Grid container>
                          <Grid item xs>
                            <Typography sx={cssTitleReponsive}>Date</Typography>
                            <Typography sx={cssTitleReponsive}>出庫資村</Typography>
                          </Grid>
                          <Divider orientation="vertical" flexItem />
                        </Grid> 
                      </Grid>

                      <Grid item xs={3} md={1.2}>
                        <Grid container>
                          <Grid item xs>
                            <Typography sx={cssTitleReponsive}>Time</Typography>
                            <Typography sx={cssTitleReponsive}>出庫資村</Typography>
                          </Grid>
                        </Grid>   
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </div>
            :
            <div>
            <Grid container>
              <Grid item xs={2.8}>
                <Typography sx={cssTitle1} > Work Order Number </Typography>
              </Grid>

              <Grid item xs={2.7}>
                <Typography sx={cssTitle} > Task Card Number </Typography>
              </Grid>

              <Grid item xs={1.2}>
                <Typography sx={cssTitle} > Zone </Typography>
              </Grid>

              <Grid item xs={1.2}>
                <Typography sx={cssTitle} > RSN </Typography>
              </Grid>

              <Grid item xs={3.5}>
                <Grid container sx={{ ml:5 }}>
                  <Grid item xs={6}>
                    <Grid item xs>
                      <Grid container spacing={0} sx={{ mt: '10px' }}>
                        <Grid item xs={12}>
                          <Typography sx={font12}>Date</Typography>
                          <Grid container alignItems="center" justifyContent="center">
                            <Grid item xs={2} sx={{ display:"flex", alignItems:"left", justifyContent:"left" }}>
                              <CalendarMonth />
                            </Grid>
                            <Grid item xs>
                              <Typography sx={{ color : '#325381', fontSize:14}}>2023/05/18</Typography>
                            </Grid>
                          </Grid>

                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={6}>
                    <Grid item xs>
                      <Grid container spacing={0} sx={{ mt: '10px' }}>
                        <Grid item xs={12}>
                          <Typography sx={font12}>Time</Typography>
                          <Grid container alignItems="center" justifyContent="center">
                            <Grid item xs={2} sx={{ display:"flex", alignItems:"left", justifyContent:"left" }}>
                              <AccessTime />
                            </Grid>
                            <Grid item xs>
                              <Typography sx={{ color : '#325381', fontSize:14}}>14:00</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1, mr:10}} />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={2.8}>
                <Autocomplete
                  disableClearable
                  id="combo-box-demo"
                  options={topWorkOrderFilms}
                  defaultValue="10023822"
                  sx={cssCombobox1}
                  renderInput={(params) => <TextField {...params} size="small" sx={{ fontSize: 13 }} />}
                />
              </Grid>

              <Grid item xs={2.7}>
                <Autocomplete
                  disableClearable
                  id="combo-box-demo"
                  options={topCardFilms}
                  defaultValue="ANA - 1230007"
                  sx={cssCombobox}
                  renderInput={(params) => <TextField {...params} size="small" sx={{ fontSize: 13 }} />}
                />
              </Grid>

              <Grid item xs={1.2}>
                <Autocomplete
                  disableClearable
                  id="combo-box-demo"
                  options={topZoneFilms}
                  defaultValue="EXT2"
                  sx={cssCombobox}
                  renderInput={(params) => <TextField {...params} size="small" sx={{ fontSize: 13 }} />}
                />
              </Grid>

              <Grid item xs={1.2}>
                <Autocomplete
                  disableClearable
                  id="combo-box-demo"
                  options={topRSNFilms}
                  defaultValue="TC"
                  sx={cssCombobox}
                  renderInput={(params) => <TextField {...params} size="small" sx={{ fontSize: 13 }} />}
                />
              </Grid>

              <Grid item xs={3.5} sx={{ ml:5 }}>
                  
                <Grid container>
                  <Grid item xs={6}>
                    <Typography sx={font12}>AC Number</Typography>
                    <Typography sx={font12} ><strong>JA219A</strong></Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography sx={font12}>要求者</Typography>
                    <Typography sx={font12} ><strong>70075</strong></Typography>
                    <Typography sx={font12}>中嶋</Typography>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
            </div>
            }
            
          </Box>
        </Grid>
      </Grid>

      {/*header 2*/}

      <Grid container spacing={2} sx={{ pt: 2, pr:{xs:0, md:2}  }}>
        <Grid item xs={3} md={2.8}>
          <Box sx={cssBox3}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailTitle1}>Parts Number</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={2} md={2.8}>
          <Box sx={cssBox3}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailTitle}>Nomen</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={1} md={1.3}>
          <Box sx={cssBox3}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailTitle}>UT</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={1} md={1.3}>
          <Box sx={cssBox3}>
            <Grid container>
              <Grid item xs>
                <Grid container>
                  <Grid item xs={3}>
                    <Typography sx={cssDetailTitle}>TTL</Typography>
                  </Grid>
                {isMobile ?
                  ''
                  :
                  <Grid item xs>
                    <img src="../home/ana.png" width="60" height="24" />
                  </Grid>
                }
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={2} md={1.3}>
          <Box sx={cssBox3}>
            <Grid container>
              <Grid item xs>
                <Grid container>
                  <Grid item xs={3.5}>
                    <Typography sx={cssDetailTitle}>MJP</Typography>
                  </Grid>
                {isMobile ?
                  ''
                  :
                  <Grid item xs>
                    <img src="../home/ana.png" width="60" height="24" />
                  </Grid>
                }
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={2} md={1.3}>
          <Box sx={cssBox3}>
            <Grid container>
              <Grid item xs>
                {isMobile ? 
                <Typography sx={{ color:'#D31D1D', whiteSpace: 'nowrap', fontSize:{xs:11, md:16} }}>要求数</Typography>
                :
                <Typography sx={{ color:'#D31D1D', fontSize:{xs:11, md:16} }}>QTY 要求</Typography>
                }
              </Grid>
            </Grid>
          </Box>
        </Grid>

      </Grid>

    {/*--------------------------------Detail-------------------------------*/}

      {/*titleDetailRED*/}
      {isMobile ?
        ''
      :
      <Grid container spacing={2} sx={{ pl:{xs:0, md:2}, pr:{xs:0, md:2} }}>
        <Grid item xs={12} md={2.8}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}>互換性部品性情報あり</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={2.8}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      }
      {/*End titleDetailRED*/}

      <Grid container spacing={2} sx={{ pl:{xs:0, md:2}, pr:{xs:0, md:2} }}>
        <Grid item xs={3} md={2.8}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Grid container sx={{ height:24 }}>
                  <Grid item xs={3}>
                    <SearchIcon color="disabled" onClick={handleClickOpenSearch} sx={{ cursor:'pointer' }} /> 
                  </Grid>
                  <Grid item xs={9}>
                    <Typography sx={{ color:'#325381', fontSize:{xs:11,md:16}, ml:2 }}>MS24665 - 153</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={2} md={2.8}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}>M*PIN COTTER</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={1} md={1.3}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}>EA</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={1} md={1.3}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}>5023</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={2} md={1.3}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}>10023631</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={2} md={1.3}>
          <Autocomplete
            disableClearable
            id="combo-box-demo"
            options={topQTY}
            defaultValue="1"
            sx={{ width: "100%", 
            bgcolor:"#F0F0F0",
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              }, 
              
              '& .MuiAutocomplete-input': {
               textAlign:"center",
               color:"#325381",
              }, 
            }}
            renderInput={(params) => <TextField {...params} size="small" sx={{ fontSize: 13 }} />}
          />
        </Grid>

        <Grid item xs={1} md={1}>
          {isMobile ?
          <img src="../home/delete.png" width="20" height="20" />
          :
          <Link sx={{ cursor:'pointer' }}>
            <img src="../home/delete.png" width="28" height="28" />
          </Link>
          }
        </Grid>
      </Grid>
    {/*---------------------------Detail------------------------------*/}

    {/*--------------------------------Detail1-------------------------------*/}

      {/*titleDetailRED*/}
      {isMobile ?
        ''
      :
      <Grid container spacing={2} sx={{ pl:{xs:0, md:2}, pr:{xs:0, md:2} }}>
        <Grid item xs={12} md={2.8}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}>互換性部品性情報あり</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={2.8}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}>NH0000</Typography>
              </Grid>
              <Grid item xs>
                <Typography sx={cssDetail}>16-27C</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      }
      {/*End titleDetailRED*/}

      <Grid container spacing={2} sx={{ pl:{xs:0, md:2}, pr:{xs:0, md:2} }}>
        <Grid item xs={3} md={2.8}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Grid container sx={{ height:24 }}>
                  <Grid item xs={3}>
                    <SearchIcon color="disabled" onClick={handleClickOpenSearch} sx={{ cursor:'pointer' }} /> 
                  </Grid>
                  <Grid item xs={9}>
                    <CssTextField sx={CssText} size="small" placeholder="" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={2} md={2.8}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}>S*LOCTITE 50CC</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={1} md={1.3}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}>EA</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={1} md={1.3}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}>23</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={2} md={1.3}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}>0</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={2} md={1.3}>
          <Autocomplete
            disableClearable
            id="combo-box-demo"
            options={topQTY}
            defaultValue="1"
            sx={{ width: "100%", 
            bgcolor:"#F0F0F0",
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              }, 
              
              '& .MuiAutocomplete-input': {
               textAlign:"center",
               color:"#325381",
              }, 
            }}
            renderInput={(params) => <TextField {...params} size="small" sx={{ fontSize: 13 }} />}
          />
        </Grid>

        <Grid item xs={1} md={1}>
          {isMobile ?
          <img src="../home/delete.png" width="20" height="20" />
          :
          <Link sx={{ cursor:'pointer' }}>
            <img src="../home/delete.png" width="28" height="28" />
          </Link>
          }
        </Grid>
      </Grid>
    {/*---------------------------Detail1------------------------------*/}

    {/*--------------------------------Detail2-------------------------------*/}

      {/*titleDetailRED*/}
      {isMobile ?
        ''
      :
      <Grid container spacing={2} sx={{ pl:{xs:0, md:2}, pr:{xs:0, md:2} }}>
        <Grid item xs={12} md={2.8}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}>互換性部品性情報あり</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={2.8}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      }
      {/*End titleDetailRED*/}

      <Grid container spacing={2} sx={{ pl:{xs:0, md:2}, pr:{xs:0, md:2} }}>
        <Grid item xs={3} md={2.8}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Grid container sx={{ height:24 }}>
                  <Grid item xs={3}>
                    <SearchIcon color="disabled" onClick={handleClickOpenSearch} sx={{ cursor:'pointer' }} /> 
                  </Grid>
                  <Grid item xs={9}>
                    <CssTextField sx={CssText} size="small" placeholder="" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={2} md={2.8}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}>RESTRAINT ASSY - F/O</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={1} md={1.3}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}>EA</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={1} md={1.3}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}>16</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={2} md={1.3}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}>0</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={2} md={1.3}>
          <Autocomplete
            disableClearable
            id="combo-box-demo"
            options={topQTY}
            defaultValue="1"
            sx={{ width: "100%", 
            bgcolor:"#F0F0F0",
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              }, 
              
              '& .MuiAutocomplete-input': {
               textAlign:"center",
               color:"#325381",
              }, 
            }}
            renderInput={(params) => <TextField {...params} size="small" sx={{ fontSize: 13 }} />}
          />
        </Grid>

        <Grid item xs={1} md={1}>
          {isMobile ?
          <img src="../home/delete.png" width="20" height="20" />
          :
          <Link sx={{ cursor:'pointer' }}>
            <img src="../home/delete.png" width="28" height="28" />
          </Link>
          }
        </Grid>
      </Grid>
    {/*---------------------------Detail2------------------------------*/}

    {/*--------------------------------Detail3-------------------------------*/}

      {/*titleDetailRED*/}
      {isMobile ?
        ''
      :
      <Grid container spacing={2} sx={{ pl:{xs:0, md:2}, pr:{xs:0, md:2} }}>
        <Grid item xs={12} md={2.8}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}>互換性部品性情報あり</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={2.8}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox2}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetail}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      }
      {/*End titleDetailRED*/}

      <Grid container spacing={2} sx={{ pl:{xs:0, md:2}, pr:{xs:0, md:2} }}>
        <Grid item xs={3} md={2.8}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Grid container sx={{ height:24 }}>
                  <Grid item xs={3}>
                    <SearchIcon color="disabled" onClick={handleClickOpenSearch} sx={{ cursor:'pointer' }} /> 
                  </Grid>
                  <Grid item xs={9}>
                    <CssTextField sx={CssText} size="small" placeholder="" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={2} md={2.8}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}>SEAT CAP</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={1} md={1.3}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}>EA</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={1} md={1.3}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}>0</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={2} md={1.3}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}>0</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={2} md={1.3}>
          <Autocomplete
            disableClearable
            id="combo-box-demo"
            options={topQTY}
            defaultValue="1"
            sx={{ width: "100%", 
            bgcolor:"#F0F0F0",
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              }, 
              
              '& .MuiAutocomplete-input': {
               textAlign:"center",
               color:"#325381",
              }, 
            }}
            renderInput={(params) => <TextField {...params} size="small" sx={{ fontSize: 13 }} />}
          />
        </Grid>

        <Grid item xs={1} md={1}>
          {isMobile ?
          <img src="../home/delete.png" width="20" height="20" />
          :
          <Link sx={{ cursor:'pointer' }}>
            <img src="../home/delete.png" width="28" height="28" />
          </Link>
          }
        </Grid>
      </Grid>
    {/*---------------------------Detail3------------------------------*/}
      

      {/*--------------------------------Detail Plus-------------------------------*/}
      {
        isMobile ?
        ''
        :
      <Grid container spacing={2} sx={{ pl:2, pr:2, pt:4 }}>
        <Grid item xs={12} md={2.8}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Grid container sx={{ height:24 }}>
                  <Grid item xs={3}>
                    <Link onClick={handleClickOpenSearch} sx={{ cursor:'pointer' }}>
                      <img src="../part-kit/plus.png" width="28" height="28"   />
                    </Link>
                  </Grid>
                  <Grid item xs={9}>
                    <CssTextField sx={CssText} size="small" placeholder="Add rows..." />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={2.8}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={1.3}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={cssDetailData}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={2} md={1.3}>
          <Autocomplete
            disableClearable
            id="combo-box-demo"
            options={topQTY}
            defaultValue="1"
            sx={{ width: "100%", 
            bgcolor:"#F0F0F0",
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              }, 
              
              '& .MuiAutocomplete-input': {
               textAlign:"center",
               color:"#325381",
              }, 
            }}
            renderInput={(params) => <TextField {...params} size="small" sx={{ fontSize: 13 }} />}
          />
        </Grid>

        <Grid item xs={1} md={1}>
          {isMobile ?
          <img src="../home/delete.png" width="20" height="20" />
          :
          <Link sx={{ cursor:'pointer' }}>
            <img src="../home/delete.png" width="28" height="28" />
          </Link>
          }
        </Grid>
      </Grid>
    }
      {/*---------------------------Detail------------------------------*/}
      {isMobile ? 
        ''
        :
        <Typography sx={cssEnd}>危険物コードが表示されている　商品は取り寄せに時間を要す可能性があります</Typography>
      }

    {isMobile ? 
      ''
      :
      <Grid container spacing={2} sx={{ mt:1 }}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Grid container spacing={2}>

                <Grid item xs={4} sx={{ display:"flex" }}>
                  <Button variant="contained" sx={{ width:135, fontSize:11,backgroundColor: '#325381' }}><img src="../home/print.png" width="24" height="24"/>
                    <Typography sx={{ color:'#FFFFFF', fontSize:10}}>Printer</Typography>
                  </Button>
                </Grid>

                <Grid item xs={4} sx={{ display:"flex" }}>
                  <Button variant="contained" sx={{ width:135, fontSize:11,backgroundColor: '#325381' }} onClick={handleClickOpen}><img src="../home/memo.png" width="24" height="24" />
                    <Typography sx={{ color:'#FFFFFF', fontSize:10}}>メモ</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                </Grid>

                <Grid item xs={2.5} sx={{ display:"flex",alignItems:"right",justifyContent:"right" }}>
                  <Button variant="contained" sx={{ width:135, fontSize:11,backgroundColor: '#325381' }}><img src="../home/spr.png" width="24" height="24" />
                    <Typography sx={{ color:'#FFFFFF', fontSize:10}}>SPR 起票</Typography>
                  </Button>
                </Grid>

                <Grid item xs={2.5} sx={{ display:"flex",alignItems:"right",justifyContent:"center" }}>
                  <Link  href="../request_for_part_and_material">
                    <Button variant="contained" sx={{ width:135, fontSize:11,backgroundColor: '#325381' }}><img src="../home/order.png" width="24" height="24" />
                      <Typography sx={{ color:'#FFFFFF', fontSize:10}}>Direct Order</Typography>
                    </Button>
                  </Link>
                </Grid>

                <Grid item xs={2.5} >
                  <Button variant="contained" sx={{ width:135, fontSize:11,backgroundColor: '#325381' }}><img src="../home/hozon.png" width="24" height="24" />
                    <Typography sx={{ color:'#FFFFFF', fontSize:10}}>保存</Typography>
                  </Button>
                </Grid>
                <Grid item xs={1}> 
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    } 
      {/*end header 2*/}
    </Box>

    {/*Dialog memo*/}
     <Dialog open={open} onClose={handleClose} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}> 
            <Typography color="#325381" sx={{ fontSize:20 }}>
              <strong>Memo</strong>
              <Divider sx={{ my: 0}} />
            </Typography>
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
                  height: 500,
                  ml:2,
                  mr:1,
                },
              }}
            >
              <Paper elevation={0}>     
                <StyledTextarea
                  aria-label="minimum height"
                  minRows={5}
                  placeholder=""
                  sx={{ width:1200 }}
                />
              </Paper>
            </Box>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    {/*----------End Dialog memo----------*/}

      {/*----------Dialog search----------*/}
     <Dialog open={openSearch} onClose={handleCloseSearch} maxWidth="xl">
        <DialogTitle>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseSearch}>
          <Grid container spacing={2} sx={{ p: { xs: 2, md: 0 }, display:'flex',mb:4  }}>
            <ItemFrame>
              <CardMedia
                sx={cardMedia}
                image="../part-order/anal.png"/>  
            </ItemFrame>
          </Grid>
        </BootstrapDialogTitle>
        <Grid container spacing={2} sx={{ mt:1 }}>
          <Grid item xs={6}>
            <ItemCSS>
              <Typography color="#325381" sx={{ fontSize:20 }} textAlign="left">
                <strong>Part Number Search</strong>
              </Typography>
            </ItemCSS>
          </Grid>
          <Grid item xs={6}>
            <ItemCSS sx={{ mt:1 }}>
              <Typography color="#325381" textAlign="right">
                https://www.mrojpn.co.jp
              </Typography>
            </ItemCSS>
          </Grid>
        </Grid>
        <Divider sx={{ my: 0}} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            
             <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  width: 1200,
                  height: 500,
                },
              }}
            >
              <Paper elevation={0}>
                 <Table size="small" stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>
                        <Typography  sx={cssSearchData}>
                          <strong>Parts Number</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>NoMen</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>UT</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>TTL</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>-MJP</strong>
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell>
                          <Link  href="/">
                            <img src="../home/upload.png" width="30" height="30" style={{ align:'left' }}/>
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.partNumber}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.noMen}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.UT}</strong>
                          </Typography>
                        </TableCell>
                         <TableCell>
                        <Typography sx={cssSearchData}>
                            <strong>{row.TTL}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.MJP}</strong>
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

              </Paper>
            </Box>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    {/*----------End Dialog search----------*/}

    {/*----------Footer----------*/}
    <Divider />
    <Box component="footer">   
      <Typography sx={{ color:"#9AA1A9", fontSize:13, ml:4 }}>
        Copyright © 2023 OCC
      </Typography>
    </Box>
    {/*----------Footer----------*/}

  </div>
  );
}

interface FilmOptionType {
  title: string;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const topWorkOrderFilms = [
  { label: '10023865'},
  { label: '10023864'},
  { label: '10023822'},
];

const topCardFilms = [
  { label: 'ANA - 1230007'},
  { label: 'ANA - 1230008'},
  { label: 'ANA - 1230009'},
];

const topZoneFilms = [
  { label: 'EXT1'},
  { label: 'EXT3'},
  { label: 'EXT4'},
];

const topRSNFilms = [
  { label: 'HC'},
  { label: 'VC'},
  { label: 'TC'},
  { label: 'AC'},
];

const topQTY = [
  { label: '1'},
  { label: '2'},
  { label: '3'},
];
