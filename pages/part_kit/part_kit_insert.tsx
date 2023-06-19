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

// Dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';

import ListPart from '../../components/request_for_part_and_material/ListPart';


const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option: FilmOptionType) => option.title,
});
// CSS
const cssLink = { textDecoration: 'none', color: 'inherit' };
const cssMro = { backgroundColor: '#325381', color:'#FFFFFF', fontSize: '13px', position: 'absolute', right: 0, bottom: 0 };
const cssMroTitle = { color: '#325381', fontSize: '20px'};
const cssBox = { py: 1, borderRadius: '5px', backgroundColor: '#F5F5F5', height:60};
const cssBox2 = { py: 1, borderRadius: '5px', backgroundColor: '#F5F5F5', height:597};
const cssBox3 = { color: '#325381', backgroundColor: '#F5F5F5',py: 1, borderRadius: '5px', overflowY:'scroll', height:490};
const cssBox4 = { color: '#325381', backgroundColor: '#F5F5F5',py: 1, borderRadius: '5px', overflowY:'scroll', height:670};
const font12Center = { fontSize: '15px', display: 'flex', alignItems:'center', justifyContent: 'center' };
const font12Left = { fontSize: '15px', display: 'flex', alignItems:'center', justifyContent: 'left', ml:4 };
const font11 = { color:'#B8B8B8', fontSize: '11px', display: 'flex', alignItems:'center', justifyContent: 'center', ml:10};
const font11Right = { color:'#B8B8B8', fontSize: '11px', display: 'flex', alignItems:'center', justifyContent: 'right'  };
const font11Center = { color:'#B8B8B8', fontSize: '11px', display: 'flex', alignItems:'center', justifyContent: 'center' };
const font12 = { fontSize: '12px'};
const cssOderLeft = { width: '100%', fontSize: '14px', color: '#325381', fontWeight: 700, mb: '5px'};
const cssOderRight = { width: '100%',cursor: 'pointer', fontSize: '14px', color: '#325381', fontWeight: 700, mb: '5px', pr:15, display: 'flex', alignItems:'center', justifyContent: 'flex-end' };
const font13Bold = { fontSize: '13px', textAlign: 'center', py: 2, fontWeight: 700 };

const cssText = { m: 1, ml:4, width:780, backgroundColor:'#FFF', '& .MuiOutlinedInput-notchedOutline': {border: 'none'}, };
const cssText1 = { width:130, backgroundColor:'#FFF', '& .MuiOutlinedInput-notchedOutline': {border: 'none'},  };
const cssText2 = { width:170, backgroundColor:'#FFF', '& .MuiOutlinedInput-notchedOutline': {border: 'none'}, };
const ml4mt1 = { ml:4, mt:1 };
const ml4mt2 = { ml:4, mt:2 };
const cssButtonFrame = { display: 'flex', alignItems:'center', justifyContent:'center', ml:4, mt:4 };
const cssButton = { backgroundColor: '#325381', color:'#FFFFFF' ,width:150, height:40 };
const cssButton1 = { backgroundColor: '#B91919', color:'#FFFFFF' ,width:150, height:40 };

const cssTexts = { m: 1, ml:12, width:780, backgroundColor:'#F5F5F5', '& .MuiOutlinedInput-notchedOutline': {border: 'none'}, };

