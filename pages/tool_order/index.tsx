import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormGroup from '@mui/material/FormGroup';
// table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';

//dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import CloseIcon from '@mui/icons-material/Close';

//TextField
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import RefreshIcon from '@mui/icons-material/Refresh';

//date
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//tab
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

//quantity
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';

//dialog
function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 0 }} {...other}>
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

// DatePicker
const datePicker = {
    'input': {
        color: '#325381',
        fontSize: '13px',
        backgroundColor: '#f5f5f5',
        padding: '8.5px 14px',
        paddingLeft: 4,
        order: 2,
        p:1.5,
    },
    '.MuiInputBase-formControl': {
      backgroundColor: '#f5f5f5',
      marginTop:2,
    },    
    '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: 0,
    },
}

//css textfield
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F5F5F5' : '#1A2027',
    fontSize: 16,
    padding: '10px 12px',
    
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.1rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

//css
const font12={fontSize:'12px', color:'#325381'};
const font_select13={'.MuiTypography-root':{fontSize:13}};
const font16={fontSize:'16px', color:'#325381'};
const font14={fontSize:'14px', color:'#325381'};
const colorText= '#325381';
const cssSearchData = { fontSize:14,color:'#325381', textAlign:'center' };
const cssData = { fontSize:14,color:'#325381', textAlign:'left' };
const cssGrid={ mt:2 };
const bgcorlor = {backgroundColor:'#F5F5F5'};
const textCenter = { textAlign:'center', p:1, color:'#325381'};
const textCenter2 = { textAlign:'center', color:'#325381'};
const borderRight ={ borderRight:'1px solid #c9c9c9' };
const border = {border:'1px solid #C9C9C9', display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'};
const cssMR = { mr:4, color:"#325381" };
//select
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  '全て: 下記で全検索',
  'TN : TOOL NUMBERで検索',
  'NOMEN : TOOL名で検索',

];

