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
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

//checkBox
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

//ToggleButton
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F5F5F5',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow:'none'
}));
// css
const cssRight = { display:'flex', justifyContent:'right' ,alignItems:'right' };
const cssMR = { mr:4 };
const cssSearchData = { fontSize:16,color:'#325381', textAlign:'center' };
const cssTextModal ={ fontSize:16, ml:4, pt:2, pb:2 };
const cssTextTable ={ fontSize:16, pt:2, pb:2 };
const cssTextTableDevide ={ fontSize:16, pt:2, pb:2, borderBottom:'1px solid #E0E0E0' };
const cssText ={ fontSize:16, ml:4, pt:1, pb:1 };
const cssTextRight ={ fontSize:16, ml:4, pt:1, pb:1, mr:4 };
const cssTable={height:56, width:'100%', textAlign:'center'};
const cssTableDevide={height:56, width:'100%', textAlign:'center', borderBottom:'1px solid #E0E0E0',};

// ccs
const cssAlignCenter = { display:'flex', justifyContent:'center',textAlign:'center' };
const cssbtnColor = { color:'#FFFFFF', fontSize:13 };
const cssLink = { textDecoration: 'none', color: 'inherit' };
const cssMro = { width: '100%', color: '#325381', textAlign: 'right', fontSize: '13px', position: 'absolute', right: 0, bottom: 0 };
const cssOder = { width: '100%', textAlign: 'right', fontSize: '12px', fontWeight: 700, mb: '5px' };
const cssBox = { background : '#F5F5F5', px: 1, py: 1, borderRadius: '5px'};
const font12 = { fontSize: '12px'};
const font12Center = { fontSize: '12px', textAlign: 'center' };
const cssBox2 = { background : '#F5F5F5', px: 1, py: '19px', borderRadius: '5px'};
const cssMro2 = { color:'#325381', fontSize: '13px', textAlign:'right' };
const cssBox5 = { background : '#F5F5F5', px: 1, py: '19px', borderRadius: '5px'};

