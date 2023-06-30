import * as React from 'react';
import ListPart from '../../components/request_for_part_and_material/ListPart';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuIcon from '@mui/icons-material/Menu';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

//menu
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

//dialog
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
      height:15,
      textAlign:'left',
      color:"#325381",
      borderRadius:5,
      backgroundColor: "#F1F1F1",
      fontSize: '13px'
    },
  },

});

// ccs
const cssAlignCenter = { display:'flex', justifyContent:'center',textAlign:'center' };
const cssbtnColor = { color:'#FFFFFF', fontSize:13 };
const cssSearchData = { fontSize:16,color:'#325381', textAlign:'center' };
const cssLink = { textDecoration: 'none', color: 'inherit' };
const cssMro = { width: '100%', color: '#325381', textAlign: 'right', fontSize: '13px', position: 'absolute', right: 0, bottom: 0 };
const cssOder = { width: '100%', textAlign: 'right', fontSize: '12px', fontWeight: 700, mb: '5px' };
const cssBox = { background : '#F5F5F5', px: 1, py: 1, borderRadius: '5px'};
const font12 = { fontSize: '12px'};
const font12Center = { fontSize: '12px', textAlign: 'center' };
const cssBox2 = { background : '#F5F5F5', px: 1, py: '19px', borderRadius: '5px'};
const cssMro2 = { color:'#325381', fontSize: '13px', textAlign:'right' };
const cssBox5 = { background : '#F5F5F5', px: 1, py: '19px', borderRadius: '5px'};

const cssMenu = {minWidth: 100, textAlign:'center'};
// Receive Order (送信済)
function createData(
  id: string,
  AC: string,
  taskCard: string,
  Zone: string,
  EMP: string,
  Date: number,
) {
  return { id, AC, taskCard, Zone, EMP, Date };
}

const rows = [
  createData(
    '21-14496',
    'JA851A',
    'N/R-000198',
    'EXT2',
    '10079',
    '2022/02/07  13:13:19',
  ),
  createData(
    '21-14496',
    'JA851A',
    'N/R-000198',
    'EXT2',
    '10079',
    '2022/02/07  13:13:19',
  ),
  createData(
    '21-14496',
    'JA851A',
    'N/R-000198',
    'EXT2',
    '10079',
    '2022/02/07  13:13:19',
  ),
  createData(
    '21-14496',
    'JA851A',
    'N/R-000198',
    'EXT2',
    '10079',
    '2022/02/07  13:13:19',
  ),
  createData(
    '21-14496',
    'JA851A',
    'N/R-000198',
    'EXT2',
    '10079',
    '2022/02/07  13:13:19',
  ),
  createData(
    '21-14496',
    'JA851A',
    'N/R-000198',
    'EXT2',
    '10079',
    '2022/02/07  13:13:19',
  ),
  createData(
    '21-14496',
    'JA851A',
    'N/R-000198',
    'EXT2',
    '10079',
    '2022/02/07  13:13:19',
  ),
  createData(
    '21-14496',
    'JA851A',
    'N/R-000198',
    'EXT2',
    '10079',
    '2022/02/07  13:13:19',
  ),
  createData(
    '21-14496',
    'JA851A',
    'N/R-000198',
    'EXT2',
    '10079',
    '2022/02/07  13:13:19',
  ),
  createData(
    '21-14496',
    'JA851A',
    'N/R-000198',
    'EXT2',
    '10079',
    '2022/02/07  13:13:19',
  ),
  createData(
    '21-14496',
    'JA851A',
    'N/R-000198',
    'EXT2',
    '10079',
    '2022/02/07  13:13:19',
  ),
  createData(
    '21-14496',
    'JA851A',
    'N/R-000198',
    'EXT2',
    '10079',
    '2022/02/07  13:13:19',
  ),
  
];
// 出庫済
function createDatas(
  id: string,
  ACNO: string,
  Zone1: string,
  EMP1: string,
  Date: number,
) {
  return { id, ACNO, Zone1, EMP1, Date };
}

