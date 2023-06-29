import * as React from 'react';
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

export default function Parts() {
  //menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
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
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
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
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
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
      </Grid>
    </Box>
  </div>
  );
}