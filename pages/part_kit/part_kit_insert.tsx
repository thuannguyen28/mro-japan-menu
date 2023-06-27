import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import ListPart from '../../components/request_for_part_and_material/ListPart';

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
      height:20,
      textAlign:'left',
      color:"#325381",
      backgroundColor: "#f5f5f5",
      fontSize: '12px'
    },
  },

});

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option: FilmOptionType) => option.title,
});
// CSS
const cssLink = { textDecoration: 'none', color: 'inherit' };
const cssMro = { backgroundColor: '#325381', color:'#FFFFFF', fontSize: '13px', position: 'absolute', right: 0, bottom: 0 };
const cssMroTitle = { color: '#325381', fontSize: '20px'};
const cssOder = { width: '100%', textAlign: 'right', fontSize: '12px', fontWeight: 700, mb: '5px' };
const cssBox = { py: 1, borderRadius: '5px', backgroundColor: '#F5F5F5'};
const cssBox2 = { py: 2, px : 2, borderRadius: '5px', backgroundColor: '#F5F5F5', height:597};
const cssBox3 = { color: '#325381', backgroundColor: '#F5F5F5',py: 1, borderRadius: '5px', overflowY:'scroll', height:490};
const cssBox4 = { color: '#325381', backgroundColor: '#F5F5F5',py: 1, borderRadius: '5px', overflowY:'scroll', height:670};
const cssBox5 = { background : '#F5F5F5', px: 1, py: '19px', borderRadius: '5px'};
const font12Center = { fontSize: '12px', display: 'flex', alignItems:'center', justifyContent: 'center' };
const font12CenterBorder = { fontSize: '12px', display: 'flex', alignItems:'center', justifyContent: 'center', mt: '9px' };
const font12Left = { fontSize: '12px', display: 'flex', alignItems:'center', justifyContent: 'left', ml:4 };
const font11 = { color:'#B8B8B8', fontSize: '11px', display: 'flex', alignItems:'center', justifyContent: 'center', ml:10};
const font11Right = { color:'#B8B8B8', fontSize: '11px', display: 'flex', alignItems:'center', justifyContent: 'right', mr:'3px'  };
const font11Center = { color:'#B8B8B8', fontSize: '11px', display: 'flex', alignItems:'center', justifyContent: 'center' };
const font12 = { fontSize: '12px'};
const cssOderLeft = { width: '100%', fontSize: '14px', color: '#325381', fontWeight: 700, mb: '5px'};
const cssOderRight = { width: '100%',cursor: 'pointer', fontSize: '14px', color: '#325381', fontWeight: 700, mb: '5px', pr:15, display: 'flex', alignItems:'center', justifyContent: 'flex-end' };
const font13Bold = { fontSize: '13px', textAlign: 'center', py: 2, fontWeight: 700 };

const cssText = {backgroundColor:'#FFF', '& .MuiOutlinedInput-notchedOutline': {border: 'none'}, };
const cssText1 = { backgroundColor:'#FFF', '& .MuiOutlinedInput-notchedOutline': {border: 'none'},  };
const cssText2 = { backgroundColor:'#FFF', '& .MuiOutlinedInput-notchedOutline': {border: 'none'}, };
const ml4mt1 = { ml:4, mt:1 };
const ml4mt2 = { ml:4, mt:2 };
const cssButtonFrame = { display: 'flex', alignItems:'center', justifyContent:'center', ml:4, mt:4 };
const cssButton = { backgroundColor: '#325381', color:'#FFFFFF' ,width:150, height:40 };
const cssButton1 = { backgroundColor: '#B91919', color:'#FFFFFF' ,width:150, height:40 };

const cssTexts = { m: 1, ml:12, width:780, backgroundColor:'#F5F5F5', '& .MuiOutlinedInput-notchedOutline': {border: 'none'}, };