const cssTextTask1 = { m: 1, ml:12, width:640, backgroundColor:'#F5F5F5', '& .MuiOutlinedInput-notchedOutline': {border: 'none'}, };
const cssTextTask2 = { m: 1, width:120, backgroundColor:'#F5F5F5', '& .MuiOutlinedInput-notchedOutline': {border: 'none'}, };

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
  // Dialog AMM
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <Link href="/part_kit/part_kit_insert" underline="none" target="_blank">
            <Button variant="contained"sx={cssMro}>
            <img src="../part-kit/Search.png" width="20" height="20"/>
              <Typography sx={{ ml:2 }}>
              Partの追加
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ pt: 2 }}>
        <Grid item xs={12} md={7}>
          <Grid item xs={12} md={12}>
            
            <Box sx={cssBox}>
              <FormGroup>
                <Grid container>
                  <Grid item xs={1.5}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Parts" labelPlacement="start" sx={font12Center} />
                  </Grid>
                  <Grid item xs={1.5}>
                    <FormControlLabel control={<Checkbox />} label="Tools" labelPlacement="start" sx={font12Center} />
                  </Grid>
                  <Grid item xs={1.5}>
                   <FormControlLabel control={<Checkbox />} label="Trax" labelPlacement="start" sx={font12Center} />
                  </Grid>
                  <Grid item xs={1.5}>
                    <FormControlLabel control={<Checkbox />} label="Knowledge" labelPlacement="start" sx={font12Center} />
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container>
                      <Grid item xs>
                        <Typography sx={font11Right}>作成者 : 70075</Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography sx={font11Center}>2023/05/19  14:00:00</Typography>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs>
                        <Typography sx={font11}>BD13793F-E0EE-024E-B282-E721B932BF45</Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                </Grid>
              </FormGroup>
            </Box>
        
          </Grid>

          <Grid item xs={12} md={12} sx={{ mt:2, }}>
            
            <Box sx={cssBox2}>
                <Grid container sx={ml4mt2}>
                  <Typography>
                  <strong>作業名 (KIT名)</strong>
                  </Typography>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <TextField id="outlined-basic" size='small' sx={cssText} />
                  </Grid>
                </Grid>

                <Grid container sx={ml4mt2}>
                  <Grid item xs={2}>
                    <Typography>Zone</Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography>AC Type</Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography>Customer</Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography>ATA</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>Category</Typography>
                  </Grid>
                </Grid>

                <Grid container sx={ml4mt1}>
                  <Grid item xs={2}>
                    <TextField id="outlined-basic" size='small' sx={cssText1} />
                  </Grid>

                  <Grid item xs={2}>
                    <TextField id="outlined-basic" size='small' sx={cssText1} />
                  </Grid>

                  <Grid item xs={2}>
                    <TextField id="outlined-basic" size='small' sx={cssText1} />
                  </Grid>

                  <Grid item xs={2}>
                    <TextField id="outlined-basic" size='small' sx={cssText1} />
                  </Grid>
                  <Grid item xs>
                    <TextField id="outlined-basic" size='small' sx={cssText2} />
                  </Grid>
                </Grid>

                <Grid container sx={ml4mt2}>
                  <Grid item xs={5}>
                    <Typography>Task Card</Typography>
                  </Grid>

                  <Grid item xs={7}>
                    <Typography>AMM</Typography>
                  </Grid>
                </Grid>

                <Grid container sx={ml4mt1}>
                {/*Task Card*/}
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

                  <Grid item xs={1}>
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
                  <Grid item xs={4.7}>
                  <FormControl sx={{ width: 350 }}>
                    <TextField  id="outlined-basic" 
                                size='small' 
                                placeholder="AMM No." 
                                sx={{ bgcolor:"#FFF",
                                      '& .MuiOutlinedInput-notchedOutline': {
                                      border: 'none'}, 
                                    }}/>
                  </FormControl>
                  </Grid>

                  <Grid item xs={2.3}>
                   <Paper elevation={0} sx={{ width:40, height:40}}>
                      <IconButton aria-label="menu" onClick={handleClickOpen}>
                        <MenuIcon sx={{ width:25, height:30, color:"#D9D9D9" }} />
                      </IconButton>
                    </Paper>
                  </Grid>
                </Grid>

                <Grid container sx={ml4mt2}>
                  <Typography>
                  <strong>Memo</strong>
                  </Typography>
                </Grid>
                <Grid container sx={{ ml:4 }}>
                  <Grid item xs={12}>
                    <TextField
                      placeholder="記入してください..."
                      multiline
                      rows={7}
                      sx={{ width:780, bgcolor:"#FFF", 
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                      }, }}
                      InputLabelProps={{style: {fontSize: '15px', color: '#325381'}}}
                      inputProps={{style: {fontSize: '13px'}}}
                    />
                  </Grid>
                </Grid>

              <Grid container sx={cssButtonFrame}>
                <Grid item xs={6} md={3}>
                  <Grid container spacing={2}>
                    <Link href="/part_kit/part_kit_insert" underline="none" target="_blank">
                      <Button variant="contained" sx={cssButton}>
                      <img src="../part-kit/public.png" width="20" height="20"/>
                        <Typography sx={{ ml:2, fontSize:12 }}>
                        公開
                        </Typography>
                      </Button>
                    </Link>
                  </Grid>
                </Grid>

                <Grid item xs={6} md={3}>
                  <Grid container spacing={2}>
                    <Link href="/part_kit/part_kit_insert" underline="none" target="_blank">
                      <Button variant="contained" sx={cssButton1}>
                      <img src="../part-kit/delete.png" width="20" height="20"/>
                        <Typography sx={{ ml:2, fontSize:12 }}>
                        Tool Kit削除
                        </Typography>
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
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
     <Dialog open={open} onClose={handleClose} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}> 
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

  </div>
  );
}


interface FilmOptionType {
  title: string;
  year: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  ];