export default function Parts() {
  //ToggleButton
  const [alignment, setAlignment] = React.useState('all');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  // Dialog information
  const [openInformation, setOpenInformation] = React.useState(false);

  const handleClickOpenInformation = () => {
    setOpenInformation(true);
  };

  const handleCloseInformation = () => {
    setOpenInformation(false);
  };
  // END Dialog information

  // Dialog MEMO
  const [openMemo, setOpenMemo] = React.useState(false);

  const handleClickOpenMemo = () => {
    setOpenMemo(true);
  };

  const handleCloseMemo = () => {
    setOpenMemo(false);
  };
  // END Dialog MEMO

  // Dialog Detail
  const [openDetail, setOpenDetail] = React.useState(false);

  const handleClickOpenDetail = () => {
    setOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };
  // END Dialog MEMO

  return (
  <div>
    <Box sx={{
          width: '100%',}}>
      <Grid container spacing={0} sx={{ pl:8, pt:4, pr:4  }}>
        <Grid item xs={3}>
          <Typography color="#325381" >
            <strong>WO</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="#325381" sx={{ml:2}} >
            <strong>Zone</strong>
          </Typography>
        </Grid>
        <Grid item xs={3} sx={cssRight}>
          <Button variant="contained" sx={{ width:150, fontSize:11,backgroundColor: '#325381' }} onClick={handleClickOpenInformation}>
            <img src="../taskcard/reset.png" width="20" height="20" /><Typography sx={{ color:'#FFFFFF', fontSize:12, ml:1}}>データ更新</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={0} sx={{ pl:8, pr:4,pt:1  }}>
        <Grid item xs={3}>
          <Box sx={{ width: '80%' }}>
            <Stack spacing={2}>
              <Item>
                <Typography color="#325381" >
                  <strong>10024280</strong>
                </Typography>
              </Item>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6}>
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>

                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Start"
                  labelPlacement="start"
                  sx={cssMR}
                />

                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Start"
                  labelPlacement="start"
                  sx={cssMR}
                />

                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Start"
                  labelPlacement="start"
                  sx={cssMR}
                />

                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Start"
                  labelPlacement="start"
                  sx={cssMR}
                />

                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Start"
                  labelPlacement="start"
                  sx={cssMR}
                />

                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Start"
                  labelPlacement="start"
                  
                />
              </FormGroup>
            </FormControl>
        </Grid>
        <Grid item xs={3} sx={cssRight}>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            size="small"
          >
            <ToggleButton value="All" sx={{width:120}}><img src="../taskcard/all.png" width="27" height="24" /> All</ToggleButton>
            <ToggleButton value="android" sx={{width:120}}><img src="../taskcard/open.png" width="27" height="24" /> Open</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>

      <Grid container spacing={0}>
        <Box sx={{
                width: '100%',
                height:700,
                m:2,
                border:'2px solid #E0E0E0',
                borderRadius:2
              }}>
            <Grid container spacing={0} sx={{ p:2 }}>
              <Grid item xs={6}>
                <Typography color="#325381" >
                  <strong>Task Card Status (All)</strong>
                </Typography>
              </Grid>
              <Grid item xs={6} sx={cssRight}>
                <Button variant="contained" sx={{ width:150, backgroundColor: '#325381' }}>
                  <Typography sx={{ color:'#FFFFFF', fontSize:13,}}>Exports (.xlsx)</Typography>
                </Button>
              </Grid>
            </Grid>

            <TableContainer component={Paper} sx={{ boxShadow:'none' }}>
                 <Table sx={{ minWidth: 650, mt:2 }} size="small" stickyHeader aria-label="sticky table">
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.id}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.NR}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.PE}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.NRS}</strong>
                          </Typography>
                        </TableCell>
                         <TableCell>
                        <Typography sx={cssSearchData}>
                            <strong>{row.INT}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.OPEN}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.AOG}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Link onClick={handleClickOpenDetail} sx={{ cursor:'pointer' }}>
                          {row.IMG}
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

              </TableContainer>

        </Box>
      </Grid>

    </Box>
    {/*Dialog information*/}
     <Dialog open={openInformation} onClose={handleCloseInformation} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseInformation}> 
            <Grid container spacing={0} sx={{ p:2 }}>
              <Grid item xs={6}>
                <Typography color="#325381" >
                  <strong>資村要求出庫伝票情報</strong>
                </Typography>
              </Grid>
              <Grid item xs={6} sx={cssRight}>
                <Button variant="contained" sx={{ width:150, backgroundColor: '#325381' }} onClick={handleClickOpenMemo}>
                  <Typography sx={{ color:'#FFFFFF', fontSize:13,}}>伝票詳細</Typography>
                </Button>
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
                  width: 1100,
                  height: 500,
                  ml:2,
                  mr:1,
                },
              }}
            >
              <Paper elevation={0}>
                <Table size="small" stickyHeader aria-label="sticky table">
                  <TableBody>
                    {rows1.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell sx={{ pt:3 }}>
                          <Typography sx={cssSearchData}>
                            <strong>{row.id}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.Received}</strong>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={cssSearchData}>
                            <strong>{row.NR}</strong>
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
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

               
              </Paper>
            </Box>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    {/*----------End Dialog information----------*/}

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

    {/*Dialog Detail*/}
     <Dialog open={openDetail} onClose={handleCloseDetail} maxWidth="xl">
        <DialogTitle>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseDetail}> 
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Typography color="#325381" sx={{ fontSize:24 }} >
                  <strong>Task Card Detail</strong>
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
                  width: 1250,
                  height: 600,
                  ml:2,
                  mr:1,
                },
              }}
            >
              <Paper elevation={0}>
                  <Grid container spacing={0} sx={{ border:'1px solid #C9C9C9', backgroundColor:"#D6DDE7" }}>
                    <Grid item xs={2.5} sx={{ borderRight:'1px solid #C9C9C9' }}>
                      
                      <Typography color="#325381" sx={cssTextModal} >
                        <strong>10024280</strong>
                      </Typography>
                    </Grid>

                    <Grid item xs={4} sx={{ borderRight:'1px solid #C9C9C9' }}>
                      <Typography color="#325381" sx={cssTextModal} >
                        <strong>ANA-20033474</strong>
                      </Typography>
                    </Grid>

                    <Grid item xs>
                      <Typography color="#325381" sx={cssTextModal} >
                        <strong>EXAMINE - CONNECTORS AND BACKSHELLS</strong>
                      </Typography>
                    </Grid>
                  </Grid>
                {/*table 1*/}
                  <Grid container spacing={0} sx={{ border:'1px solid #E0E0E0', }}>
                    <Grid item xs={2.5}>
                      <Grid container>
                        <Grid item xs={12} sx={cssTable}>
                          <Typography color="#325381" sx={cssTextTable} >
                            1
                          </Typography>      
                        </Grid>
                        <Grid item xs={12} sx={cssTable}>
                          <Typography color="#325381" sx={cssTextTable} >
                            GCM
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography color="#325381" sx={cssTextModal} >
                        EXAMINE - CONNECTORS AND BACKSHELLS 1.
                        Do a prepare per AMM Bulletin 24-NE001, 3 
                        Procedures, paragrah A and B.
                      </Typography>
                    </Grid>

                    <Grid item xs>
                      <Grid container>
                        <Grid item xs={8}>
                        </Grid>
                        <Grid item xs={4}>
                          <Grid container>
                            <Grid item xs={12} sx={cssTable}>           
                            </Grid>
                            <Grid item xs={12} sx={cssTable}>
                              <Typography color="#325381" sx={cssTextTable} >
                                1.0
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                {/*End table 1*/}

                {/*table 2*/}
                  <Grid container spacing={0}>
                    <Grid item xs={2.5} sx={{ borderRight:'1px solid #E0E0E0', borderLeft:'1px solid #E0E0E0' }}>
                      <Grid container>
                        <Grid item xs={12} sx={cssTable}>
                          <Typography color="#325381" sx={cssTextTableDevide} >
                            2
                          </Typography>      
                        </Grid>
                        <Grid item xs={12} sx={cssTable}>
                          <Typography color="#325381" sx={cssTextTable} >
                            ECM
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography color="#325381" sx={cssTextModal} >
                        EXAMINE - CONNECTORS AND BACKSHELLS 1.
                        Do a prepare per AMM Bulletin 24-NE001, 3 
                        Procedures, paragrah A and B.
                      </Typography>
                    </Grid>

                    <Grid item xs>
                      <Grid container>
                        <Grid item xs={8} sx={{ borderRight:'1px solid #E0E0E0' }}>
                        </Grid>
                        <Grid item xs={4} sx={{ borderRight:'1px solid #E0E0E0' }}>
                          <Grid container>
                            <Grid item xs={12} sx={cssTableDevide}>          
                            </Grid>
                            <Grid item xs={12} sx={cssTable}>
                              <Typography color="#325381" sx={cssTextTable} >
                                2.0
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                {/*End table 2*/}

                {/*table 3*/}
                  <Grid container spacing={0} sx={{ border:'1px solid #E0E0E0', }}>
                    <Grid item xs={2.5}>
                      <Grid container>
                        <Grid item xs={12} sx={cssTable}>
                          <Typography color="#325381" sx={cssTextTable} >
                            3
                          </Typography>      
                        </Grid>
                        <Grid item xs={12} sx={cssTable}>
                          <Typography color="#325381" sx={cssTextTable} >
                            GSYOP
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography color="#325381" sx={cssTextModal} >
                        EXAMINE - CONNECTORS AND BACKSHELLS 1.
                        Do a prepare per AMM Bulletin 24-NE001, 3 
                        Procedures, paragrah A and B.
                      </Typography>
                    </Grid>

                    <Grid item xs>
                      <Grid container>
                        <Grid item xs={8}>
                        </Grid>
                        <Grid item xs={4}>
                          <Grid container>
                            <Grid item xs={12} sx={cssTable}>           
                            </Grid>
                            <Grid item xs={12} sx={cssTable}>
                              <Typography color="#325381" sx={cssTextTable} >
                                9.0
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                {/*End table 3*/}
               
                {/*table 3*/}
                  <Grid container spacing={0} sx={{ border:'1px solid #E0E0E0', borderTop:'none',}}>
                    <Grid item xs={2.5}>
                      <Grid container>
                        <Grid item xs={12} sx={cssTable}>
                          <Typography color="#325381" sx={cssTextTable} >
                            4
                          </Typography>      
                        </Grid>
                        <Grid item xs={12} sx={cssTable}>
                          <Typography color="#325381" sx={cssTextTable} >
                            W/M
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography color="#325381" sx={cssTextModal} >
                        EXAMINE - CONNECTORS AND BACKSHELLS 1.
                        Do a prepare per AMM Bulletin 24-NE001, 3 
                        Procedures, paragrah A and B.
                      </Typography>
                    </Grid>

                    <Grid item xs>
                      <Grid container>
                        <Grid item xs={8}>
                        </Grid>
                        <Grid item xs={4}>
                          <Grid container>
                            <Grid item xs={12} sx={cssTable}>           
                            </Grid>
                            <Grid item xs={12} sx={cssTable}>
                              <Typography color="#325381" sx={cssTextTable} >
                                1.0
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                {/*End table 3*/}
              </Paper>
            </Box>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    {/*----------End Dialog Detail----------*/}

  </div>
  );
}