const cssTextTask1 = { m: 1, ml:12, width:640, backgroundColor:'#F5F5F5', '& .MuiOutlinedInput-notchedOutline': {border: 'none'}, };
const cssTextTask2 = { m: 1, width:120, backgroundColor:'#F5F5F5', '& .MuiOutlinedInput-notchedOutline': {border: 'none'}, };
const cssMenu = {minWidth: 100, textAlign:'center', fontSize: '12px'};

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

export default function RequestPartMaterials() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Dialog AMM
  const [openAMM, setOpenAMM] = React.useState(false);


  const handleClickOpenAMM = () => {
    setOpenAMM(true);
  };

  const handleCloseAMM = () => {
    setOpenAMM(false);
  };
  // END Dialog Memo

  // Dialog Task Card
  const [openTask, setOpenTask] = React.useState(false);

  const handleClickOpenTask = () => {
    setOpenTask(true);
  };

  const handleCloseTask = () => {
    setOpenTask(false);
  };
  // END Dialog Memo

  const [openModalDelete, setOpenModalDelete] = React.useState(false);

  const handleOpenModalDelete = () => {
    setOpenModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setOpenModalDelete(false);
  };


  const [openOrder, setOpenOrder] = React.useState(false);

  const handleOpenOrder = () => {
    setOpenOrder(true);
  };

  const handleCloseOrder = () => {
    setOpenOrder(false);
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

  return (
  <div>
    <Box sx={{ color: '#325381', mx: { xs: 2, md: 4 }, my: { xs: 3, md: 2 } }}>
      <Grid container spacing={2}>
        <Grid item xs={7} md={9}>
          <Typography sx={cssMroTitle}>
            <strong>Parts Kit 情報</strong>
          </Typography>
        </Grid>
        <Grid item xs={5} md={3} sx={{ position: 'relative' }}>  
            <Button variant="contained" onClick={handleOpenOrder} sx={cssMro}>
            <img src="../part-kit/Search.png" width="20" height="20"/>
              <Typography sx={{ ml:2 }}>
              Partの追加
              </Typography>
            </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ pt: 2 }}>
        <Grid item xs={12} md={7}>
          <Grid item xs={12} md={12}>
            
            <Box sx={cssBox}>
              <FormGroup>
                <Grid container spacing={1}>
                  <Grid item xs={1.5}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Parts" labelPlacement="start" sx={font12Center} />
                  </Grid>
                  <Grid item xs={1.5}>
                    <FormControlLabel control={<Checkbox />} label="Tools" labelPlacement="start" sx={font12Center} />
                  </Grid>
                  <Grid item xs={1.5}>
                   <FormControlLabel control={<Checkbox />} label="Trax" labelPlacement="start" sx={font12Center} />
                  </Grid>
                  <Grid item xs={2.5}>
                    <FormControlLabel control={<Checkbox />} label="Knowledge" labelPlacement="start" sx={font12Center} />
                  </Grid>
                  <Grid item xs={5}>
                    <Typography sx={font11Right}><span>作成者 : 70075</span> <span>2023/05/19  14:00:00</span></Typography>
                    <Typography sx={font11Right}>BD13793F-E0EE-024E-B282-E721B932BF45</Typography>
                  </Grid>
                </Grid>
              </FormGroup>
            </Box>
        
          </Grid>

          <Grid item xs={12} md={12} sx={{ mt:2, }}>
            
            <Box sx={cssBox2}>
                <Grid container>
                  <Typography>
                  <strong>作業名 (KIT名)</strong>
                  </Typography>
                </Grid>

                <Grid container spacing={2} sx={{ py : '5px'}}>
                  <Grid item xs={12}>
                    <TextField id="outlined-basic" fullWidth  size='small' sx={cssText} />
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ py : '5px'}}>
                  <Grid item xs={2.5}>
                    <Typography>Zone</Typography>
                  </Grid>

                  <Grid item xs={2.5}>
                    <Typography>AC Type</Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography>Customer</Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography>ATA</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>Category</Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={2.5}>
                    <TextField id="outlined-basic" fullWidth size='small' sx={cssText1} />
                  </Grid>

                  <Grid item xs={2.5}>
                    <TextField id="outlined-basic" fullWidth size='small' sx={cssText1} />
                  </Grid>

                  <Grid item xs={2}>
                    <TextField id="outlined-basic" fullWidth size='small' sx={cssText1} />
                  </Grid>

                  <Grid item xs={2}>
                    <TextField id="outlined-basic" fullWidth size='small' sx={cssText1} />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField id="outlined-basic" fullWidth size='small' sx={cssText2} />
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ py : '5px'}}>
                  <Grid item xs={6}>
                    <Typography>Task Card</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography>AMM</Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={1}>
                  <Grid item xs={3}>
                    <TextField  id="outlined-basic" 
                                size='small' 
                                placeholder="Task Card" 
                                sx={{ bgcolor:"#FFF",
                                      '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                }}/>
                  </Grid>

                  <Grid item xs={2}>
                    <TextField  id="outlined-basic" 
                                size='small' 
                                placeholder="Item" 
                                sx={{mr:0.5, bgcolor:"#FFF",
                                      '& .MuiOutlinedInput-notchedOutline': {
                                      border: 'none',
                                    },
                                }}/>
                  </Grid>

                  <Grid item xs={1}>
                    <Paper elevation={0} sx={{ width:40, height:40}}>
                      <IconButton aria-label="menu" onClick={handleClickOpenTask}>
                        <MenuIcon sx={{ width:25, height:30, color:"#D9D9D9" }} />
                      </IconButton>
                    </Paper>
                  </Grid>

                  {/*AMM*/}
                  <Grid item xs={3}>
                  <FormControl>
                    <TextField  id="outlined-basic" 
                                size='small' 
                                placeholder="AMM No." 
                                sx={{ bgcolor:"#FFF",
                                      '& .MuiOutlinedInput-notchedOutline': {
                                      border: 'none'}, 
                                    }}/>
                  </FormControl>
                  </Grid>

                  <Grid item xs={2}>
                   <Paper elevation={0} sx={{ width:40, height:40}}>
                      <IconButton aria-label="menu" onClick={handleClickOpenAMM}>
                        <MenuIcon sx={{ width:25, height:30, color:"#D9D9D9" }} />
                      </IconButton>
                    </Paper>
                  </Grid>
                </Grid>

                <Grid container sx={{ py : '5px'}}>
                  <Typography>
                  <strong>Memo</strong>
                  </Typography>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <TextField
                      placeholder="記入してください..."
                      multiline
                      fullWidth
                      rows={7}
                      sx={{ bgcolor:"#FFF", 
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                      }, }}
                      InputLabelProps={{style: {fontSize: '15px', color: '#325381'}}}
                      inputProps={{style: {fontSize: '13px'}}}
                    />
                  </Grid>
                </Grid>

              <Grid container spacing={2} sx={{ py : '30px' , textAlign: 'center'}}>
                <Grid item xs={6} md={2}></Grid>
                <Grid item xs={6} md={4}>
                      <Button variant="contained" sx={cssButton}>
                      <img src="../part-kit/public.png" width="20" height="20"/>
                        <Typography sx={{ ml:2, fontSize:12 }}>
                        公開
                        </Typography>
                      </Button>
                </Grid>

                <Grid item xs={6} md={4}>
                      <Button variant="contained" onClick={handleOpenModalDelete} sx={cssButton1}>
                      <img src="../part-kit/delete.png" width="20" height="20"/>
                        <Typography sx={{ ml:2, fontSize:12 }}>
                        Tool Kit削除
                        </Typography>
                      </Button>
                </Grid>
                <Grid item xs={6} md={2}></Grid>
              </Grid>

            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box sx={cssBox4}>         
            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font12Center}>Parts Number / Nomen</Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font12Center}>Qty</Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font12Center}>Note/ Ref</Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={6}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

          </Box>
         
        </Grid>
      </Grid>

    </Box>

    {/*----------Footer----------*/}
    <Divider />
    <Box component="footer">   
      <Typography sx={{ color:"#9AA1A9", fontSize:13, ml:4, mt:4 }}>
        Copyright © 2023 OCC
      </Typography>
    </Box>
    {/*----------Footer----------*/}

    {/*Dialog AMM*/}
     <Dialog open={openAMM} onClose={handleCloseAMM} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseAMM}> 
            <Typography color="#325381" sx={{ fontSize:20, display:'flex', justifyContent:'center' }}>
              <strong>AMM (最大10件)</strong>
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
                  width: 1006,
                  height: 560,
                  ml:2,
                  mr:1,
                },
              }}
            >
              <Grid item xs={12} md={12}>
                <Grid container>
                  <Grid item xs={12}>
                    <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTexts} />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTexts} />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTexts} />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTexts} />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTexts} />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTexts} />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTexts} />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTexts} />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTexts} />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTexts} />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    {/*----------End Dialog AMM----------*/}

    {/*Dialog AMM*/}
     <Dialog open={openTask} onClose={handleCloseTask} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseTask}> 
            <Typography color="#325381" sx={{ fontSize:20, display:'flex', justifyContent:'center' , px: 0, py: 0 }}>
              <strong>AMM (最大10件)</strong>
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
                  width: 1006,
                  height: 560,
                  ml:2,
                  mr:1,
                },
              }}
            >
              <Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Grid container>
                      <Grid item xs={9}>
                        <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTextTask1} />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField id="outlined-basic" placeholder="Item" size='small' sx={cssTextTask2} />
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={9}>
                        <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTextTask1} />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField id="outlined-basic" placeholder="Item" size='small' sx={cssTextTask2} />
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={9}>
                        <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTextTask1} />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField id="outlined-basic" placeholder="Item" size='small' sx={cssTextTask2} />
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={9}>
                        <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTextTask1} />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField id="outlined-basic" placeholder="Item" size='small' sx={cssTextTask2} />
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={9}>
                        <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTextTask1} />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField id="outlined-basic" placeholder="Item" size='small' sx={cssTextTask2} />
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={9}>
                        <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTextTask1} />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField id="outlined-basic" placeholder="Item" size='small' sx={cssTextTask2} />
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={9}>
                        <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTextTask1} />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField id="outlined-basic" placeholder="Item" size='small' sx={cssTextTask2} />
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={9}>
                        <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTextTask1} />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField id="outlined-basic" placeholder="Item" size='small' sx={cssTextTask2} />
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={9}>
                        <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTextTask1} />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField id="outlined-basic" placeholder="Item" size='small' sx={cssTextTask2} />
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={9}>
                        <TextField id="outlined-basic" placeholder="AMM No." size='small' sx={cssTextTask1} />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField id="outlined-basic" placeholder="Item" size='small' sx={cssTextTask2} />
                      </Grid>
                    </Grid>
         
                </Grid>
              </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    {/*----------End Dialog AMM----------*/}


    {/*Dialog Delete*/}
     <Dialog open={openModalDelete} onClose={handleCloseModalDelete} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle id="del-customized-dialog-title" onClose={handleCloseModalDelete}>             
          </BootstrapDialogTitle>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box sx={{color : '#325381', fontSize: '11px', px: 4, width: '600px'}}>
                <Grid container spacing={2} sx={{ py : '5px'}}>
                  <Grid item xs={6}>
                    <Typography sx={{ fontSize: '11px' }}>PART NUMBER :</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography sx={{ fontSize: '11px' }}>SORT No. :</Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ py : '5px'}}>
                  <Grid item xs={6}>
                    <CssTextField defaultValue="PR1428A2" size="small" placeholder="" fullWidth/>
                  </Grid>

                  <Grid item xs={6}>
                    <CssTextField defaultValue="" size="small" placeholder="" fullWidth/>
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ py : '5px'}}>
                  <Grid item xs={6}>
                    <Typography sx={{ fontSize: '12px' }}>NOMEN :</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography sx={{ fontSize: '12px' }}>QUANTITY :</Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ py : '5px'}}>
                  <Grid item xs={6}>
                    <CssTextField defaultValue="S*SEALANT" size="small"  fullWidth placeholder="" />
                  </Grid>

                  <Grid item xs={6}>
                    <CssTextField defaultValue="6" size="small" fullWidth placeholder="" />
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ py : '5px'}}>
                  <Grid item xs={12}>
                    <Typography sx={{ fontSize: '12px' }}>NOTE :</Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ py : '5px'}}>
                  <Grid item xs={12}>
                    <CssTextField fullWidth defaultValue="" size="small" placeholder="" />
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ py : '5px'}}>
                  <Grid item xs={6}>
                    <Typography sx={{ fontSize: '12px' }}>REF :</Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ py : '5px'}}>
                  <Grid item xs={12}>
                    <CssTextField fullWidth defaultValue="CML 06EA1" size="small" placeholder="" />
                  </Grid>
                </Grid> 

                <Grid container spacing={2} sx={{ py : '5px'}}>
                  <Grid item xs={12}>
                    <Button fullWidth variant="contained" startIcon={<SearchIcon />}>
                      検索
                    </Button>
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ pt : '15px'}}>
                  <Grid item xs={12}>
                <Typography sx={{ fontSize: '11px', color: '#CF2121', textAlign: 'center' }}>※ 編集可能頂目　QTY / SORT No / REF / NOTE</Typography>
                   </Grid>
                </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    {/*----------End Dialog Delete----------*/}

    {/*Dialog Order*/}
     <Dialog open={openOrder} fullWidth onClose={handleCloseOrder} maxWidth="xl">
        <DialogTitle sx={{ py: 0, px: 0 }}>
          <BootstrapDialogTitle id="order-customized-dialog-title" onClose={handleCloseOrder}>
          </BootstrapDialogTitle>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box sx={{color : '#325381', fontSize: '11px', px: 0}}>
              <Grid container spacing={2} sx={{ pt: 2 }}>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{ fontSize: '13px', color: '#325381' }}><strong>WO</strong></Typography>
                        <FormControl sx={{ mb: 1 }} fullWidth size="small">
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={10024281}
                            fullWidth
                          >
                            <MenuItem value={10024280}>10024280</MenuItem>
                            <MenuItem value={10024281}>10024281</MenuItem>
                            <MenuItem value={10024282}>10024282</MenuItem>
                          </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Typography sx={{ fontSize: '13px', color: '#325381' }}><strong>Zone</strong></Typography>
                        <FormControl component="fieldset">
                          <FormGroup aria-label="position" row>
                            
                            <FormControlLabel
                              value="EXT1"
                              control={<Checkbox />}
                              label="EXT1"
                              checked={true}
                              labelPlacement="EXT1"
                            />
                            <FormControlLabel
                              value="EXT2"
                              control={<Checkbox />}
                              label="EXT2"
                              labelPlacement="EXT2"
                            />

                            <FormControlLabel
                              value="INT"
                              control={<Checkbox />}
                              label="INT"
                              labelPlacement="INT"
                            />

                            <FormControlLabel
                              value="EEM"
                              control={<Checkbox />}
                              label="EEM"
                              labelPlacement="EEM"
                            />

                            <FormControlLabel
                              value="MAM"
                              control={<Checkbox />}
                              label="MAM"
                              labelPlacement="MAM"
                            />
                            
                          </FormGroup>
                        </FormControl>                        
                    </Grid>                    
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography sx={{ textAlign: 'right' }}>
                    <img src="../logo.png"/>
                  </Typography>
                   
                </Grid>
              </Grid>  
              <Grid container spacing={2} sx={{ pt: 2 }}>
                <Grid item xs={12} md={6}>
                  <Typography sx={{ color:"#325381", fontSize:13, mx:1, mb: 1, fontWeight: 700 }}>保存済 (末送信)</Typography>
                  <Box sx={{ py: 1, borderRadius: '5px', backgroundColor: '#F5F5F5', minHeight: '180px' }}>                    
                    <Grid container spacing={2}>
                      <Grid item xs={0.5}>
                        <Typography sx={font13Bold}></Typography>
                      </Grid>
                      <Grid item xs={1.5}>
                        <Typography sx={font13Bold}>No.</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={font13Bold}>Task Card</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography sx={font13Bold}>RSN</Typography>
                      </Grid>                      
                      <Grid item xs={2.5}>
                        <Typography sx={font13Bold}>保存日時</Typography>
                      </Grid>
                      <Grid item xs={1.5}>
                        <Typography sx={font13Bold}>EMP</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography sx={font13Bold}></Typography>
                      </Grid>
                    </Grid>
                    <Divider sx={{ my: '3px'}} />
                    <Grid container spacing={2}>
                      <Grid item xs={0.5}>
                        <Button
                          id="basic-button"
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                          sx={{ minWidth: 'unset' }}
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
                          sx={{ ml:4}}
                        >
                          <MenuItem><Typography sx={cssMenu} >View</Typography></MenuItem>
                        </Menu>
                      </Grid>  
                      <Grid item xs={1.5}>  
                        <Typography onClick={handleClickOpenSearch} sx={font12CenterBorder}>23-00992</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={font12CenterBorder}>ANA-34-32144-001</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography sx={font12CenterBorder}>EO</Typography>
                      </Grid>
                      <Grid item xs={2.5}>
                        <Typography sx={font12CenterBorder}>2023/05/19  14:00:00</Typography>
                      </Grid>
                       <Grid item xs={1.5}>
                        <Typography sx={font12CenterBorder}>10051</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <EmailIcon sx={{ mt : '5px'}} />
                      </Grid>
                    </Grid>
                    <Divider sx={{ my: '3px'}} />
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>                  
                  <Grid container spacing={1}>
                    <Grid item xs={2}>
                      <Typography sx={{ color:"#325381", fontSize:13, mx:1, mb: 1, fontWeight: 700 }}>差戻し</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography sx={{ color:"#B91919", fontSize:10, mx:1, mb: 1, fontWeight: 700 }}>[CSの方へ]  : 捕給から差戻しがあった場合は早急に確認をして、[保存済]　にステータスを変更してください</Typography>
                    </Grid>
                  </Grid>   
                  <Box sx={{ py: 1, borderRadius: '5px', backgroundColor: '#F5F5F5', minHeight: '180px' }}>                    
                    <Grid container spacing={2}>
                     <Grid item xs={0.5}>
                        <Typography sx={font13Bold}></Typography>
                      </Grid>
                      <Grid item xs={1.5}>
                        <Typography sx={font13Bold}>No.</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={font13Bold}>Task Card</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography sx={font13Bold}>RSN</Typography>
                      </Grid>                      
                      <Grid item xs={2.5}>
                        <Typography sx={font13Bold}>差戻し日時</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography sx={font13Bold}>EMP</Typography>
                      </Grid>
                      <Grid item xs={0.5}>
                        <Typography sx={font13Bold}></Typography>
                      </Grid>
                    </Grid>
                    <Divider sx={{ my: '3px'}} />
                    <Grid container spacing={2}>
                      <Grid item xs={0.5}>
                        <Button
                          id="basic-button"
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                          sx={{ minWidth: 'unset' }}
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
                          sx={{ ml:4}}
                        >
                          <MenuItem><Typography sx={cssMenu} >View</Typography></MenuItem>
                        </Menu>
                      </Grid>
                      <Grid item xs={1.5}>
                        <Typography sx={font12CenterBorder}>23-00992</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={font12CenterBorder}>AANA - 10166002</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography sx={font12CenterBorder}>TC</Typography>
                      </Grid>
                      <Grid item xs={2.5}>
                        <Typography sx={font12CenterBorder}>2023/05/19  14:00:00</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography sx={font12CenterBorder}>10051</Typography>
                      </Grid>
                      <Grid item xs={0.5}></Grid>
                    </Grid>
                    <Divider sx={{ my: '3px'}} />
                  </Box>
                </Grid>

              </Grid>

              <Grid container spacing={2} sx={{ pt: 2 }}>
                <Grid item xs={12} md={6}>
                  <Typography sx={{ color:"#325381", fontSize:13, mx:1, mb: 1, fontWeight: 700 }}>送信済  (出庫待ち)</Typography>
                  <Box sx={{ py: 1, borderRadius: '5px', backgroundColor: '#F5F5F5', minHeight: '180px' }}>                    
                    <Grid container spacing={2}>
                      <Grid item xs={1.5}>
                        <Typography sx={font13Bold}>No.</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={font13Bold}>Task Card</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography sx={font13Bold}>RSN</Typography>
                      </Grid>                      
                      <Grid item xs={2.5}>
                        <Typography sx={font13Bold}>送信日時</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography sx={font13Bold}>EMP</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography sx={font13Bold}></Typography>
                      </Grid>
                    </Grid>
                    <Divider sx={{ my: '3px'}} />
                    <Grid container spacing={2}>
                      <Grid item xs={1.5}>
                        <Typography sx={font12Center}>&nbsp;</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={font12Center}></Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography sx={font12Center}></Typography>
                      </Grid>
                      <Grid item xs={2.5}>
                        <Typography sx={font12Center}></Typography>
                      </Grid>
                       <Grid item xs={2}>
                        <Typography sx={font12Center}></Typography>
                      </Grid>
                      <Grid item xs={1}>
                       
                      </Grid>
                    </Grid>
                    <Divider sx={{ my: '3px'}} />
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>                  
                  <Grid container spacing={1}>
                    <Grid item xs={2}>
                      <Typography sx={{ color:"#325381", fontSize:13, mx:1, mb: 1, fontWeight: 700 }}>出庫済</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography sx={{ color:"#B91919", fontSize:11, mx:1, mb: 1, fontWeight: 700 }}>✪ Dock Out までに全て受領してください</Typography>
                    </Grid>
                  </Grid>
                  <Box sx={{ py: 1, borderRadius: '5px', backgroundColor: '#F5F5F5', minHeight: '180px' }}>                    
                    <Grid container spacing={2}>
                      <Grid item xs={0.5}>
                        <Typography sx={font13Bold}></Typography>
                      </Grid>                    
                      <Grid item xs={1.5}>
                        <Typography sx={font13Bold}>No.</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={font13Bold}>Task Card</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography sx={font13Bold}>RSN</Typography>
                      </Grid>                      
                      <Grid item xs={2.5}>
                        <Typography sx={font13Bold}>出庫日時</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography sx={font13Bold}>EMP</Typography>
                      </Grid>
                      <Grid item xs={0.5}>
                        <Typography sx={font13Bold}></Typography>
                      </Grid>
                    </Grid>
                    <Divider sx={{ my: '3px'}} />
                    <Grid container spacing={2}>
                      <Grid item xs={0.5}>
                        <Button
                          id="basic-button"
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                          sx={{ minWidth: 'unset' }}
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
                          sx={{ ml:4}}
                        >
                          <MenuItem><Typography sx={cssMenu} >View</Typography></MenuItem>
                        </Menu>
                      </Grid>                    
                      <Grid item xs={1.5}>
                        <Typography sx={font12CenterBorder}>23-00992</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={font12CenterBorder}>AANA - 10166002</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography sx={font12CenterBorder}>TC</Typography>
                      </Grid>
                      <Grid item xs={2.5}>
                        <Typography sx={font12CenterBorder}>2023/05/19  14:00:00</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography sx={font12CenterBorder}>10051</Typography>
                      </Grid>
                      <Grid item xs={0.5}></Grid>
                    </Grid>
                    <Divider sx={{ my: '3px'}} />
                  </Box>
                </Grid>

              </Grid>


              <Grid container spacing={2} sx={{ pt: 2 }}>
                <Grid item xs={12} md={6}>
                  <Typography sx={{ color:"#325381", fontSize:13, mx:1, mb: 1, fontWeight: 700 }}>キャンセル</Typography>
                  <Box sx={{ py: 1, borderRadius: '5px', backgroundColor: '#F5F5F5', minHeight: '180px' }}>                    
                    <Grid container spacing={2}>
                      <Grid item xs={0.5}></Grid>
                      <Grid item xs={1.5}>
                        <Typography sx={font13Bold}>No.</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={font13Bold}>Task Card</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography sx={font13Bold}>RSN</Typography>
                      </Grid>                      
                      <Grid item xs={2.5}>
                        <Typography sx={font13Bold}>キャンセル日時</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography sx={font13Bold}>EMP</Typography>
                      </Grid>
                      <Grid item xs={0.5}>
                        <Typography sx={font13Bold}></Typography>
                      </Grid>
                    </Grid>
                    <Divider sx={{ my: '3px'}} />
                    <Grid container spacing={2}>
                      <Grid item xs={0.5}>
                        <Button
                          id="basic-button"
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                          sx={{ minWidth: 'unset' }}
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
                          sx={{ ml:4}}
                        >
                          <MenuItem><Typography sx={cssMenu} >View</Typography></MenuItem>
                        </Menu>
                      </Grid>
                      <Grid item xs={1.5}>
                        <Typography sx={font12CenterBorder}>23-00992</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={font12CenterBorder}>ANA-34-32144-001</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography sx={font12CenterBorder}>EO</Typography>
                      </Grid>
                      <Grid item xs={2.5}>
                        <Typography sx={font12CenterBorder}>2023/05/19  14:00:00</Typography>
                      </Grid>
                       <Grid item xs={2}>
                        <Typography sx={font12CenterBorder}>10051</Typography>
                      </Grid>
                      <Grid item xs={0.5}></Grid>
                    </Grid>
                    <Divider sx={{ my: '3px'}} />
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography sx={{ color:"#325381", fontSize:13, mx:1, mb: 1, fontWeight: 700 }}>受領済</Typography>
                  <Box sx={{ py: 1, borderRadius: '5px', backgroundColor: '#F5F5F5', minHeight: '180px' }}>                    
                    <Grid container spacing={2}>
                      <Grid item xs={0.5}></Grid>
                      <Grid item xs={1.5}>
                        <Typography sx={font13Bold}>No.</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={font13Bold}>Task Card</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography sx={font13Bold}>RSN</Typography>
                      </Grid>                      
                      <Grid item xs={2.5}>
                        <Typography sx={font13Bold}>出庫日時</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography sx={font13Bold}>EMP</Typography>
                      </Grid>
                      <Grid item xs={0.5}>
                        <Typography sx={font13Bold}></Typography>
                      </Grid>
                    </Grid>
                    <Divider sx={{ my: '3px'}} />
                    <Grid container spacing={2}>
                      <Grid item xs={0.5}>
                        <Button
                          id="basic-button"
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                          sx={{ minWidth: 'unset' }}
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
                          sx={{ ml:4}}
                        >
                          <MenuItem><Typography sx={cssMenu} >View</Typography></MenuItem>
                        </Menu>
                      </Grid>                    
                      <Grid item xs={1.5}>
                        <Typography sx={font12CenterBorder}>23-00992</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={font12CenterBorder}>AANA - 10166002</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography sx={font12CenterBorder}>TC</Typography>
                      </Grid>
                      <Grid item xs={2.5}>
                        <Typography sx={font12CenterBorder}>2023/05/19  14:00:00</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography sx={font12CenterBorder}>10051</Typography>
                      </Grid>
                      <Grid item xs={0.5}></Grid>
                    </Grid>
                    <Divider sx={{ my: '3px'}} />
                  </Box>
                </Grid>

              </Grid>              

            </Box>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    {/*----------End Modal Order----------*/}


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
                        <Box sx={cssBox5}>
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


interface FilmOptionType {
  title: string;
  year: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: '10024280', year: 1994 },
  ];