export default function Parts() {
  //quantity
  const [count, setCount] = React.useState(0);
  //select
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  //select dialog
  const [age, setAge] = React.useState('');

  const handleChangeDialog = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  // Dialog Tool
  const [openTool, setOpenTool] = React.useState(false);

  const handleClickOpenTool = () => {
    setOpenTool(true);
  };

  const handleCloseTool = () => {
    setOpenTool(false);
  };

  // Dialog Search
  const [openSearch, setOpenSearch] = React.useState(false);

  const handleClickOpenSearch = () => {
    setOpenSearch(true);
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
  };

  // Dialog Heavy
  const [openHeavy, setOpenHeavy] = React.useState(false);

  const handleClickOpenHeavy = () => {
    setOpenHeavy(true);
  };

  const handleCloseHeavy = () => {
    setOpenHeavy(false);
  };

  // Dialog Order List
  const [openList, setOpenList] = React.useState(false);

  const handleClickOpenList = () => {
    setOpenList(true);
  };

  const handleCloseList = () => {
    setOpenList(false);
  };

   // Dialog kit
  const [openKit, setOpenKit] = React.useState(false);

  const handleClickOpenKit = () => {
    setOpenKit(true);
  };

  const handleCloseKit = () => {
    setOpenKit(false);
  };

  //tab
  const [value, setValue] = React.useState('1');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // LAPTOP
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

  const isLaptop = width <= 1400;

  return (
  <div>
    <Box sx={{
          width: '100%',}}>
      <Grid container spacing={0} sx={{ p: 2,  }}>
        <Grid item xs={12} sx={{ mb:2 }}>
          <Typography sx={font16} >
            <strong>Tool Order</strong>
          </Typography>
        </Grid>
      {/*Head*/}
        <Grid item xs={12} backgroundColor="#F0F0F0">
          <Grid container spacing={0}>
            <Grid item xs={isLaptop ? 12 : 4} sx={{ p:3 }}>
              <FormControl sx={{ minWidth: 350, backgroundColor: '#FFFFFF' }} size="small">
                 <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  value={personName}
                  onChange={handleChange}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <FormControlLabel value={personName.indexOf(name) > -1} control={<Radio />} checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}

                </Select>
              </FormControl>

              <Button sx={{ ml: 2, backgroundColor: colorText }} variant="contained">検索する</Button>
            </Grid>
            <Grid item xs={isLaptop ? 12 : 8} sx={{ p:3 }}>
                <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ backgroundColor:'#FFF', }}>
                  <Button sx={{ width:250, color: colorText }} onClick={handleClickOpenHeavy}>HEAVY USED</Button>
                  <Button sx={{ width:250, color: colorText }} onClick={handleClickOpenKit}>TOOL KIT</Button>
                  <Button sx={{ width:250, color: colorText }} onClick={handleClickOpenList}>ORDER LIST</Button>
                </ButtonGroup>

                <Button sx={{ ml: 2, backgroundColor: colorText }} variant="contained" onClick={handleClickOpenTool}>
                  <img src="../tool_order/plan.png" width="25" height="25"/>
                  <Typography sx={{ ml:1 }}>
                    顧客借用TOOL登録
                  </Typography>
                </Button>
            </Grid>
          </Grid>
        </Grid>
      {/*End Head 1*/}

      {/*Body*/}
        <Grid item xs={12} sx={{ mb:2,mt:2 }}>
          <Typography sx={font14} >
            <strong>MJP保有TOOL</strong>
          </Typography>
        </Grid>

        <Grid item xs={7}>
          <TableContainer component={Paper} sx={{ height:620, border:'1px solid #F1F1F1' }}>
             <Table sx={{ minWidth: 650 }} size="small" stickyHeader aria-label="sticky table" fullWidth>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>
                    <Typography  sx={cssSearchData}>
                      <strong>Tool Number</strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={cssSearchData}>
                      <strong>Nomen</strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={cssSearchData}>
                      <strong>Batch</strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={cssSearchData}>
                      <strong>Life</strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={cssSearchData}>
                      <strong>PME No</strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={cssSearchData}>
                      <strong>Serial No</strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={cssSearchData}>
                      <strong></strong>
                    </Typography>
                  </TableCell>
               
                </TableRow>
              </TableHead>
              <TableBody>
                {rows2.map((row) => (
                  <TableRow key={row.id} hover>
                    <TableCell>
                      <Typography sx={cssSearchData}>
                        <Link href="#card" sx={{ cusor:'pointer' }}>
                          <img src="../tool_order/card.png" width="35" height="35"/>
                        </Link>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={cssData}>
                        <strong>{row.id}</strong>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={cssData}>
                        <strong>{row.nomen}</strong>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={cssSearchData}>
                        <strong>{row.batch}</strong>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={cssSearchData}>
                        <strong>{row.life}</strong>
                      </Typography>
                    </TableCell>
                     <TableCell>
                    <Typography sx={cssSearchData}>
                        <strong>{row.pme}</strong>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={cssSearchData}>
                        <strong>{row.number}</strong>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={cssSearchData}>
                        <Link href="#picture-card" sx={{ cusor:'pointer' }}>
                          <img src="../tool_order/image.png" width="25" height="25"/>
                        </Link>
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

          </TableContainer>
     
        </Grid>

        <Grid item xs={5}>
          <Grid container sx={{ pl:1 }}>
              <TableContainer component={Paper} sx={{ height:580, border:'1px solid #F1F1F1' }}>
                 <Table sx={{ minWidth: 650 }} size="small" stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={3}>
                        <Typography  sx={cssSearchData}>
                          <strong>Tool Number / Nomen</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>Quantity</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>互換TOOL</strong>
                        </Typography>
                      </TableCell>
                      <TableCell></TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            {row.id}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <Link href="#with-card" sx={{ cusor:'pointer' }}>
                            {row.img}
                            </Link>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssData}>
                            <strong>{row.number}</strong>
                          </Typography>
                          <Typography sx={cssData}>
                            <strong>{row.nomen}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                pt: 4,
                                borderColor: 'background.level1',
                              }}
                            >
                              <IconButton
                                size="sm"
                                variant="outlined"
                                onClick={() => setCount((c) => c - 1)}
                              >
                                <Remove />
                              </IconButton>
                              <Typography fontWeight="md" textColor="text.secondary">
                                {count}
                              </Typography>
                              <IconButton
                                size="sm"
                                variant="outlined"
                                onClick={() => setCount((c) => c + 1)}
                              >
                                <Add />
                              </IconButton>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.tool}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Link href="#delete-card" sx={{ cusor:'pointer' }}>
                            <img src="../tool_order/delete.png" width="20" height="20"/>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

              </TableContainer>

          </Grid>
          <Grid container>
            <Button fullWidth sx={{ ml:1, backgroundColor: colorText }} variant="contained">
              <img src="../tool_order/cart.png" width="30" height="30"/>
              <Typography sx={{ ml:1 }}>
                注文
              </Typography>
            </Button>
          </Grid>
        </Grid>
      {/*End Body*/}
      </Grid>

    </Box>


    {/*Dialog Tool*/}
      <Dialog open={openTool} onClose={handleCloseTool} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseTool}> 
            <Grid container spacing={0}>
              <Grid item xs={12} >
                <Typography color="#325381" sx={{ textAlign:'center' }}>
                  <strong>顧客借用TOOL登録</strong>
                </Typography>
              </Grid>
            </Grid>

          </BootstrapDialogTitle>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  width: 600,
                  height: '100%',
                  ml:2,
                  mr:1,
                },
              }}
            >
              <Paper elevation={0}>
                <Typography color="#325381">
                  TOOL NUMBER or NOMENを入力してください。
                </Typography>
                <Typography color="#325381" sx={{ mt:2 }}>
                  TOOL NUMBER or NOMEN
                </Typography>

                <TextField sx={{ mt:2 }} fullWidth id="outlined-basic" variant="outlined" size="small"/>
              </Paper>
            </Box>

            <DialogActions sx={{ justifyContent:'center', mt:1 }}>
              <Button sx={{ border:'1px solid #E3E3E3', color:'#9C9C9C', width:150, }} >キャンセル</Button>
              <Button sx={{ border:'1px solid #E3E3E3', color:'#FFFFFF', backgroundColor:'#00C2FF', width:150 , }} onClick={handleClickOpenSearch}>OK</Button>
            </DialogActions>

          </DialogContentText>
        </DialogContent>

      </Dialog>
    {/*----------End Dialog Tool----------*/}

    {/*Dialog Search*/}
      <Dialog open={openSearch} onClose={handleCloseSearch} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseSearch}> 
            <Grid container spacing={0}>
              <Grid item xs={12} >
                <Typography color="#325381" sx={{ textAlign:'left' }}>
                  <strong>詳細検索</strong>
                </Typography>
              </Grid>
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
                  width: 1500,
                  height: '100%',
                  ml:2,
                  mr:1,
                },
              }}
            >
              <Paper elevation={0} sx={{ pl:8,pr:8 }}>
                <Grid container sx={cssGrid}>
                  <Grid item xs={6}>
                    <FormControl variant="standard" sx={{ width:'90%' }}>
                      <Typography sx={{ color:colorText, fontSize:14 }}>
                        <strong>AC Type</strong>
                      </Typography>
                      <BootstrapInput id="bootstrap-input" />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl variant="standard" sx={{ width:'90%' }}>
                      <Typography sx={{ color:colorText, fontSize:14 }}>
                        <strong>ATA</strong>
                      </Typography>
                      <BootstrapInput id="bootstrap-input" />
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container sx={cssGrid}>
                  <Grid item xs={6}>
                    <FormControl variant="standard" sx={{ width:'90%' }}>
                      <Typography sx={{ color:colorText, fontSize:14 }}>
                        <strong>Zone</strong>
                      </Typography>
                      <BootstrapInput id="bootstrap-input" />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl variant="standard" sx={{ width:'90%' }}>
                      <Typography sx={{ color:colorText, fontSize:14 }}>
                        <strong>Task Card</strong>
                      </Typography>
                      <BootstrapInput id="bootstrap-input" />
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container sx={cssGrid}>
                  <Grid item xs={6}>
                    <FormControl variant="standard" sx={{ width:'90%' }}>
                      <Typography sx={{ color:colorText, fontSize:14 }}>
                        <strong>Customer</strong>
                      </Typography>
                      <BootstrapInput id="bootstrap-input" />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl variant="standard" sx={{ width:'100%' }}>
                      <Typography sx={{ color:colorText, fontSize:14 }}>
                        <strong>Author</strong>
                      </Typography>
                      <Typography>
                        <BootstrapInput id="bootstrap-input" sx={{ width:'50%' }}/> 
                          <RefreshIcon sx= {{ ml:3, color:'#c9c9c9'}}/>
                      </Typography>
                    </FormControl>
                  </Grid>

                <Grid container sx={cssGrid}>
                  <Grid item xs={6}>
                    <FormControl variant="standard" sx={{ width:'90%' }}>
                      <Typography sx={{ color:colorText, fontSize:14 }}>
                        <strong>Category</strong>
                      </Typography>
                      <BootstrapInput id="bootstrap-input" />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl variant="standard" sx={{ width:'90%' }}>
                      <Typography sx={{ color:colorText, fontSize:14 }}>
                        <strong>AMM</strong>
                      </Typography>
                      <BootstrapInput id="bootstrap-input" />
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container sx={cssGrid}>
                  <Grid item xs={12}>
                    <FormControl variant="standard" sx={{ width:'95%' }}>
                      <Typography sx={{ color:colorText, fontSize:14 }}>
                        <strong>Kit 名/作業名</strong>
                      </Typography>
                      <BootstrapInput id="bootstrap-input" />
                    </FormControl>
                  </Grid>
                  
                </Grid>

                </Grid>
              </Paper>
            </Box>

            <DialogActions sx={{ justifyContent:'right', mt:1, mr:16 }}>
              <Button variant="contained" sx={{ backgroundColor:'#325381', color:"#fff", width:150, }} >
                <img src="../tool_order/search.png" width="20" height="20"/>
                <Typography sx={{ fontSize:14, ml:1 }}>
                  検索
                </Typography>
              </Button>
              <Button variant="contained" sx={{ backgroundColor:'#325381', color:"#fff", width:150 , }} >
                <img src="../tool_order/reset.png" width="20" height="20"/>
                <Typography sx={{ fontSize:14, ml:1 }}>
                  Reset
                </Typography>
              </Button>
              <Button variant="contained" sx={{ backgroundColor:'#325381',color:"#fff",  width:250 , }} >
                <img src="../tool_order/save.png" width="20" height="20"/>
                <Typography sx={{ fontSize:14, ml:1 }}>
                  新規作成/一時保存中
                </Typography>
              </Button>
            </DialogActions>

          </DialogContentText>
        </DialogContent>

      </Dialog>
    {/*----------End Dialog Search----------*/}

    {/*Dialog Heavy*/}
      <Dialog open={openHeavy} onClose={handleCloseHeavy} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseHeavy}> 
            <Grid container spacing={0}>
              <Grid item xs={12} sx={{ p:2 }}>
                <Typography color="#325381" sx={{ textAlign:'center', fontSize:20 }}>
                  <strong>TOOL要求情報入力</strong>
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my:1, mx:6 }}/>
          </BootstrapDialogTitle>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  width: 1100,
                  height: '100%',
                  ml:2,
                  mr:1,
                },
              }}
            >
              <Paper elevation={0} sx={{ pl:4,pr:4 }}>
                <Grid container spacing={0} sx={{ pl:1,pr:4 }}>
                  <Grid item xs={6}>
                    <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        <Typography color="#325381" sx={{ textAlign:'center', fontSize:18, wordSpacing:20 }}>
                          要求種別 (「事前要求」は翌日以降指定)
                        </Typography>
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel value="female" control={<Radio />} label="通常要求" sx={font14}/>
                        <FormControlLabel value="male" control={<Radio />} label="事前要求" sx={font14}/>
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography color="#325381" sx={{ textAlign:'right', fontSize:18, wordSpacing:20 }}>
                      借用者 (要求者と借用者が異なる場合入力)
                    </Typography>
                    <FormControl fullWidth sx={{ display:'flex', alignItems:'flex-end', }}>
                      <Select
                        id="demo-simple-select"
                        value={age}
                        size="small"
                        defaultValue="70075"
                        sx={{ textAlign:'center', width:'60%', }}
                        onChange={handleChangeDialog}
                      >
                        <MenuItem value={10}>70075</MenuItem>
                        <MenuItem value={20}>70076</MenuItem>
                        <MenuItem value={30}>70077</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Divider sx={{ my:2, mr:1 }}/>

                <Typography color="#325381" sx={{ fontSize:18, ml:1 }}>
                  Work Order
                </Typography>
                <Grid container spacing={0} sx={{ pl:1,pr:4 }}>
                  <Grid item xs={6}>
                    <FormControl variant="standard" sx={{ width:'70%', }}>
                      <BootstrapInput id="bootstrap-input" placeholder="Work Order"/>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} sx={{ display:'flex', justifyContent:'right'}}>
                    <Button variant="contained" sx={{ backgroundColor:'#325381', color:"#fff", width:350 , height:42}} >
                    <Typography sx={{ fontSize:14, ml:1 }}>
                      Work Order手入力
                    </Typography>
                  </Button>
                  </Grid>
                </Grid>
                <Divider sx={{ my:2, mr:1 }}/>

                <Grid container spacing={0} sx={{ pl:1,pr:4 }}>
                  <Grid item xs={12}>
                    <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        <Typography color="#325381" sx={{ fontSize:18 }}>
                          Zone
                        </Typography>
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel value="EXT1" control={<Radio />} label="EXT1" sx={font14}/>
                        <FormControlLabel value="EXT2" control={<Radio />} label="EXT2" sx={font14}/>
                        <FormControlLabel value="EEM" control={<Radio />} label="EEM" sx={font14}/>
                        <FormControlLabel value="MAM" control={<Radio />} label="MAM" sx={font14}/>
                        <FormControlLabel value="INT" control={<Radio />} label="INT" sx={font14}/>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
                <Divider sx={{ my:2, mr:1 }}/>

                <Grid container spacing={0} sx={{ pl:1,pr:4 }}>
                  <Grid item xs={12}>
                    <Typography color="#325381" sx={{ fontSize:18, wordSpacing:20 }}>
                      作業名 (「作業名1」と「作業名2」の組み合わせで作業名を入力)
                    </Typography>
                    <Typography color="#325381" sx={{ fontSize:18, wordSpacing:20 }}>
                      ATA
                    </Typography>
                  </Grid>

                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <FormControl variant="standard" sx={{ width:'70%', }}>
                        <BootstrapInput id="bootstrap-input" placeholder="ATA"/>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid container spacing={1} sx={{ mt:1 }}>
                    <Grid item xs={6}>
                      <FormControl variant="standard" sx={{ width:'100%', }}>
                        <BootstrapInput id="bootstrap-input" placeholder="作業名1 (FUNCTION)"/>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl variant="standard" sx={{ width:'100%', }}>
                        <BootstrapInput id="bootstrap-input" placeholder="作業名2 (COMPONENT / AREA / POSI 等々)"/>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl variant="standard" sx={{ width:'100%', }}>
                        <BootstrapInput id="bootstrap-input" placeholder="Work Order"/>
                      </FormControl>
                    </Grid>
                  </Grid>

                </Grid>

              </Paper>
            </Box>

            <DialogActions sx={{ justifyContent:'center', mt:1, mr:16 }}>
              <Button variant="contained" sx={{ backgroundColor:'#325381', color:"#fff", width:150, }} >
                <img src="../tool_order/search.png" width="20" height="20"/>
                <Typography sx={{ fontSize:14, ml:1 }}>
                  キャンセル
                </Typography>
              </Button>
              <Button variant="contained" sx={{ backgroundColor:'#325381', color:"#fff", width:150 , }} >
                <img src="../tool_order/reset.png" width="20" height="20"/>
                <Typography sx={{ fontSize:14, ml:1 }}>
                  注文確認
                </Typography>
              </Button>
              
            </DialogActions>

          </DialogContentText>
        </DialogContent>

      </Dialog>
    {/*----------End Dialog Heavy----------*/}

    {/*Dialog List*/}
      <Dialog open={openList} onClose={handleCloseList} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseList}> 
            <Grid container spacing={0}>
              <Grid item xs={12} sx={{ p:2 }}>
                <Typography color="#325381" sx={{ textAlign:'center', fontSize:20 }}>
                  <strong>Tool Order List</strong>
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my:1, mx:6 }}/>
          </BootstrapDialogTitle>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  width: 1100,
                  height: '100%',
                  ml:2,
                  mr:1,
                },
              }}
            >
              <Paper elevation={0} sx={{ pl:4,pr:4 }}>
                <Grid container spacing={5}>
                  <Grid item xs={5}>
                    <FormControl variant="standard" sx={{ width:'90%' }}>
                      <Typography sx={{ color:colorText, fontSize:16 }}>
                        Employee No. (要求者 社員番号)
                      </Typography>
                      <BootstrapInput id="bootstrap-input" sx={{ mt:2 }}/>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3.5}>
                    <FormControl variant="standard" sx={{ width:'100%' }}>
                      <Typography sx={{ color:colorText, fontSize:16 }}>
                        From Date :
                      </Typography>
                      <FormControlLabel sx={{ display: 'flex', '.MuiFormControlLabel-label': { width: '100%', fontSize: '14px' } }} control={
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker format="YYYY/MM/DD" sx={datePicker} defaultValue={dayjs('2023/04/25')} />
                        </LocalizationProvider>
                      } />
                    </FormControl>
                  </Grid>
                  <Grid item xs={3.5}>
                    <FormControl variant="standard" sx={{ width:'100%' }}>
                      <Typography sx={{ color:colorText, fontSize:16 }}>
                        To Date :
                      </Typography>
                      <FormControlLabel sx={{ display: 'flex', '.MuiFormControlLabel-label': { width: '100%', fontSize: '14px' } }} control={
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker format="YYYY/MM/DD" sx={datePicker} defaultValue={dayjs('2023/04/25')} />
                        </LocalizationProvider>
                      } />
                    </FormControl>
                  </Grid>
                </Grid>
                <Box sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      '& > :not(style)': {
                        width: 1014,
                        height: '100%',
                        backgroundColor:'#f5f5f5'
                      },
                    }}>
                  <Grid container spacing={0} sx={{ mt:4 }}>
                    
                      <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                              <Tab label="Individual" value="1" sx={{ minWidth:507, }} />
                              <Tab label="WO / Zone" value="2" sx={{ minWidth:507 }} />
                            </TabList>
                          </Box>
                          <TabPanel value="1">
                            <TableContainer component={Paper} sx={{ height:420, border:'1px solid #F1F1F1', backgroundColor:'#F5F5F5' }}>
                              <Table sx={{ minWidth: 650 }} size="small" stickyHeader aria-label="sticky table" fullWidth>
                                <TableHead>
                                  <TableRow>
                                    <TableCell sx={bgcorlor}>
                                    </TableCell>
                                    <TableCell sx={{backgroundColor:bgcorlor, borderRight:"1px solid #D9D9D9"}}>
                                      <Typography  sx={cssSearchData}>
                                        <strong>要求番号 / 要求種別</strong>
                                      </Typography>
                                    </TableCell>
                                    <TableCell sx={{backgroundColor:bgcorlor, borderRight:"1px solid #D9D9D9"}}>
                                      <Typography sx={cssSearchData}>
                                        <strong>要求者</strong>
                                      </Typography>
                                    </TableCell>
                                    <TableCell sx={{backgroundColor:bgcorlor, borderRight:"1px solid #D9D9D9"}}>
                                      <Typography sx={cssSearchData}>
                                        <strong>要求日時</strong>
                                      </Typography>
                                    </TableCell>
                                    <TableCell sx={{backgroundColor:bgcorlor, borderRight:"1px solid #D9D9D9"}}>
                                      <Typography sx={cssSearchData}>
                                        <strong>WO / AC</strong>
                                      </Typography>
                                    </TableCell>
                                    <TableCell sx={{backgroundColor:bgcorlor, borderRight:"1px solid #D9D9D9"}}>
                                      <Typography sx={cssSearchData}>
                                        <strong>Zone / 借用者</strong>
                                      </Typography>
                                    </TableCell>
                                    <TableCell sx={bgcorlor}>
                                      <Typography sx={cssSearchData}>
                                        <strong>作業名</strong>
                                      </Typography>
                                    </TableCell>

                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {rows3.map((row) => (
                                    <TableRow key={row.id} hover>
                                      <TableCell>
                                        <Typography sx={cssSearchData}>
                                          <img src="../tool_order/polygon.png" width="15" height="15"/>
                                        </Typography>
                                      </TableCell>
                                      <TableCell sx={{borderRight:"1px solid #D9D9D9"}}>
                                        <Typography sx={cssSearchData}>
                                          <strong>{row.type}</strong>
                                        </Typography>

                                        <Typography sx={cssSearchData}>
                                          <strong>{row.request}</strong>
                                        </Typography>
                                      </TableCell>
                                      <TableCell sx={{borderRight:"1px solid #D9D9D9"}}>
                                        <Typography sx={cssSearchData}>
                                          <strong>{row.nor}</strong>
                                        </Typography>
                                      </TableCell>
                                      <TableCell sx={{borderRight:"1px solid #D9D9D9"}}>
                                        <Typography sx={cssSearchData}>
                                          <strong>{row.date}</strong>
                                        </Typography>
                                      </TableCell>
                                      <TableCell sx={{borderRight:"1px solid #D9D9D9"}}>
                                        <Typography sx={cssSearchData}>
                                          <strong>{row.WO}</strong>
                                        </Typography>

                                        <Typography sx={cssSearchData}>
                                          <strong>{row.AC}</strong>
                                        </Typography>
                                      </TableCell>
                                      <TableCell sx={{borderRight:"1px solid #D9D9D9"}}>
                                        <Typography sx={cssSearchData}>
                                          <strong>{row.zone}</strong>
                                        </Typography>

                                        <Typography sx={cssSearchData}>
                                          <strong>{row.requestZone}</strong>
                                        </Typography>
                                      </TableCell>
                                      <TableCell>
                                        <Typography sx={cssSearchData}>
                                          <strong>{row.work}</strong>
                                        </Typography>
                                      </TableCell>

                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>

                            </TableContainer>

                          </TabPanel>

                          <TabPanel value="2">
                            <TableContainer component={Paper} sx={{ height:420, border:'1px solid #F1F1F1', backgroundColor:'#F5F5F5' }}>
                              <Table sx={{ minWidth: 650 }} size="small" stickyHeader aria-label="sticky table" fullWidth>
                                <TableHead>
                                  <TableRow>
                                    <TableCell sx={bgcorlor}>
                                    </TableCell>
                                    <TableCell sx={{backgroundColor:bgcorlor, borderRight:"1px solid #D9D9D9"}}>
                                      <Typography  sx={cssSearchData}>
                                        <strong>要求番号 / 要求種別</strong>
                                      </Typography>
                                    </TableCell>
                                    <TableCell sx={{backgroundColor:bgcorlor, borderRight:"1px solid #D9D9D9"}}>
                                      <Typography sx={cssSearchData}>
                                        <strong>要求者</strong>
                                      </Typography>
                                    </TableCell>
                                    <TableCell sx={{backgroundColor:bgcorlor, borderRight:"1px solid #D9D9D9"}}>
                                      <Typography sx={cssSearchData}>
                                        <strong>要求日時</strong>
                                      </Typography>
                                    </TableCell>
                                    <TableCell sx={{backgroundColor:bgcorlor, borderRight:"1px solid #D9D9D9"}}>
                                      <Typography sx={cssSearchData}>
                                        <strong>WO / AC</strong>
                                      </Typography>
                                    </TableCell>
                                    <TableCell sx={{backgroundColor:bgcorlor, borderRight:"1px solid #D9D9D9"}}>
                                      <Typography sx={cssSearchData}>
                                        <strong>Zone / 借用者</strong>
                                      </Typography>
                                    </TableCell>
                                    <TableCell sx={bgcorlor}>
                                      <Typography sx={cssSearchData}>
                                        <strong>作業名</strong>
                                      </Typography>
                                    </TableCell>
                                 
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {rows4.map((row) => (
                                    <TableRow key={row.id} hover>
                                      <TableCell>
                                        <Typography sx={cssSearchData}>
                                          <img src="../tool_order/polygon.png" width="15" height="15"/>
                                        </Typography>
                                      </TableCell>
                                      <TableCell sx={{borderRight:"1px solid #D9D9D9"}}>
                                        <Typography sx={cssSearchData}>
                                          <strong>{row.type}</strong>
                                        </Typography>

                                        <Typography sx={cssSearchData}>
                                          <strong>{row.request}</strong>
                                        </Typography>
                                      </TableCell>
                                      <TableCell sx={{borderRight:"1px solid #D9D9D9"}}>
                                        <Typography sx={cssSearchData}>
                                          <strong>{row.nor}</strong>
                                        </Typography>
                                      </TableCell>
                                      <TableCell sx={{borderRight:"1px solid #D9D9D9"}}>
                                        <Typography sx={cssSearchData}>
                                          <strong>{row.date}</strong>
                                        </Typography>
                                      </TableCell>
                                      <TableCell sx={{borderRight:"1px solid #D9D9D9"}}>
                                        <Typography sx={cssSearchData}>
                                          <strong>{row.WO}</strong>
                                        </Typography>

                                        <Typography sx={cssSearchData}>
                                          <strong>{row.AC}</strong>
                                        </Typography>
                                      </TableCell>
                                      <TableCell sx={{borderRight:"1px solid #D9D9D9"}}>
                                        <Typography sx={cssSearchData}>
                                          <strong>{row.zone}</strong>
                                        </Typography>

                                        <Typography sx={cssSearchData}>
                                          <strong>{row.requestZone}</strong>
                                        </Typography>
                                      </TableCell>
                                      <TableCell>
                                        <Typography sx={cssSearchData}>
                                          <strong>{row.work}</strong>
                                        </Typography>
                                      </TableCell>

                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>

                            </TableContainer>
                          </TabPanel>
                        </TabContext>
                      </Box>

                      

                  </Grid>
                </Box>

              </Paper>
            </Box>

          </DialogContentText>
        </DialogContent>

      </Dialog>
    {/*----------End Dialog List----------*/}

    {/*Dialog kit*/}
      <Dialog open={openKit} onClose={handleCloseKit} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseKit}> 
            <Grid container spacing={0}>
              <Grid item xs={12} sx={{ p:2 }}>
                <Typography color="#325381" sx={{ textAlign:'center', fontSize:20 }}>
                  <strong>工具要求伝票</strong>
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my:1, mx:2 }}/>
          </BootstrapDialogTitle>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  width: 1100,
                  height: '100%',
                  ml:2,
                  mr:1,
                },
              }}
            >
              <Paper elevation={0}>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Grid container spacing={0}>
                      <Grid item xs={7.3}>
                        <Typography color="#325381" sx={{ textAlign:'right', fontSize:18 }}>
                          (「事前要求」は翌日以降指定)
                        </Typography>
                      </Grid>
                      <Grid item xs={4.7} sx={{ textAlign:'right' }}>
                          <img src="../tool_order/print.png" width="35" height="35"/>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel value="通常要求" control={<Radio />} label="通常要求" sx={font14}/>
                        <FormControlLabel value="事前要求" control={<Radio />} label="事前要求" sx={font14}/>
                       
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container spacing={0} sx={{ border:'1px solid #C9C9C9', borderBottom:'none' }}>
                    <Grid item xs={2} sx={borderRight}>
                      <Typography sx={textCenter}>
                        WO
                      </Typography>
                    </Grid>
                    <Grid item xs={2} sx={borderRight}>
                      <Typography sx={textCenter}>
                        EMP
                      </Typography>
                    </Grid>
                    <Grid item xs={2} sx={borderRight}>
                      <Typography sx={textCenter}>
                        NAME
                      </Typography>
                    </Grid>
                    <Grid item xs={2} sx={borderRight}>
                      <Typography sx={textCenter}>
                        DOCK
                      </Typography>
                    </Grid>
                    <Grid item xs={2} sx={borderRight}>
                      <Typography sx={textCenter}>
                        AC
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography sx={textCenter}>
                        ZONE
                      </Typography>
                    </Grid>
                </Grid>
                
                <Grid container spacing={0} sx={{ border:'1px solid #C9C9C9', }}>
                    <Grid item xs={2} sx={borderRight}>
                      <Typography sx={textCenter}>
                        10023866
                      </Typography>
                    </Grid>
                    <Grid item xs={2} sx={borderRight}>
                      <Typography sx={textCenter}>
                        10099
                      </Typography>
                    </Grid>
                    <Grid item xs={2} sx={borderRight}>
                      <Typography sx={textCenter}>
                        山本
                      </Typography>
                    </Grid>
                    <Grid item xs={2} sx={borderRight}>
                      <Typography sx={textCenter}>
                        DOCK - 2
                      </Typography>
                    </Grid>
                    <Grid item xs={2} sx={borderRight}>
                      <Typography sx={textCenter}>
                        JA219A
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography sx={textCenter}>
                        INT
                      </Typography>
                    </Grid>
                </Grid>

                <Grid container>
                  <Typography color="#325381" sx={{ textAlign:'left', fontSize:18, ml:2, mt:2 }}>
                    作業名 
                  </Typography>
                  <Typography color="#325381" sx={{ textAlign:'left', fontSize:18, ml:5, mt:2 }}>
                    REST (INST) - FLOOR CARPET
                  </Typography>
                </Grid>

                <Grid container spacing={0} >
                    <Grid item xs={1.5} sx={border}>
                      <Typography sx={textCenter2}>
                        有
                      </Typography>
                    </Grid>
                    <Grid item xs={0.8} sx={border}>
                      <Typography sx={textCenter2}>
                        無
                      </Typography>
                    </Grid>
                    <Grid item xs={0.8} sx={border}>
                      <Typography sx={textCenter2}>
                        I/W
                      </Typography>
                    </Grid>
                    <Grid item xs={2.4} sx={border}>
                      <Typography sx={textCenter2}>
                        BIN <br/> BATCH (代表)
                      </Typography>
                    </Grid>
                    <Grid item xs={3.2} sx={border}>
                      <Typography sx={textCenter2}>
                        TOOL NUMBER <br/> TOOL NOMEN
                      </Typography>
                    </Grid>
                    <Grid item xs={2} sx={border}>
                      <Typography sx={textCenter2}>
                        QUANTITY
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sx={border}>
                      <Typography sx={textCenter2}>
                        I/W不要
                      </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={0} >
                    <Grid item xs={1.5} sx={border}>
                        <FormGroup aria-label="position" row>
                          <FormControlLabel
                            value="1"
                            control={<Checkbox />}
                            label="1"
                            labelPlacement="start"
                            sx={cssMR}
                          />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={0.8} sx={border}>
                        <FormControlLabel
                            value="1"
                            control={<Checkbox />}
                            labelPlacement="start"
                            sx={{mr:2}}
                          />
                    </Grid>
                    <Grid item xs={0.8} sx={border}>
                      <FormControlLabel
                        value="1"
                        control={<Checkbox />}
                        labelPlacement="start"
                        sx={{mr:2}}
                      />
                    </Grid>
                    <Grid item xs={2.4} sx={border}>
                      <Typography sx={textCenter2}>
                        GN-0 <br/> 124089
                      </Typography>
                    </Grid>
                    <Grid item xs={3.2} sx={border}>
                      <Typography sx={textCenter2}>
                        CAT1 <br/> CABIN TRAY (RED)
                      </Typography>
                    </Grid>
                    <Grid item xs={2} sx={border}>
                      <Typography sx={textCenter2}>
                        4
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sx={border}>
                      <FormControlLabel
                        value="1"
                        control={<Checkbox />}
                        labelPlacement="start"
                        sx={{mr:2}}
                      />
                    </Grid>
                </Grid>

                <Grid container spacing={0} >
                    <Grid item xs={1.5} sx={border}>
                        <FormGroup aria-label="position" row>
                          <FormControlLabel
                            value="1"
                            control={<Checkbox />}
                            label="1"
                            labelPlacement="start"
                            sx={cssMR}
                          />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={0.8} sx={border}>
                        <FormControlLabel
                            value="1"
                            control={<Checkbox />}
                            labelPlacement="start"
                            sx={{mr:2}}
                          />
                    </Grid>
                    <Grid item xs={0.8} sx={border}>
                      <FormControlLabel
                        value="1"
                        control={<Checkbox />}
                        labelPlacement="start"
                        sx={{mr:2}}
                      />
                    </Grid>
                    <Grid item xs={2.4} sx={border}>
                      <Typography sx={textCenter2}>
                        GN-0 <br/> 124089
                      </Typography>
                    </Grid>
                    <Grid item xs={3.2} sx={border}>
                      <Typography sx={textCenter2}>
                        CAT1 <br/> CABIN TRAY (RED)
                      </Typography>
                    </Grid>
                    <Grid item xs={2} sx={border}>
                      <Typography sx={textCenter2}>
                        4
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sx={border}>
                      <FormControlLabel
                        value="1"
                        control={<Checkbox />}
                        labelPlacement="start"
                        sx={{mr:2}}
                      />
                    </Grid>
                </Grid>

                <Grid container spacing={0} >
                    <Grid item xs={1.5} sx={border}>
                        <FormGroup aria-label="position" row>
                          <FormControlLabel
                            value="1"
                            control={<Checkbox />}
                            label="1"
                            labelPlacement="start"
                            sx={cssMR}
                          />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={0.8} sx={border}>
                        <FormControlLabel
                            value="1"
                            control={<Checkbox />}
                            labelPlacement="start"
                            sx={{mr:2}}
                          />
                    </Grid>
                    <Grid item xs={0.8} sx={border}>
                      <FormControlLabel
                        value="1"
                        control={<Checkbox />}
                        labelPlacement="start"
                        sx={{mr:2}}
                      />
                    </Grid>
                    <Grid item xs={2.4} sx={border}>
                      <Typography sx={textCenter2}>
                        GN-0 <br/> 124089
                      </Typography>
                    </Grid>
                    <Grid item xs={3.2} sx={border}>
                      <Typography sx={textCenter2}>
                        CAT1 <br/> CABIN TRAY (RED)
                      </Typography>
                    </Grid>
                    <Grid item xs={2} sx={border}>
                      <Typography sx={textCenter2}>
                        4
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sx={border}>
                      <FormControlLabel
                        value="1"
                        control={<Checkbox />}
                        labelPlacement="start"
                        sx={{mr:2}}
                      />
                    </Grid>
                </Grid>

              </Paper>
            </Box>

            <DialogActions sx={{ justifyContent:'right', mt:1,mr:2}}>
              <Box
                sx={{          
                    width: 390,
                    height: 100,
                }}
              >
                
                <Paper>
                  <Grid container spacing={0} sx={{ p:2 }}>
                    <Grid item xs={6} sx={{ display:'flex', alignItems:'center',justifyContent:'center' }}>
                      <img src="../tool_order/mavach.png" width="166" height="47"/>
                    </Grid>

                    <Grid item xs={6} sx={{ display:'flex', alignItems:'center',justifyContent:'center' }}>
                      <img src="../tool_order/mavach1.png" width="166" height="47"/>
                    </Grid>
                  </Grid>
                </Paper>
                <Typography sx={{ textAlign:'right',fontSize:12, color:"#9C9C9C" }}>
                  要求者 : 10099
                </Typography>
                <Typography sx={{ textAlign:'right',fontSize:12, color:"#9C9C9C" }}>
                  2022/02/07  7:51:48
                </Typography>
              </Box>

              
            </DialogActions>

          </DialogContentText>
        </DialogContent>

      </Dialog>
    {/*----------End Dialog kit----------*/}
  </div>
  );
}