const rows2 = [
  createDatas(
    '21-14491',
    'JA851A',
    'EXT1',
    '10103',
    '2022/02/07  11:39:28',
  ),
  createDatas(
    '21-14491',
    'JA851A',
    'EXT1',
    '10103',
    '2022/02/07  11:39:28',
  ),
  createDatas(
    '21-14491',
    'JA851A',
    'EXT1',
    '10103',
    '2022/02/07  11:39:28',
  ),
  createDatas(
    '21-14491',
    'JA851A',
    'EXT1',
    '10103',
    '2022/02/07  11:39:28',
  ),
  createDatas(
    '21-14491',
    'JA851A',
    'EXT1',
    '10103',
    '2022/02/07  11:39:28',
  ),
  createDatas(
    '21-14491',
    'JA851A',
    'EXT1',
    '10103',
    '2022/02/07  11:39:28',
  ),
  createDatas(
    '21-14491',
    'JA851A',
    'EXT1',
    '10103',
    '2022/02/07  11:39:28',
  ),
  
];

// 出庫済
function createDataModal(
  id: string,
  ACNO: string,
  Date: number,
  EmPloyee: string,
  Taskcard: string,
  Status: string,
) {
  return { id, ACNO, Date, EmPloyee, Taskcard, Status };
}

const rowsModal = [
  createDataModal(
    '21-14478',
    'JA851A',
    '2022/02/07',
    '10079',
    'N/R-00192',
    '差戻し',
  ),
  
];

