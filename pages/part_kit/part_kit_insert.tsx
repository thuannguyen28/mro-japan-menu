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
import { DataGrid, GridColDef, GridActionsCellItem, GridValueGetterParams, GridRowParams } from '@mui/x-data-grid';

import ListPart from '../../components/request_for_part_and_material/ListPart';
import { FormLabel, Icon, ListItem, ThemeProvider, colors } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CustomPopUpIcon } from '.';
import SecurityIcon from '@mui/icons-material/Security';
import { List, Padding } from '@mui/icons-material';
import TableRowsDivideShort from '../../components/TableRowDivideShort';
import { headers } from 'next/dist/client/components/headers';
import TableOrderList from '../../components/TableOrderList';
import CustomButton from '../../components/custom_button_primary';


const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option: FilmOptionType) => option.title,
});
// CSS
const cssLink = { textDecoration: 'none', color: 'inherit' };
const cssMro = { backgroundColor: '#325381', color: '#FFFFFF', fontSize: '13px', position: 'absolute', right: 0, bottom: 0 };
const cssMroTitle = { color: '#325381', fontSize: '20px' };
const cssBox = { py: 1, borderRadius: '5px', backgroundColor: '#F5F5F5', height: 60 };
const cssBox2 = { paddingX: "40px", paddingTop: "50px", borderRadius: '5px', backgroundColor: '#F5F5F5', height: 670 };
const cssBox3 = { color: '#325381', backgroundColor: '#F5F5F5', py: 1, borderRadius: '5px', overflowY: 'scroll', height: 490 };
const cssBox4 = { color: '#325381', backgroundColor: '#F5F5F5', py: 1, borderRadius: '5px', overflowY: 'scroll', height: 750 };
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
    new Note(1, 1, "ddd"), new Note(1, 1, "ddd"),
    new Note(1, 1, "ddd"), new Note(1, 1, "ddd"),
    new Note(1, 1, "ddd"), new Note(1, 1, "ddd"),
    new Note(1, 1, "ddd"), new Note(1, 1, "ddd"),
    new Note(1, 1, "ddd"), new Note(1, 1, "ddd"),
    new Note(1, 1, "ddd"), new Note(1, 1, "ddd")]);
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

  const [openList, setOpenList] = React.useState(false);

  const handleToggleOpenList = () => {
    setOpenList(!openList);
  }

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

            <Button variant="contained" sx={cssMro} onClick={handleToggleOpenList}>
              <img src="../part-kit/Search.png" width="20" height="20" />
              <Typography sx={{ ml: 2 }}>
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
                  <Grid container spacing={1} sx={{ padding: "5px" }}>
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

                <Grid container sx={{mt:"20px"}}>
                  <Grid item xs={6} >
                    <Grid container justifyContent={"center"} alignItems={"center"}>
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

                  <Grid item xs={6} >
                    <Grid container  justifyContent={"center"} alignItems={"center"}>

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
                listNote.map((e, index) => (<>
                  <Grid container >
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
      {/* Dialog list order */}
      <PartOrderList open={openList} toggleClick={handleToggleOpenList} ></PartOrderList>
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







const CustomLayoutDialog = ({ mr, ml, mt, mb, open, toggleClick, title, children,maxWidth}) => {
  return (
    <Dialog fullWidth={true} maxWidth={maxWidth}
      open={open} onClose={toggleClick}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{paddingX:2,paddingTop:2, margin: `${mt}px ${mr}px ${mb}px ${ml}px`, height: "80vh" }}>
        {children}
      </DialogContent>
    </Dialog>
  )
};

const cssBoxMinimum={
  padding:'13px',
  borderRadius: '5px',
  backgroundColor: '#F5F5F5',
  display:'flex',
}
const cssBoxRequest={
  paddingTop:'6px',
  paddingX:'12px',
  borderRadius: '5px',
  backgroundColor: '#F5F5F5',
  display:'flex',
}
const cssText7={
  color: "#325381",
fontFamily: "Inter",
fontSize: "7px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "normal",
}
const cssText13White={
  color: "#FFFFFF",
  fontFamily: "Inter",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
}
const cssButtonAbsolute={
  position:"absolute",
  top:0,
  right:0,
  height:"24px",
  width:"90px"
}
const cssText11={
  color: "#325381",
  fontFamily: "Inter",
  fontSize: "11px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
}
const ViewAna = ({ open, toggleClick,notFirst}) => {
 const  first_board=[{
  isCheck:null,
  firstTerm:"Issued Parts",
  secondTerm:"出庫資村"
 },
{
  isCheck:false,
  firstTerm:"MJP",
  secondTerm:"自社資村"
},{
  isCheck:false,
  firstTerm:"Customer",
  secondTerm:"支給資村"
},
]
  return (
    <CustomLayoutDialog  open={open} toggleClick={toggleClick}mr="0" ml="0" mt="-10" mb="0" title="" maxWidth={"md"}>
       {notFirst?<Box sx={{ml:"20px"}}><Typography sx={textCss13}>資村出庫要求伝票  差戻し確認</Typography></Box>:null}
      <Box sx={{marginLeft:"20px",display:'flex', alignItems:'flex-end',justifyContent:'space-between',mb:"5px",position:"relative"
    }}>
       { notFirst?<CustomButton title="確認" onClick={()=>{}} sx={cssButtonAbsolute} sxText={cssText13White}/>:null}
        <img src="/part-order/anal.png" alt="image" height={80}/>
        <Typography sx={textCss13}>https://www.mrojpn.co.jp</Typography>
      </Box>
      <Divider />
      <Box sx={{display:'flex',justifyContent:'flex-end',mt:"5px"}}>
      <Typography sx={textCss9Bold}>21 - 15292</Typography>
      </Box>
   
      <Box height={"2px"}></Box>
      <Box sx={{display:'flex',marginBottom:"14px"}}>
     
        <Box sx={{ marginLeft:"20px",mr:"10px",display:'flex',flexDirection:'column',gap:"6px"}}>
          <Typography sx={textCss15} >Request For Part And Materials</Typography>
          <Typography sx={textCss13} >資村出庫要求伝票</Typography>
          <Box sx={cssBoxMinimum}>
             {first_board.map((e,index)=> <Box>
              <ItemCheckBox last={index==first_board.length-1} isCheck={e.isCheck} ItemSecond={
                  <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Typography  sx={textCssMinimum}>{e.firstTerm}</Typography>
                  <Typography  sx={textCssMinimum}>{e.secondTerm}</Typography>
                 
                  </Box>
                  }/>
                  
             </Box>)}
          </Box>
        </Box>
        <RequestTable title="Requested by / 資村要求者"></RequestTable>
        <Box sx={{mr:"10px"}}></Box>
        <RequestTable title="Received By / 資村受領者"></RequestTable>
        <Box sx={{mr:"10px"}}></Box>
        <SupplySection title='Supply Section' title2='出庫担当者'/>
        <Box sx={{mr:"10px"}}></Box>
        <Box sx={cssBoxMinimum} flex={1} justifyContent={"center"}>
           <img src="/qr_code/QR1.png" height={80}></img>
        </Box>
      </Box>
      <Box display={"flex"}
      >
        <Box ml={"20px"}></Box>
        <TableRowsDivideShort  params={{headers:["Work Order","Task Card","A/C - No","RSN"],rows:[["10023631","N/R - 00144","JA608A","RC"]],classNamePadding:"header50"}}/>
        <Box ml={"20px"}></Box>
        <TableRowsDivideShort  params={{headers:["Date","Time"],rows:[["2022/02/25","14:00"]],classNamePadding:"header30"}}/>
      </Box>
      <Box height={10}></Box>
      <Box display={"flex"}>
      <Box ml={"20px"}></Box>
     <TableOrderList  params={{headers:["No","Parts No.","Nomen","UT","QTY","Bin No. or Location"],rows:[["1","115 - 163DB","S*EA = KT TPCOAT D-BLU","EA","5","DA2-4B3","-MJP1","TTL6"],["1","115 - 163DB","S*EA = KT TPCOAT D-BLU","EA","5","DA2-4B3","-MJP1","TTL6"],["1","115 - 163DB","S*EA = KT TPCOAT D-BLU","EA","5","DA2-4B3","-MJP1","TTL6"],["1","115 - 163DB","S*EA = KT TPCOAT D-BLU","EA","5","DA2-4B3","-MJP1","TTL6"]],rows:[["1","115 - 163DB","S*EA = KT TPCOAT D-BLU","EA","5","DA2-4B3","-MJP1","TTL6"],["1","115 - 163DB","S*EA = KT TPCOAT D-BLU","EA","5","DA2-4B3","-MJP1","TTL6"],["1","115 - 163DB","S*EA = KT TPCOAT D-BLU","EA","5","DA2-4B3","-MJP1","TTL6"],
     ["1","","","","","","",""],
     ["1","","","","","","",""],
     ["1","","","","","","",""]],}}/>
     </Box>
     <Box ml={"20px"}>
      <Typography sx={cssText7}>Note : 　① 　A/C-No. = Aircraft Registration No./ 機体登録　No.</Typography>
      <Box ml={"26.5px"}>
      <Typography sx={cssText7}>②　　RSN. = Reason Code / 部品消費理由コード (TC = MR TASK CARD / EO = EO 作業 / TR = TRP / RC = Discrepancy Repair 不具合修復 / MQ = Maintenance Quality 作業品質関連 / OT = Other その他)</Typography>
        </Box>        
     </Box>
     <Box display={'flex'} justifyContent={"flex-end"}>
      <Typography sx={cssText7}>MRO Japan Form - SD - 004C</Typography>
     </Box>
     <Box ml={"20px"}display={'flex'} flexDirection={"column"}>
      <Typography sx={cssText11}>補給コメント</Typography>
      <Box height={7}></Box>
      <Typography sx={cssText11}>出庫済み資村がありますので、そちらを使用願いします</Typography>
      
    {
        [...Array(4)].map(()=><Divider sx={{ mb: '28px' }} />)
    }      
        
     </Box>
    </CustomLayoutDialog>
  )
};

const centercss={display:'flex',justifyContent:'center',alignItems:'flex-center'}

const textCss11={color:'#325381',
  fontSize:'11px',
  fontFamily:'Inter',
  fontStyle:'normal',
  fontWeight:'400',
  lineHeight:'normal',};
  const textCss15={color:'#325381',
  fontSize:'15px',
  fontFamily:'Inter',
  fontStyle:'normal',
  fontWeight:'400',
  lineHeight:'normal',};
  const textCss13={
    color:'#325381',
  fontSize:'13px',
  fontFamily:'Inter',
  fontStyle:'normal',
  fontWeight:'400',
  lineHeight:'normal',
  }
 const textCss9Bold={
  color:'#325381',
  fontSize:'9px',
  fontFamily:'Inter',
  fontStyle:'normal',
  fontWeight:'700',
  lineHeight:'normal',
 }
  const textCssMinimum={color:'#325381',
  fontSize:'9px',
  fontFamily:'Inter',
  fontStyle:'normal',
  fontWeight:'400',
  lineHeight:'normal',
};  
 const StyledContainer=styled('div')(()=>({
 
  '& .row':{
    display:"flex",
    
    justifyContent:"center",
  },
  '& .row:first-of-type  .cell:first-of-type':{
    position:'relative',
 
    },
  '& .row:first-of-type':{
  
   borderBottom:"1px solid #E3E3E3"
  },
  '& .row .header ':{
    flex:1,
    textAlign: "center",
    justifyContent:'center',
    padding:"3px"
  },
  
  '& .row .header:first-of-type:after':{
    content: '" "',
    height: "80%", 
    width: "1px",    
    position: "absolute",
    right: 0,
    top: "10%",     
    backgroundColor: "#E3E3E3", 
  },
  '& .row .cell ':{
    flex:1,
    textAlign: "center",
    justifyContent:'center',
    padding:"3px"
  },
  
  '& .row .cell:first-of-type:after':{
    content: '" "',
    height: "80%", 
    width: "1px",    
    position: "absolute",
    right: 0,
    top: "10%",     
    backgroundColor: "#E3E3E3", 
  },
  '& .row:last-of-type .cell:first-of-type':{
    height:"50px",
    position:'relative',
  },
  '& .row:last-of-type .cell:first-of-type:after':{
    content: '" "',
    height: "100%", 
    width: "1px",    
    position: "absolute",
    right: 0,
    top: "10%",     
    backgroundColor: "#E3E3E3",
  },
  // '& .row:first-of-type .cell:last-of-type':{
  //   position:'relative',
  // }
}))
const RequestTable=({title})=>{
  return <Box sx={cssBoxRequest} flexDirection={'column'} >
     <Typography sx={textCss11} marginBottom={0.5} textAlign={"center"}>{title}</Typography>
     <Divider  sx={{    
       "&::before, &::after": {
      borderColor: "#E3E3E3",
    }, }}/>
     <StyledContainer>
       <Box className="row" >
          <Box className="cell"><Typography  sx={textCss11}  className="text">Zone</Typography></Box>
          <Box className="cell"><Typography sx={textCss11}  className="text">Name</Typography></Box>
       </Box>
        <Box className="row">
          <Box className="cell"><Typography  sx={textCss11}  className="text"></Typography></Box>
          <Box className="cell"><Typography sx={textCss11}   className="text"> </Typography></Box>
       </Box>
     </StyledContainer>
  </Box>
}
const SupplySection=({title,title2})=>{

  return <Box sx={cssBoxRequest}  flexDirection={'column'} alignItems={"center"} >
    
     <Typography sx={textCss11} textAlign={"center"}  marginBottom={0.5} >
     {title}
     </Typography>
     <Typography sx={textCss11} textAlign={"center"} marginBottom={0.5} >
     {title2}
     </Typography>   
     <Divider color="#E3E3E3" sx={{ height: "1px", width: '92px' }} />
     
  </Box>
}
// const FirstItemTable=({height,width,text})=>{
//   return <Box
//     height={height}
//     width={width}
//     sx={centercss}
//     border={{borderTop:1,borderRight:1,borderBottom:1}}
//   >
//    <Typography sx={textCss11}>{text}</Typography>
//   </Box>
// }
// const LastItemTable=({height,width,text})=>{
//   return <Box
//     height={height}
//     width={width}
//     sx={centercss}
//     border={{borderTop:1,borderLeft:1,borderBottom:1}}
//   >
//    <Typography sx={textCss11}>{text}</Typography>
//   </Box>
// }


type typeItemCheckBox={
  last:boolean,
  isCheck:boolean|null
  ItemSecond:
  React.ReactNode
}

const ItemCheckBox = ({last,isCheck,ItemSecond}:typeItemCheckBox) => {

  return (
   <Box sx={{display:'flex', alignItems:'flex-start'}}>
     {isCheck!=null?<Checkbox sx={{paddingTop:0 }}disabled checked={isCheck}/>:<Box/>}
     {ItemSecond}
     {last?<Box></Box>: <Divider sx={{marginLeft:"7px",height:"26px"}} orientation="vertical" flexItem></Divider>}
   </Box>
  )
};






const CustomItemAction = ({ name, sx }) => {
  return (
    <Typography className="child" sx={sx}>{name}</Typography>
  )
};


const cssItemAction = {

  "min-width": 100,
  "display": "flex",
  "justify-content": "center",
  "&:hover": {
    backgroundColor: '#D9D9D9',

    "& .child": {
      color: '#484848',
    }
  }
};
const cssTextItemAction = {
  "color": "#979797",
  "font-size": "18px",
  "font-weight": 400,
  "line-height": "normal",
}

const cssBoxListOrder = {
  background: "#F5F5F5",

}

const cssTextListOrder = {
  color: "#325381",
  fontSize: "20px",
  fontWeight: 700
}

const cssTextTitleRed={
  color:"#B91919",
  fontSize: "11px",
  fontWeight: 400,
  "& span":{
    color: "#325381",
    fontSize: "11px",
    fontWeight: 700
  }
}
const cssTextTitleBlue={
  color:"#325381",
  fontSize: "13px",
  fontWeight: 700,
}
const cssButtonBlue={
height:"25px",
paddingX:"30px",
borderRadius: "8px",
backgroundColor: "#325381",
}
const PartOrderList = ({ open, toggleClick }) => {
  const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];
  const columns: GridColDef[] = [
    {
      field: 'actions',
      type: 'actions',
      width: 10,
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem  onClick={()=>setActionOpen("View")} sx={cssItemAction} icon={<CustomItemAction name="View" sx={cssTextItemAction} />} showInMenu></GridActionsCellItem>,
        <GridActionsCellItem  onClick={()=>setActionOpen("Pdf")} sx={cssItemAction} icon={<CustomItemAction name="PDF" sx={cssTextItemAction} />} showInMenu></GridActionsCellItem>,
        <GridActionsCellItem  onClick={()=>setActionOpen("印刷")} sx={cssItemAction} icon={<CustomItemAction name="印刷" sx={cssTextItemAction} />} showInMenu></GridActionsCellItem>,
        <GridActionsCellItem  onClick={()=>setActionOpen("修正")} sx={cssItemAction} icon={<CustomItemAction name="修正" sx={cssTextItemAction} />} showInMenu></GridActionsCellItem>,
      ]
    },
    { field: 'id', headerName: 'No.', width: 50 },

    { field: 'taskcard', headerName: 'Task Card', width: 200 },
    { field: 'RSN', headerName: 'RSN', width: 90 },
    { field: 'time', headerName: '保存日時', width: 180 },
    { field: 'EMP', headerName: 'EMP', width: 90 },
    {
      field: 'email',
      type: "actions",
      width: 10,
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem sx={cssItemAction} icon={
          <img src="/part-order/send.png" alt="image" />
        } ></GridActionsCellItem>,

      ]
    }
  ]
  const secondcolumns: GridColDef[] = [

    { field: 'id', headerName: 'No.', width: 60 },

    { field: 'taskcard', headerName: 'Task Card', width: 200 },
    { field: 'RSN', headerName: 'RSN', width: 90 },
    { field: 'time', headerName: '保存日時', width: 180 },
    { field: 'EMP', headerName: 'EMP', width: 90 },

  ]
  const thirdcolumns: GridColDef[] = [
    {
      field: 'actions',
      type: 'actions',
      width: 10,
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem sx={cssItemAction} icon={<CustomItemAction name="View" sx={cssTextItemAction} />} showInMenu></GridActionsCellItem>,
        <GridActionsCellItem sx={cssItemAction} icon={<CustomItemAction name="印刷" sx={cssTextItemAction} />} showInMenu></GridActionsCellItem>,
        <GridActionsCellItem sx={cssItemAction} icon={<CustomItemAction name="修正" sx={cssTextItemAction} />} showInMenu></GridActionsCellItem>,
      ]
    },
    { field: 'id', headerName: 'No.', width: 60 },

    { field: 'taskcard', headerName: 'Task Card', width: 200 },
    { field: 'RSN', headerName: 'RSN', width: 90 },
    { field: 'time', headerName: '保存日時', width: 180 },
    { field: 'EMP', headerName: 'EMP', width: 90 },

  ]
  const fourthcolumns: GridColDef[] = [
    
    { field: 'id', headerName: 'No.', width: 60 },

    { field: 'taskcard', headerName: 'Task Card', width: 150 },
    { field: 'RSN', headerName: 'RSN', width: 90 },
    { field: 'time', headerName: '保存日時', width: 120 },
    { field: 'EMP', headerName: 'EMP', width: 60 },
    {
      field: 'actions',
      type: 'actions',
      width: 90,
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem  icon={<Button sx={cssButtonBlue} onClick={()=>{}}><Typography color={"#ffffff"}>確認</Typography></Button>} ></GridActionsCellItem>,
        
      ]
    },
  ]
  const fifthColumns: GridColDef[] = [
    {
      field: 'actions',
      type: 'actions',
      width: 10,
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem sx={cssItemAction} icon={<CustomItemAction name="View" sx={cssTextItemAction} />} showInMenu></GridActionsCellItem>,
        <GridActionsCellItem sx={cssItemAction} icon={<CustomItemAction name="PDF" sx={cssTextItemAction} />} showInMenu></GridActionsCellItem>,
        <GridActionsCellItem sx={cssItemAction} icon={<CustomItemAction name="印刷" sx={cssTextItemAction} />} showInMenu></GridActionsCellItem>,
       
      ],
    },
    { field: 'id', headerName: 'No.', width: 50 },

    { field: 'taskcard', headerName: 'Task Card', width: 200 },
    { field: 'RSN', headerName: 'RSN', width: 90 },
    { field: 'time', headerName: '保存日時', width: 180 },
    { field: 'EMP', headerName: 'EMP', width: 90 },
    
  ]
  const rows = [{ id: 1, taskcard: 1, RSN: 1, time: 1, EMP: 1 },
  { id: 1, taskcard: 1, RSN: 1, time: 1, EMP: 1 },
  { id: 1, taskcard: 1, RSN: 1, time: 1, EMP: 1 },
  { id: 1, taskcard: 1, RSN: 1, time: 1, EMP: 1 },
  { id: 1, taskcard: 1, RSN: 1, time: 1, EMP: 1 },
  { id: 1, taskcard: 1, RSN: 1, time: 1, EMP: 1 },
  { id: 1, taskcard: 1, RSN: 1, time: 1, EMP: 1 },
  { id: 1, taskcard: 1, RSN: 1, time: 1, EMP: 1 }];
  const [zones, setZones] = React.useState(["EXT1", "EXT2", "INT", "EEM", "MAM"]);
  const [selectZone, setSelectZone] = React.useState(-1);
  const [actionOpen,setActionOpen]=React.useState("");

  return (
    <CustomLayoutDialog open={open} toggleClick={toggleClick}mr="0" ml="9" mt="0" mb="15" title="" maxWidth={"xl"}>
      <ViewAna open={actionOpen!=""} toggleClick={()=>{setActionOpen("")}} notFirst={actionOpen!="View"}></ViewAna>
      <Grid container spacing={2} >
        <Grid item xs={12 / 18 * 10}>
          <Box sx={cssBoxListOrder} pt="15px" pl="28px" pr="42px" pb="35px" >
            <Grid container spacing={2}>

              <Grid item xs={4.1}>
                <Grid container flexDirection="column" >
                  <Grid item xs={12}><Typography {...cssTextListOrder}>WO</Typography></Grid>
                  <Grid item xs={12}><SelectCustom options={options} /></Grid>
                </Grid>
              </Grid>
              <Grid item xs={7.9}>
                <Grid container flexDirection="column" >
                  <Grid item xs={12}>
                    <FormControl error>
                      <FormLabel><Typography {...cssTextListOrder}>Zone</Typography></FormLabel>
                      <FormGroup row>
                        {
                          zones.map((value, index) => <FormControlLabel
                            label={value}
                            control={<Checkbox value={value}
                              checked={selectZone == index}
                              onChange={() => setSelectZone(index)}
                            ></Checkbox>}
                          ></FormControlLabel>)
                        }
                      </FormGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>


            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12 / 18 * 8}>
          <Grid container justifyContent={"center"} >
            <img src='/part-order/logo.png' alt="image" />
          </Grid>

        </Grid>
      </Grid>
      <Grid container spacing={2} >
        <Grid item xs={12 / 18 * 10} flexDirection={"column"}>          
          <Typography sx={cssTextTitleBlue} >保存済 (末送信)</Typography>
          <Box sx={cssBoxListOrder} height={254}>
            <DataGrid
              rows={rows}
              columns={columns}

            ></DataGrid>
          </Box>

        </Grid>
        <Grid item xs={12 / 18 * 8}>
          <Grid container>
         <Grid item xs={1}> <Typography sx={cssTextTitleBlue}>差戻し</Typography></Grid>
          <Grid item xs={11}><Typography  sx={cssTextTitleRed}>[CSの方へ]  : 捕給から差戻しがあった場合は早急に確認をして、[保存済]　にステータスを変更してください</Typography></Grid>
          </Grid>
          <Box sx={cssBoxListOrder} height={254}>
            <DataGrid
              rows={rows}
              columns={fourthcolumns}

            ></DataGrid>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} >
        <Grid item xs={12 / 18 * 10} flexDirection={"column"}>
          <Typography sx={cssTextTitleBlue}>送信済  (出庫待ち)</Typography>
          <Box sx={cssBoxListOrder} height={254}>
            <DataGrid
              rows={rows}
              columns={secondcolumns}

            ></DataGrid>
          </Box>
        </Grid>
        <Grid item xs={12 / 18 * 8}>
        <Grid container alignItems={"center"} >
         <Grid item xs={1}> <Typography sx={cssTextTitleBlue}>出庫済</Typography></Grid>
          <Grid item xs={11}><Typography sx={cssTextTitleRed}><span>✪</span> Dock Out までに全て受領してください</Typography></Grid>
          </Grid>
          <Box sx={cssBoxListOrder} height={254}>
            <DataGrid
              rows={rows}
              columns={fifthColumns}

            ></DataGrid>
          </Box>
        
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12 / 18 * 10}>
          <Typography sx={cssTextTitleBlue}>キャンセル</Typography>
          <Box sx={cssBoxListOrder} height={160}>
            <DataGrid
              rows={rows}
              columns={thirdcolumns}

            ></DataGrid>
          </Box>
        </Grid>
        <Grid item xs={12 / 18 * 8}>
        <Typography sx={cssTextTitleBlue}>受領済</Typography>
          <Box sx={cssBoxListOrder} height={160}>
            <DataGrid
              rows={rows}
              columns={fifthColumns}
              
            ></DataGrid>
          </Box>
        
        </Grid>
      </Grid>

    </CustomLayoutDialog>
  )
};




const SelectCustom = ({ options, }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Autocomplete
      options={options}
      defaultValue={options[0]}
      disablePortal
      onOpen={(e) => { setOpen(true) }}
      onClose={(e) => { setOpen(false) }}
      popupIcon={<CustomPopUpIcon open={open} />}
      renderInput={(params) => <TextField {...params}></TextField>}
    ></Autocomplete>
  )
};



