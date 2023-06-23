import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
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
import { Icon, colors } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option: FilmOptionType) => option.title,
});
// CSS
const cssLink = { textDecoration: 'none', color: 'inherit' };
const cssMro = { backgroundColor: '#325381', color: '#FFFFFF', fontSize: '13px', position: 'absolute', right: 0, bottom: 0 };
const cssMroTitle = { color: '#325381', fontSize: '20px' };
const cssBox = { py: 1, borderRadius: '5px', backgroundColor: '#F5F5F5', height: 60 };
const cssBox2 = { paddingX: "40px", paddingTop: "50px", borderRadius: '5px', backgroundColor: '#F5F5F5', height: 670  };
const cssBox3 = { color: '#325381', backgroundColor: '#F5F5F5', py: 1, borderRadius: '5px', overflowY: 'scroll', height: 490 };
const cssBox4 = { color: '#325381', backgroundColor: '#F5F5F5', py: 1, borderRadius: '5px', overflowY: 'scroll', height:750 };
const font12Center = { fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const font12Left = { fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'left', ml: 4 };
const font11 = { color: '#B8B8B8', fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', };
const font11Right = { color: '#B8B8B8', fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'right' };
const font11Center = { color: '#B8B8B8', fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const font12 = { fontSize: '12px' };
const cssOderLeft = { width: '100%', fontSize: '14px', color: '#325381', fontWeight: 700, mb: '5px' };
const cssOderRight = { width: '100%', cursor: 'pointer', fontSize: '14px', color: '#325381', fontWeight: 700, mb: '5px', pr: 15, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' };
const font13Bold = { fontSize: '13px', textAlign: 'center', py: 2, fontWeight: 700 };

const cssText = { backgroundColor: '#FFF', '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, };
const cssText1 = { backgroundColor: '#FFF', '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, };
const cssText2 = { backgroundColor: '#FFF', '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, };
const ml4mt1 = { ml: 4, mt: 1 };
const ml4mt2 = { ml: 4, mt: 2 };
const cssButtonFrame = { display: 'flex', alignItems: 'center', justifyContent: 'center', ml: 4, mt: 5 };
const cssButton = { backgroundColor: '#325381', color: '#FFFFFF', width: 150, height: 40 };
const cssButton1 = { backgroundColor: '#B91919', color: '#FFFFFF', width: 150, height: 40 };

const cssTexts = { m: 1, ml: 12, width: 780, backgroundColor: '#F5F5F5', '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, };

const cssTextTask1 = { m: 1, ml: 12, width: 640, backgroundColor: '#F5F5F5', '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, };
const cssTextTask2 = { m: 1, width: 120, backgroundColor: '#F5F5F5', '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, };

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





class Note {
  constructor(public Nomen: number, public Qty: number, public note: string) { }
}


export default function RequestPartMaterials() {
  // Dialog AMM
  const [open, setOpen] = React.useState(false);
  const [listNote, setListNote] = React.useState(
    [new Note(1, 1, "ddd"), new Note(1, 1, "ddd"),
     new Note(1, 1, "ddd"), new Note(1, 1, "ddd"),
      new Note(1, 1, "ddd"), new Note(1, 1, "ddd"),
       new Note(1, 1, "ddd"), new Note(1, 1, "ddd"),
        new Note(1, 1, "ddd"),  new Note(1, 1, "ddd"),
        new Note(1, 1, "ddd"),  new Note(1, 1, "ddd"),
        new Note(1, 1, "ddd"),  new Note(1, 1, "ddd"),
        new Note(1, 1, "ddd"),  new Note(1, 1, "ddd"),
        new Note(1, 1, "ddd"),  new Note(1, 1, "ddd"),
        new Note(1, 1, "ddd"),  new Note(1, 1, "ddd")]);
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


  const [openDelete, setOpenDelete] = React.useState(false);
  const handleToggleDelete = () => {
    setOpenDelete(!openDelete);
  }


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
              <Button variant="contained" sx={cssMro}>
                <img src="../part-kit/Search.png" width="20" height="20" />
                <Typography sx={{ ml: 2 }}>
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
                <FormGroup sx={{ paddingX: "40px" }}>
                  <Grid container flexDirection={'row'} alignItems={'center'}>
                    <Grid item xs={7}>
                      <Grid container>

                        <FormControlLabel control={<Checkbox defaultChecked />} label={<Typography fontSize={15}>Parts</Typography>} labelPlacement="start" sx={font12Center} />


                        <FormControlLabel control={<Checkbox />} label={<Typography fontSize={15}>Tools</Typography>} labelPlacement="start" sx={font12Center} />


                        <FormControlLabel control={<Checkbox />} label={<Typography fontSize={15}>Trax</Typography>} labelPlacement="start" sx={font12Center} />


                        <FormControlLabel control={<Checkbox />} label={<Typography fontSize={15}>Knowledge</Typography>} labelPlacement="start" sx={font12Center} />
                      </Grid>

                    </Grid>


                    <Grid item xs={5} >
                      <Grid container alignItems={'space-between'}  >
                        <Grid container justifyContent={'flex-end'} >
                          <Grid item xs={4}>
                            <Grid container spacing={1}
                            >
                              <Grid item                             >
                                <Typography sx={font11Right}>作成者 : </Typography>

                              </Grid>
                              <Grid item >
                                <Typography sx={font11Right}>70075 </Typography>
                              </Grid>

                            </Grid>
                          </Grid>
                          <Grid item >
                            <Typography sx={font11Center}>2023/05/19  14:00:00</Typography>
                          </Grid>

                        </Grid>
                        <Grid container justifyContent={'flex-end'} >
                          <Typography sx={font11}>BD13793F-E0EE-024E-B282-E721B932BF45</Typography>




                        </Grid>
                      </Grid>



                    </Grid>


                  </Grid>



                </FormGroup>
              </Box>

            </Grid>

            <Grid item xs={12} md={12} sx={{ mt: 2, }}>
              <Box sx={cssBox2}>
                <Grid container flexDirection={'column'} sx={{ marginBottom: "20px" }} spacing={2}>
                  <Grid item>
                    <Typography>
                      作業名 (KIT名)
                    </Typography>
                  </Grid>
                  <Grid item>
                    <TextField id="outlined-basic" size='small' sx={cssText} fullWidth />
                  </Grid>


                </Grid>




                <Grid container spacing={4}>

                  {
                    ["Zone", "AC Type", "Customer", "ATA", "Category"].map((e) =>
                      <Grid item xs={2.4}  >
                        <Grid container flexDirection={'column'} spacing={2}>

                          <Grid item> <Typography>{e}</Typography></Grid>

                          <Grid item> <TextField id="outlined-basic" size='small' sx={cssText1} fullWidth /></Grid>
                        </Grid>


                      </Grid>
                    )
                  }


                </Grid>



                {/* 
                <Grid container sx={{ml:"15px"}} spacing={2}>
                

                  <Grid item xs={2}>
                    <TextField id="outlined-basic" size='small' sx={cssText1} />
                  </Grid>

                  <Grid item xs={2}>
                    <TextField id="outlined-basic" size='small' sx={cssText1} />
                  </Grid>

                  <Grid item xs={2}>
                    <TextField id="outlined-basic" size='small' sx={cssText1} />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="outlined-basic" size='small' sx={cssText2} />
                  </Grid>
                </Grid> */}

                <Grid container spacing={2} sx={{ mt: 2, }}>
                  <Grid item xs={6}>
                    <Typography sx={{ marginBottom: "16px" }}>Task Card</Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={7}>
                        <TextField
                          fullWidth
                          id="outlined-basic"
                          size='small'
                          placeholder="Task Card"
                          sx={{
                            bgcolor: "#FFF",
                            '& .MuiOutlinedInput-notchedOutline': {
                              border: 'none',
                            },
                          }} />
                      </Grid>

                      <Grid item xs={3}>
                        <TextField
                          fullWidth
                          id="outlined-basic"
                          size='small'
                          placeholder="Item"
                          sx={{
                            mr: 0.5, bgcolor: "#FFF",
                            '& .MuiOutlinedInput-notchedOutline': {
                              border: 'none',
                            },
                          }} />
                      </Grid>

                      <Grid item xs={2}>
                        <Paper elevation={0} sx={{ width: 40, height: 40 }}>
                          <IconButton aria-label="menu" onClick={handleClickOpenTask}>
                            <MenuIcon sx={{ width: 25, height: 30, color: "#D9D9D9" }} />
                          </IconButton>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={6}>


                    <Typography sx={{ marginBottom: "16px" }}>AMM</Typography>
                    <Grid container spacing={1} >
                      <Grid item xs={10} >

                        <TextField
                          fullWidth
                          id="outlined-basic"
                          size='small'
                          placeholder="AMM No."
                          sx={{
                            bgcolor: "#FFF",
                            '& .MuiOutlinedInput-notchedOutline': {
                              border: 'none'
                            },
                          }} />

                      </Grid>
                      <Grid item xs={2}  >
                        <Paper elevation={0} >
                          <Box display="flex" justifyContent="center" alignItems="center">
                            <IconButton aria-label="menu" onClick={handleClickOpen} >
                              <MenuIcon sx={{ width: 25, color: "#D9D9D9" }} />
                            </IconButton>
                          </Box>
                        </Paper>


                      </Grid>
                    </Grid>






                  </Grid>
                </Grid>



                <Grid container sx={{ mt: 2, }}>
                  <Typography>
                    <strong>Memo</strong>
                  </Typography>
                </Grid>
                <Grid container >
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      placeholder="記入してください..."
                      multiline
                      rows={7}
                      sx={{
                        bgcolor: "#FFF",
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        },
                      }}
                      InputLabelProps={{ style: { fontSize: '15px', color: '#325381' } }}
                      inputProps={{ style: { fontSize: '13px' } }}
                    />
                  </Grid>
                </Grid>

                <Grid container sx={cssButtonFrame}>
                  <Grid item xs={6} md={3}>
                    <Grid container spacing={2}>
                      <Link href="/part_kit/part_kit_insert" underline="none" target="_blank">
                        <Button variant="contained" sx={cssButton}>
                          <img src="../part-kit/public.png" width="20" height="20" />
                          <Typography sx={{ ml: 2, fontSize: 12 }}>
                            公開
                          </Typography>
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>

                  <Grid item xs={6} md={3}>
                    <Grid container spacing={2}>

                      <Button variant="contained" sx={cssButton1} onClick={handleToggleDelete}>
                        <img src="../part-kit/delete.png" width="20" height="20" />
                        <Typography sx={{ ml: 2, fontSize: 12 }}>
                          Tool Kit削除
                        </Typography>
                      </Button>

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
              <Divider sx={{ my: '3px' }} />

            {
 listNote.map((e,index)=>(<>
  <Grid container key={{index}}>
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
<Divider sx={{ my: '3px' }} /></>))
            }

           

            </Box>

          </Grid>
        </Grid>

      </Box>

      {/*----------Footer----------*/}
      <Divider />
      <Box component="footer">
        <Typography sx={{ color: "#9AA1A9", fontSize: 13, ml: 4, mt: 4 }}>
          Copyright © 2023 OCC
        </Typography>
      </Box>
      {/*----------Footer----------*/}

      {/*Dialog AMM*/}
      <Dialog open={open} onClose={handleClose} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            <Typography color="#325381" sx={{ fontSize: 20, display: 'flex', justifyContent: 'center' }}>
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
                  ml: 2,
                  mr: 1,
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
      {/* Dialog Delete*/}
      <LayoutDiaLog open={openDelete} toggleClick={handleToggleDelete} title="" >
        <CustomContentDialog
          partNumber={'PR1428A2'}
          sortNo={''}
          nomen={'S*SEALANT'}
          quantity={'6'}
          note={''} reference={'CML 06EA1'} />
      </LayoutDiaLog>
      {/*Dialog AMM*/}
      <Dialog open={openTask} onClose={handleCloseTask} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseTask}>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', }}>
              <Typography color="#325381" sx={{ fontSize: 20, mr: 1 }}>
                <strong>Task Card / Item</strong>
              </Typography>
              <Typography color="#325381" sx={{ fontSize: 13 }}>
                (最大10件)
              </Typography>
            </Grid>
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
                  ml: 2,
                  mr: 1,
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

type ItemDialogProps = {
  paddingHorizontal: number
  paddingVertical: number
  colorText: string
  textLabel: string
  text: string
  backGroundColor: string
}

const ItemDialog = ({
  paddingHorizontal,
  paddingVertical,
  colorText,
  textLabel,
  text,
  backGroundColor }: ItemDialogProps) => {
  return (
    <Stack flexDirection={'column'}>
      <Typography sx={{ color: colorText, }}>{textLabel}</Typography>
      <Box height={'50px'} bgcolor={backGroundColor} sx={{ display: 'flex', alignItems: 'center' }}><Typography
        sx={{ ml: '23px', color: colorText, fontSize: '15px', lineHeight: '18px' }}>{text}</Typography></Box>
    </Stack>
  )
};

type customContentDialog = {
  partNumber: string, sortNo: string, nomen: string, quantity: string, note: string, reference: string
}

const CustomContentDialog = ({ partNumber, sortNo, nomen, quantity, note, reference }: customContentDialog) => {
  return (
    <Box sx={{
      justifyContent: 'center', alignItems: 'center',

    }} >
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 8, md: 8 }}>
        <Grid item xs={6}>
          <ItemDialog
            paddingHorizontal={0}
            paddingVertical={0}
            colorText={'#325381'}
            textLabel={'PART NUMBER :'}
            text={partNumber} backGroundColor={'#F5F5F5'}
          />
        </Grid>
        <Grid item xs={6}>
          <ItemDialog
            paddingHorizontal={0}
            paddingVertical={0}
            colorText={'#325381'}
            textLabel={'SORT No :'}
            text={sortNo} backGroundColor={'#F5F5F5'}
          />
        </Grid>
        <Grid item xs={6}>
          <ItemDialog
            paddingHorizontal={0}
            paddingVertical={0}
            colorText={'#325381'}
            textLabel={'NOMEN :'}
            text={nomen} backGroundColor={'#F5F5F5'}
          />
        </Grid>
        <Grid item xs={6}>
          <ItemDialog
            paddingHorizontal={0}
            paddingVertical={0}
            colorText={'#325381'}
            textLabel={'QUANTITY :'}
            text={quantity} backGroundColor={'#F5F5F5'}
          />
        </Grid>
        <Grid item xs={12}>
          <ItemDialog
            paddingHorizontal={0}
            paddingVertical={0}
            colorText={'#325381'}
            textLabel={'NOTE :'}
            text={note} backGroundColor={'#F5F5F5'}
          />
        </Grid>
        <Grid item xs={12}>
          <ItemDialog
            paddingHorizontal={0}
            paddingVertical={0}
            colorText={'#325381'}
            textLabel={'REF :'}
            text={reference} backGroundColor={'#F5F5F5'}
          />
        </Grid>
        <Grid item xs={12} >
          <Button fullWidth color='white' style={{ backgroundColor: '#325381' }}>
            <Grid container justifyContent={'center'} alignItems={'start'} paddingY="2px">
              <DeleteIcon />

              <Typography fontSize={20} lineHeight="24px">削除</Typography>

            </Grid>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

const LayoutDiaLog = ({ open, toggleClick, title, children }) => {

  return (
    <Dialog open={open} onClose={toggleClick} sx={{
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: "1006px",
          height: '560px',
        },
      },
    }}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ margin: '53px 99px 50px 30px' }}>
        {children}
      </DialogContent>
    </Dialog>
  )
};




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