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

const ItemCSS = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  color: theme.palette.text.secondary,
  boxShadow:'none',
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FBFBFB',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  height:60,
  marginRight:8,
  color: theme.palette.text.secondary,
  boxShadow:'none',
  [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(1),
          textAlign: 'left',
          height:10,
          marginRight:8,
          color: theme.palette.text.secondary,
          boxShadow:'none',
        },
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

// dọc
const ItemColumn = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FBFBFB',
  ...theme.typography.body2,
  marginRight:4,
  marginLeft:4,
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.text.secondary,
  boxShadow:'none',
}));
// ngang
const ItemRow = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FBFBFB',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  display: 'flex',
   // flexWrap: 'wrap',
  flexDirection: 'row',
  color: theme.palette.text.secondary,
  boxShadow:'none',
  [theme.breakpoints.up('sm')]: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        color: theme.palette.text.secondary,
        boxShadow:'none',
      },
}));

const ItemData = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F0F0F0',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom:20,
  marginRight:8,
  color: theme.palette.text.secondary,
  boxShadow:'none',
  [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(1),
          textAlign: 'center',
          marginRight:8,
          height:40,
          color: theme.palette.text.secondary,
          boxShadow:'none',
        },
}));

// ngang
const ItemRowData = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FFFFFF',
  ...theme.typography.body2,
  textAlign: 'center',
  display: 'flex',
  flexWrap: "wrap",
  flexDirection: 'row',
  color: theme.palette.text.secondary,
  boxShadow:'none',
}));

// ngang
const ItemRowDataList = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F0F0F0',
  ...theme.typography.body2,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  color: theme.palette.text.secondary,
  boxShadow:'none',
}));

const ItemColumnData = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F0F0F0',
  ...theme.typography.body2,
  marginRight:4,
  marginLeft:4,
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.text.secondary,
  boxShadow:'none',
}));

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
// end search