function createDatas(
  id: string,
  nomen: string,
  batch: string,
  life: date,
  pme: string,
  number: number,
) {
  return { id, nomen, batch, life, pme, number };
}

const rows2 = [
  createDatas(
    'K60',
    'AIR DUSTER',
    '117680',
    '2022/04/09',
    'PME No',
    '20100003',
  ),
  createDatas(
    'AW-SNAP ON (9PCS)',
    'ALLEN WRENCH SET-SNAP ON',
    '117680',
    '2022/04/09',
    'PME No',
    '20100003',
  ),
  createDatas(
    'K60',
    'AIR DUSTER',
    '117680',
    '2022/04/09',
    'PME No',
    '20100003',
  ),
  createDatas(
    'AW-SNAP ON (9PCS)',
    'ALLEN WRENCH SET-SNAP ON',
    '117680',
    '2022/04/09',
    'PME No',
    '20100003',
  ),
];

function createData(
  id: string,
  img: image,
  number: number,
  nomen: nomen,
  tool: string,
) {
  return { id, img, number, nomen, tool };
}

const rows = [
  createData(
    '1',
    <img src="../tool_order/image1.png" width="70" height="70"/>,
    '94-8136',
    'ADAPTER - FUEL SUMP DRAIN VALUE',
    // 'ADAPTER - FUEL SUMP DRAIN VALUE',
    '互換不要',
  ),
  createData(
    '1',
    <img src="../tool_order/image1.png" width="70" height="70"/>,
    '94-8136',
    'ADAPTER - FUEL SUMP DRAIN VALUE',
    // 'ADAPTER - FUEL SUMP DRAIN VALUE',
    '互換不要',
  ),
  createData(
    '1',
    <img src="../tool_order/image1.png" width="70" height="70"/>,
    '94-8136',
    'ADAPTER - FUEL SUMP DRAIN VALUE',
    // 'ADAPTER - FUEL SUMP DRAIN VALUE',
    '互換不要',
  ),
  
];

function createDataModal(
  type : string,
  request: string,
  nor:string,
  date: date,
  WO: string,
  AC:string,
  zone: string,
  requestZone:string,
  work: string,
) {
  return { type, nor, request, date, WO, AC, zone, requestZone, work };
}

const rows3 = [
  createDataModal(
    '21-05460',
    '通常要求',
    '10105',
    '2022/02/07  13:32:18',
    '10023866',
    'JA219A',
    'INT',
    '10105',
    '(OTH) OTH',
  ),
  createDataModal(
    '21-05460',
    '通常要求',
    '10105',
    '2022/02/07  13:32:18',
    '10023866',
    'JA219A',
    'INT',
    '10105',
    '(OTH) OTH',
  ),
  createDataModal(
    '21-05460',
    '通常要求',
    '10105',
    '2022/02/07  13:32:18',
    '10023866',
    'JA219A',
    'INT',
    '10105',
    '(OTH) OTH',
  ),
  
];

function createDataModals(
  type : string,
  request: string,
  nor:string,
  date: date,
  WO: string,
  AC:string,
  zone: string,
  requestZone:string,
  work: string,
) {
  return { type, nor, request, date, WO, AC, zone, requestZone, work };
}

const rows4 = [
  
  
];