export default function Parts() {
  // Dialog Memo
  const [openSearch, setOpenSearch] = React.useState(false);

  const handleClickOpenSearch = () => {
    setOpenSearch(true);
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
  };
  // END Dialog Memo

  // Dialog MEMO
  const [openMemo, setOpenMemo] = React.useState(false);

  const handleClickOpenMemo = () => {
    setOpenMemo(true);
  };

  const handleCloseMemo = () => {
    setOpenMemo(false);
  };
  // END Dialog MEMO

  // Dialog
  const [openView, setOpenView] = React.useState(false);

  const handleClickOpenView = () => {
    setOpenView(true);
  };

  const handleCloseView = () => {
    setOpenView(false);
  };
  // END Dialog

  //menu
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const [anchorEl4, setAnchorEl4] = React.useState<null | HTMLElement>(null);
  const open4 = Boolean(anchorEl4);
  const handleClick4 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  //end menu

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
    <Box sx={{
          width: '100%',}}>
      <Grid container spacing={0} sx={{ p:1  }}>
        <Grid item xs={12} sx={{ justifyContent:"flex-end", textAlign:"right" }}>
          <Link  href="/part_supply_department/part_supply_department" sx={cssLink}>
            <img src="../part-order/setting.png" width="36" height="36" />
          </Link>
        </Grid>
      {/*Frame 1*/}
        <Grid container spacing={0}>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  width: 300,
                  height: 90,
                },
              }}
            >
              <Paper elevation={3} sx={{ p:1 }}>
                <Grid container spacing={0}>
                  <Typography sx={{ color:'#325381' }}>
                    出庫登録 :
                  </Typography>
                </Grid>
                <Grid container spacing={0} sx={{ mt:1 }}>
                  <Grid item xs={8}>
                    <CssTextField size="small" placeholder="ID 出庫済" fullWidth/>
                  </Grid>
                  <Grid item xs={4} sx={cssAlignCenter}>
                    <Button variant="contained" sx={{ width:'90%', backgroundColor: '#325381', ml:1 }}>
                      <Typography sx={cssbtnColor}>登録</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  width: 300,
                  height: 90,
                },
              }}
            >
              <Paper elevation={3} sx={{ p:1 }}>
                <Grid container spacing={0}>
                  <Typography sx={{ color:'#325381' }}>
                    差戻し登録 :
                  </Typography>
                </Grid>
                <Grid container spacing={0} sx={{ mt:1 }}>
                  <Grid item xs={8}>
                    <CssTextField size="small" placeholder="ID 差戻し" fullWidth/>
                  </Grid>
                  <Grid item xs={4} sx={cssAlignCenter}>
                    <Button variant="contained" sx={{ width:'90%', backgroundColor: '#325381', ml:1  }}>
                      <Typography sx={cssbtnColor}>登録</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  width: 300,
                  height: 90,
                },
              }}
            >
              <Paper elevation={3} sx={{ p:1 }}>
                <Grid container spacing={0}>
                  <Typography sx={{ color:'#325381' }}>
                    STS確認
                  </Typography>
                </Grid>
                <Grid container spacing={0} sx={{ mt:1 }}>
                  <Grid item xs={8}>
                    <CssTextField size="small" placeholder="ID STS確認" fullWidth/>
                  </Grid>
                  <Grid item xs={4} sx={cssAlignCenter}>
                    <Button variant="contained" sx={{ width:'90%', backgroundColor: '#325381', ml:1  }}>
                      <Typography sx={cssbtnColor}>登録</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  width: 300,
                  height: 90,
                },
              }}
            >
              <Paper elevation={3} sx={{ p:1 }}>
                <Grid container spacing={0}>
                  <Typography sx={{ color:'#325381' }}>
                    Parts Number 検索
                  </Typography>
                </Grid>
                <Grid container spacing={0} sx={{ mt:1 }}>
                  <Grid item xs={8}>
                    <CssTextField size="small" placeholder="P/N 検索" fullWidth/>
                  </Grid>
                  <Grid item xs={4} sx={cssAlignCenter}>
                    <Button variant="contained" sx={{ width:'90%', backgroundColor: '#325381', ml:1  }}>
                      <Typography sx={cssbtnColor}>登録</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  width: 300,
                  height: 90,
                },
              }}
            >
              <Paper elevation={3} sx={{ p:1, }}>
                <Grid container spacing={0} sx={{ mt:3 }}>
                  <Grid item xs={8} sx={{ color:"#325381", display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Typography sx={{ color:"#325381"}}>ANA部品在庫情報更新</Typography>
                  </Grid>
                  <Grid item xs={4} sx={cssAlignCenter}>
                    <Button variant="contained" sx={{ width:'90%', backgroundColor: '#325381', ml:1  }}>
                      <Typography sx={cssbtnColor}>登録</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      {/*End Frame 1*/}

      {/*Data*/}
        <Grid container sx={{ p:1 }}>
          <Grid item xs={6.5} sx={{ p:1 }}>
            <Typography sx={{ color:'#325381', fontSize:20 }}>
              <strong>Receive Order (送信済)</strong>
            </Typography>
            <Grid sx={{ p:1, border:'2px solid #42B130', borderRadius:4 }}>
              <TableContainer component={Paper}>
                 <Table sx={{ minWidth: 650 }} size="small" stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>
                        <Typography  sx={cssSearchData}>
                          <strong>ID</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>AC No.</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>Task Card</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>Zone</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>EMP</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>送信日時</strong>
                        </Typography>
                      </TableCell>
                   
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell>
                          <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                          >
                            <MoreVertIcon style={{ color: '#9C9C9C', }} />
                          </Button>
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              'aria-labelledby': 'basic-button',
                            }}
                            sx={{ ml:4, '.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper':{boxShadow:'0px 3px 10px 0px rgba(0,0,0,0.12)'} }}
                          >
                            <MenuItem onClick={handleClickOpenSearch}><Typography sx={cssMenu} >View</Typography></MenuItem>
                            <MenuItem onClick={handleClickOpenMemo}><Typography sx={cssMenu} >印刷</Typography></MenuItem>
                          </Menu>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.id}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.AC}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.taskCard}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.Zone}</strong>
                          </Typography>
                        </TableCell>
                         <TableCell>
                        <Typography sx={cssSearchData}>
                            <strong>{row.EMP}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.Date}</strong>
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

              </TableContainer>
            </Grid>
          </Grid>

          <Grid item xs={5.5} sx={{ p:1 }}>
            <Typography sx={{ color:'#325381', fontSize:20 }}>
              <strong>出庫済</strong>
            </Typography>
            
            <Grid sx={{ p:1, border:'2px solid #FFE500', borderRadius:4 }}>
              <TableContainer component={Paper}>
                 <Table sx={{ minWidth: 650 }} size="small" stickyHeader aria-label="sticky table" fullWidth>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>
                        <Typography  sx={cssSearchData}>
                          <strong>ID</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>AC No.</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>Zone</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>EMP</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>送信日時</strong>
                        </Typography>
                      </TableCell>
                   
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows2.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell>
                          <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                          >
                            <MoreVertIcon style={{ color: '#9C9C9C', }} />
                          </Button>
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl1}
                            open={open1}
                            onClose={handleClose1}
                            MenuListProps={{
                              'aria-labelledby': 'basic-button',
                            }}
                            sx={{ ml:4,}}
                          >
                            <MenuItem><Typography sx={cssMenu} >View</Typography></MenuItem>
                          </Menu>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.id}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.ACNO}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.Zone1}</strong>
                          </Typography>
                        </TableCell>
                         <TableCell>
                        <Typography sx={cssSearchData}>
                            <strong>{row.EMP1}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.Date}</strong>
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

              </TableContainer>
            </Grid>

            <Typography sx={{ color:'#325381', fontSize:20, mt:2 }}>
              <strong>受領済</strong>
            </Typography>

            <Grid sx={{ p:1, border:'2px solid #8000FF', borderRadius:4 }}>
              <TableContainer component={Paper}>
                 <Table sx={{ minWidth: 650 }} size="small" stickyHeader aria-label="sticky table" fullWidth>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>
                        <Typography  sx={cssSearchData}>
                          <strong>ID</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>AC No.</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>Zone</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>EMP</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>送信日時</strong>
                        </Typography>
                      </TableCell>
                   
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows2.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell>
                          <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                          >
                            <MoreVertIcon style={{ color: '#9C9C9C', }} />
                          </Button>
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl2}
                            open={open2}
                            onClose={handleClose2}
                            MenuListProps={{
                              'aria-labelledby': 'basic-button',
                            }}
                            sx={{ ml:4,}}
                          >
                            <MenuItem><Typography sx={cssMenu} >View</Typography></MenuItem>
                          </Menu>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.id}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.ACNO}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.Zone1}</strong>
                          </Typography>
                        </TableCell>
                         <TableCell>
                        <Typography sx={cssSearchData}>
                            <strong>{row.EMP1}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.Date}</strong>
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

              </TableContainer>
            </Grid>

            <Typography sx={{ color:'#325381', fontSize:20, mt:2 }}>
              <strong>差戻し</strong>
            </Typography>
            <Grid sx={{ p:1, border:'2px solid #FF0000', borderRadius:4 }}>
              <TableContainer component={Paper}>
                 <Table sx={{ minWidth: 650 }} size="small" stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>
                        <Typography  sx={cssSearchData}>
                          <strong>ID</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>AC No.</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>Zone</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>EMP</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>送信日時</strong>
                        </Typography>
                      </TableCell>
                   
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows2.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell>
                          <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                          >
                            <MoreVertIcon style={{ color: '#9C9C9C', }} />
                          </Button>
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl3}
                            open={open3}
                            onClose={handleClose3}
                            MenuListProps={{
                              'aria-labelledby': 'basic-button',
                            }}
                            sx={{ ml:4,}}
                          >
                            <MenuItem><Typography sx={cssMenu} >View</Typography></MenuItem>
                          </Menu>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.id}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.ACNO}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.Zone1}</strong>
                          </Typography>
                        </TableCell>
                         <TableCell>
                        <Typography sx={cssSearchData}>
                            <strong>{row.EMP1}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.Date}</strong>
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

              </TableContainer>
            </Grid>

          </Grid>
        </Grid>
      {/*End Data*/}
       
             {/*Dialog memo 2*/}
     <Dialog open={openSearch} onClose={handleCloseSearch} maxWidth="xl">
        <DialogTitle sx={{ py: 4, px: 0 }}>
          <BootstrapDialogTitle sx={{ py: 1, px: 2 }} id="customized-dialog-title" onClose={handleCloseSearch}> 
            <Grid container spacing={2} sx={{ pb:4 }}>
              <Grid item xs={7} md={9}>
                <CardMedia
                  sx={{ width: { xs: 150, md: 222} , height: { xs: 40, md: 58}}}
                  image="../part-order/anal_1.png"
                  title="ANA"
                />
              </Grid>
              <Grid item xs={5} md={3} sx={{ position: 'relative' }}>  
                <Link href="#">
                  <Typography sx={cssMro2}>
                    <Button variant="contained" sx={{ width:'55%', fontSize:13,backgroundColor: '#325381' }} onClick={handleClickOpenView}>
                      <img src="../part-order/change.png" width="25" height="25" /><Typography sx={{ color:'#FFFFFF', fontSize:13, ml:1}}>差戻しの取消し (送信済)</Typography>
                    </Button>
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>  
                <Link href="#">
                  <Typography sx={cssMro2}>
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
                color: '#325381',
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
                   <Typography sx={{ fontSize : '12px', color: '#325381' }}>Note : 　① 　A/C-No. = Aircraft Registration No./ 機体登録　No.</Typography>
                   <Typography sx={{ fontSize : '12px', ml: '50px', color: '#325381' }}>②　RSN. = Reason Code / 部品消費理由コード (TC = MR TASK CARD / EO = EO 作業 / TR = TRP / RC = Discrepancy Repair 不具合修復 / MQ = Maintenance Quality 作業品質関連 / OT = Other その他)</Typography>          
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography sx={{ fontSize : '12px', textAlign: 'right', mt: 2, color: '#325381' }}>MRO Japan Form - SD - 004C</Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt : '5px', pb:'5px' }}>
                  <Grid item xs={12}>
                    <Typography sx={{ fontSize : '14px', mt: 2, color: '#325381' }}>補給コメント</Typography>
                    <TextField
                      multiline
                      rows={4}
                      variant="outlined"
                      placeholder="出庫済み資村がありますので、そちらを使用願いします"
                      fullWidth
                      InputLabelProps={{style: {fontSize: '14px', color: '#325381'}}}
                      inputProps={{style: {fontSize: '13px'}}}
                    />
                  </Grid>
                </Grid>   
              </Paper>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    {/*----------End Dialog memo2----------*/}

      {/*Dialog*/}
     <Dialog open={openView} onClose={handleCloseView} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle sx={{ py: 1, px: 2 }} id="customized-dialog-title" onClose={handleCloseView}> 
                  <Typography sx={{ color:"#325381" }}>
                    [差戻し]　→　[削除]　変更登録
                  </Typography>
          </BootstrapDialogTitle>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                color: '#325381',
                '& > :not(style)': {
                  width: 1100,
                  height: 500,
                  ml:2,
                  mr:1,
                },
              }}
            >
              
                <TableContainer component={Paper}>
                  <Divider />
                  <Table sx={{ minWidth: 650 }} size="small" stickyHeader aria-label="sticky table">

                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography  sx={cssSearchData}>
                          <strong>ID</strong>
                        </Typography><Divider orientation="vertical" flexItem />
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>AC No.</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>Zone</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>EMP</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>送信日時</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={cssSearchData}>
                          <strong>送信日時</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsModal.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.id}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.ACNO}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.Date}</strong>
                          </Typography>
                        </TableCell>
                         <TableCell>
                        <Typography sx={cssSearchData}>
                            <strong>{row.EmPloyee}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.Taskcard}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.Status}</strong>
                          </Typography>

                        </TableCell>
                        <TableCell>
                          <Link href="" sx={{cusor:'pointer'}}>
                            <img src="../home/delete.png" width="20" height="20"/>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

              </TableContainer>
 
         
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    {/*----------End Dialog----------*/}

    {/*Dialog memo*/}
     <Dialog open={openMemo} onClose={handleCloseMemo} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseMemo}> 
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
                </Grid>
              </Paper>
            </Box>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    {/*----------End Dialog memo----------*/}
      </Grid>
    </Box>
  </div>
  );
}