const cardMedia = { margin: 'auto', width: { xs: 138, md: 235 }, height: { xs: 68, md: 92 }, mt:2, ml:2 };
const cssTitle = { color : '#325381', fontSize:14, mt:{xs: 0, md:5} };
const cssCombobox = { color : '#325381', fontSize:14, textAlign:'center', ml:1 };
const cssData = { display:'flex', alignItems:'center', fontSize:12, color:'#DE0606' };
const cssEnd = { textAlign:'center', fontSize:12, color:'#DE0606' };
const cssSearchData = { fontSize:16,color:'#325381' };

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option: FilmOptionType) => option.title,
});


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

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Anal() {
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
  //endtextarea

  const isMobile = width <= 768;
  return (
  <div>
    <Box sx={{ width: '100%',}}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box sx={{height: '100%',margin:'auto', mt: { xs:0, md: 2}, width: { xs:'100%', md:'90%' } }} backgroundColor="#FFFFFF">
          {/*----------HEADER----------*/}
            { isMobile ? 
              <div>
                <Typography color="#3A5075" sx={{ p: { xs: 2, md: 4 }  }}>
                  <strong>Part Order</strong>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ ml:20 }}
                    >

                    <FormGroup>
                       <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    </FormGroup>
                    <MenuIcon />
                  </IconButton>
                </Typography>
              </div>
              : 
              <div>
               <Grid container spacing={2} sx={{ p: { xs: 2, md: 0 }  }}>
                  <ItemFrame>
                    <CardMedia
                      sx={cardMedia}
                      image="../part-order/anal.png"/>  
                  </ItemFrame> 
                </Grid>
                <Typography color="#325381" sx={{ mr:15 }} textAlign="right">
                https://www.mrojpn.co.jp
                </Typography>
                <Divider sx={{ my: 1}} />
              </div>
            }

            {/*----------END HEADER----------*/}

            {/*----------CONTENT1----------*/}
             <Grid container spacing={0} sx={{ mr:2, p: { xs: 2, md: 0 }  }} alignItems="center" backgroundColor="#FBFBFB">
              <Avatar alt="Travis Howard" 
              src="/avatar/avatar.png"
              sx={{ width: 35, height: 35, mr:2, ml:2, display: { xs: 'none', md: 'flex' } }} />
              <Typography sx={{ color : '#325381', mr:2, mt:1, fontSize:14, display: { xs: 'none', md: 'flex' }}} >
                桃太郎 桃太郎
              </Typography>
            </Grid>

            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  backgroundColor: '#FBFBFB' ,
                  mb:4,
                }}>

                <ItemRow>
                  <Item>
                    <Typography sx={cssTitle} >
                      Work Order Number
                    </Typography>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={topWorkOrderFilms}
                      sx={{ width: 350, bgcolor:"#F0F0F0" }}
                      renderInput={(params) => <TextField {...params} placeholder="10023866" size="small" sx={{ fontSize: 13 }} />}
                    />
                  </Item>
                  <Item>
                    <Typography sx={cssTitle} >
                      Task Card Number
                    </Typography>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={topCardFilms}
                      sx={{ width: 350, bgcolor:"#F0F0F0" }}
                      renderInput={(params) => <TextField {...params} placeholder="ANA - 1230006" size="small" sx={{ fontSize: 13 }} />}
                    />
                  </Item>
                  <Item>
                    <Typography sx={cssTitle} >
                      Zone
                    </Typography>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={topZoneFilms}
                      sx={{ width: 150, bgcolor:"#F0F0F0" }}
                      renderInput={(params) => <TextField {...params} placeholder="EXT2" size="small" sx={{ fontSize: 13 }} />}
                    />
                  </Item>
                  <Item>
                    <Typography sx={cssTitle} >
                      RSN
                    </Typography>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={topRSNFilms}
                      sx={{ width: 150, bgcolor:"#F0F0F0" }}
                      renderInput={(params) => <TextField {...params} placeholder="TC" size="small" sx={{ fontSize: 13 }} />}
                    />
                  </Item>

                  <Item>
                    <ItemRow>
                      <ItemColumn>
                        <ItemRow>
                          <ItemColumn sx={{ mr:1 }}>
                            <ItemColumn>          
                              <Typography sx={{ color : '#325381', fontSize:14, ml:1}} >
                                Date
                              </Typography>
                            </ItemColumn>
                            <ItemColumn>
                              <ItemRow>
                                <CalendarMonth />
                                <Typography sx={{ color : '#325381', fontSize:14, display:'flex', alignItems:'flex-end'}} >
                                  2023/05/18
                                </Typography>
                              </ItemRow>
                            </ItemColumn>
                          </ItemColumn>

                          <ItemColumn>
                            <Typography sx={{ color : '#325381', fontSize:14, ml:9}} >
                              Time
                            </Typography>
                            <ItemColumn>
                              <ItemRow sx={{ ml:8}} >
                                <AccessTime />
                                <Typography sx={{ color : '#325381', fontSize:14, display:'flex', alignItems:'flex-end'}} >
                                  14:00
                                </Typography>
                              </ItemRow>
                            </ItemColumn>
                          </ItemColumn>
                        </ItemRow>

                        <Divider sx={{ my:1 }}/>

                        <ItemRow>
                          <ItemColumn sx={{ mr:10 }}>
                            <ItemColumn>
                              <Typography sx={cssCombobox} >
                                  AC Number
                              </Typography>
                            </ItemColumn>
                            <ItemColumn>
                              <ItemRow>
                                <Typography sx={cssCombobox} >
                                  <strong>JA219A</strong>
                                </Typography>
                              </ItemRow>
                            </ItemColumn>
                          </ItemColumn>

                          <ItemColumn>
                            <ItemColumn>
                              <Typography sx={cssCombobox} >
                                要求者
                              </Typography>
                            </ItemColumn>
                            <ItemColumn>
                              <Typography sx={cssCombobox} >
                                <strong>70075</strong>
                              </Typography>
                            </ItemColumn>
                            <ItemColumn>
                              <Typography sx={cssCombobox} >
                                中嶋
                              </Typography>
                            </ItemColumn>
                          </ItemColumn>
                        </ItemRow>

                      </ItemColumn>
                    </ItemRow>
                  </Item>
                </ItemRow>

              </Paper>
              {/*----------ENDCONTENT1----------*/}
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0} sx={{ mb:2 }}>
                    <Grid item xs={3}>
                        <Typography sx={{ color:'#325381' }}>Parts Number</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography sx={{ color:'#325381' }}>Nomen</Typography>
                    </Grid>
                    <Grid item xs={1.2}>
                      <Typography sx={{ color:'#325381' }}>UT</Typography>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemRowData>
                        <Typography sx={{ color:'#325381', mr:1, display:'flex', alignItems:'center' }}>TTL</Typography>
                        <img src="../home/ana.png" width="60" height="24" />
                      </ItemRowData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemRowData>
                        <Typography sx={{ color:'#325381', mr:1, display:'flex', alignItems:'center' }}>TTL</Typography>
                        <img src="../home/ana.png" width="60" height="24" />
                      </ItemRowData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <Typography sx={{ color:'#325381' }}>QTY 要求</Typography>
                    </Grid>
                    <Grid item xs={1.2}>
                    </Grid>
                  </Grid>

                  <Typography sx={cssData}>互換性部品性情報あり</Typography>
                  <Grid container spacing={0}>
                    <Grid item xs={3}>
                      <ItemData>
                        <ItemRowDataList>
                          <ItemColumnData>
                            <SearchIcon color="disabled" />
                          </ItemColumnData>
                          <ItemColumnData sx={{ ml:10 }}>
                            <Typography sx={{ color:'#325381'}}>Parts Number</Typography>
                          </ItemColumnData>
                        </ItemRowDataList>
                      </ItemData>
                    </Grid>
                    <Grid item xs={3}>
                      <ItemData>Nomen</ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemData>UT</ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemData>TTL</ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemData>-MJP </ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={topQTY}
                        sx={{ width: 120, bgcolor:"#F0F0F0" }}
                        renderInput={(params) => <TextField {...params} placeholder="1" size="small" sx={{ fontSize: 13 }} />}
                      />
                    </Grid>
                    <Grid item xs={1.2}>
                      <img src="../home/delete.png" width="28" height="28" />
                    </Grid>
                  </Grid>

                  <Typography sx={cssData}>互換性部品性情報あり</Typography>
                  <Grid container spacing={0}>
                    <Grid item xs={3}>
                      <ItemData>
                        <ItemRowDataList>
                          <ItemColumnData>
                            <SearchIcon color="disabled" onClick={handleClickOpenSearch} /> 
                          </ItemColumnData>
                          <ItemColumnData sx={{ ml:10 }}>
                            <Typography sx={{ color:'#325381'}}>Parts Number</Typography>
                          </ItemColumnData>
                        </ItemRowDataList>
                      </ItemData>

                    </Grid>
                    <Grid item xs={3}>
                      <ItemData>Nomen</ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemData>UT</ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemData>TTL</ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemData>-MJP</ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={topQTY}
                        sx={{ width: 120, bgcolor:"#F0F0F0" }}
                        renderInput={(params) => <TextField {...params} placeholder="1" size="small" sx={{ fontSize: 13 }} />}
                      />
                    </Grid>
                    <Grid item xs={1.2}>
                      <img src="../home/delete.png" width="28" height="28" />
                    </Grid>
                  </Grid>

                  <Typography sx={cssData}>互換性部品性情報あり</Typography>
                  <Grid container spacing={0}>
                    <Grid item xs={3}>
                      <ItemData>
                        <ItemRowDataList>
                          <ItemColumnData>
                            <SearchIcon color="disabled" />
                          </ItemColumnData>
                          <ItemColumnData sx={{ ml:10 }}>
                            <Typography sx={{ color:'#325381'}}>Parts Number</Typography>
                          </ItemColumnData>
                        </ItemRowDataList>
                      </ItemData>

                    </Grid>
                    <Grid item xs={3}>
                      <ItemData>Nomen</ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemData>UT</ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemData>TTL</ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemData>-MJP </ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={topQTY}
                        sx={{ width: 120, bgcolor:"#F0F0F0" }}
                        renderInput={(params) => <TextField {...params} placeholder="1" size="small" sx={{ fontSize: 13 }} />}
                      />
                    </Grid>
                    <Grid item xs={1.2}>
                      <img src="../home/delete.png" width="28" height="28" />
                    </Grid>
                  </Grid>

                  <Typography sx={cssData}>互換性部品性情報あり</Typography>
                  <Grid container spacing={0}>
                    <Grid item xs={3}>
                      <ItemData>
                        <ItemRowDataList>
                          <ItemColumnData>
                            <SearchIcon color="disabled" />
                          </ItemColumnData>
                          <ItemColumnData sx={{ ml:10 }}>
                            <Typography sx={{ color:'#325381'}}>Parts Number</Typography>
                          </ItemColumnData>
                        </ItemRowDataList>
                      </ItemData>

                    </Grid>
                    <Grid item xs={3}>
                      <ItemData>Nomen</ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemData>UT</ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemData>TTL</ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemData>-MJP </ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={topQTY}
                        sx={{ width: 120, bgcolor:"#F0F0F0" }}
                        renderInput={(params) => <TextField {...params} placeholder="1" size="small" sx={{ fontSize: 13 }} />}
                      />
                    </Grid>
                    <Grid item xs={1.2}>
                      <img src="../home/delete.png" width="28" height="28" />
                    </Grid>
                  </Grid>

                  <Grid container spacing={0} sx={{ mt:2}}>
                    <Grid item xs={3}>
                      <ItemData>
                        <ItemRowDataList>
                          <ItemColumnData>
                            <AddIcon color="disabled" />
                          </ItemColumnData>
                          <ItemColumnData sx={{ ml:10 }}>
                            <Typography sx={{ color:'#325381'}}>Add rows...</Typography>
                          </ItemColumnData>
                        </ItemRowDataList>
                      </ItemData>

                    </Grid>
                    <Grid item xs={3}>
                      <ItemData></ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemData></ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemData></ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <ItemData></ItemData>
                    </Grid>
                    <Grid item xs={1.2}>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={topQTY}
                        sx={{ width: 120, bgcolor:"#F0F0F0" }}
                        renderInput={(params) => <TextField {...params} placeholder="" size="small" sx={{ fontSize: 13 }} />}
                      />
                    </Grid>
                    <Grid item xs={1.2}>
                      <img src="../home/delete.png" width="28" height="28" />
                    </Grid>
                  </Grid>
                  <Typography sx={cssEnd}>危険物コードが表示されている　商品は取り寄せに時間を要す可能性があります</Typography>

                  <Grid container spacing={2} sx={{ mt:2}}>
                    <Grid item xs={1.3}>
                       <Button variant="contained" sx={{ width:150, fontSize:11 }}><img src="../home/print.png" width="24" height="24"/>Printer</Button>
                    </Grid>
                    <Grid item xs={1.3}>
                      <Button variant="contained" sx={{ width:150, fontSize:11 }} onClick={handleClickOpen}><img src="../home/memo.png" width="24" height="24" />メモ</Button>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={1.3}>
                      <Button variant="contained" sx={{ width:150, fontSize:11 }}><img src="../home/spr.png" width="24" height="24" />SPR 起票</Button>
                    </Grid>
                    <Grid item xs={1.3}>
                      <Button variant="contained" sx={{ width:150, fontSize:11 }}><img src="../home/order.png" width="24" height="24" />Direct Order</Button>
                    </Grid>
                    <Grid item xs={1.3}>
                      <Button variant="contained" sx={{ width:150, fontSize:11 }}><img src="../home/hozon.png" width="24" height="24" />保存</Button>
                    </Grid>
                  </Grid>
                </Box>
              {/*----------*/}
            </Paper>
 
          </Box>
         </Grid>
      </Grid>
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
                      <TableRow key={row.id}>
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
    <Paper sx={{marginTop: 'calc(10% + 60px)', bottom: 0}} component="footer" square variant="outlined">
      <Container maxWidth="xl">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "left",
            display: "flex",
            my:1
          }}
        >
        </Box>
        
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "left",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright © 2023 OCC
          </Typography>
        </Box>
      </Container>
    </Paper>
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
  { label: 'AC'},
];

const topQTY = [
  { label: '1'},
  { label: '2'},
  { label: '3'},
];