function createData(
  id: number,
  NR: string,
  PE: string,
  NRS: string,
  INT: string,
  OPEN: string,
  AOG: string,
  IMG: image,
) {
  return { id, NR, PE, NRS, INT, OPEN, AOG, IMG };
}

const rows = [
  createData(
    '1',
    'N/R-00054',
    'PEEL OFF-CELCRO, I/A COMPT INSIDE E/C SEAT',
    'N/R-00054',
    'INT',
    'OPEN',
    'AOG',
    <img src="../taskcard/product1.png" width="28" height="28" />
  ),

  createData(
    '2',
    'N/R-00054',
    'PEEL OFF-CELCRO, I/A COMPT INSIDE E/C SEAT',
    'N/R-00054',
    'INT',
    'OPEN',
    'AOG',
    <img src="../taskcard/product1.png" width="28" height="28" />
  ),

  createData(
    '3',
    'N/R-00054',
    'PEEL OFF-CELCRO, I/A COMPT INSIDE E/C SEAT',
    'N/R-00054',
    'INT',
    'OPEN',
    'AOG',
    <img src="../taskcard/product2.png" width="28" height="28" />
  ),
  
];



function createDataModal(
  id: string,
  Received: string,
  NR: string,
  Date: string,
  EmPloyee: string,
) 
{
  return { id, Received, NR, Date, EmPloyee };
}

const rows1 = [
  createDataModal(
    '21-14253',
    '受領済',
    'N/R-00094',
    '2022/02/03',
    '70093',
  ),
  createDataModal(
    '21-14253',
    '受領済',
    'N/R-00094',
    '2022/02/03',
    '70093',
  ),
  createDataModal(
    '21-14253',
    '受領済',
    'N/R-00094',
    '2022/02/03',
    '70093',
  ),
];