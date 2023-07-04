import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';

//Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//Select
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

//Dialog
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


//Stack
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// DatePicker
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//Radio
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function createData(
    col1: string,
    col2: string,
    col3: string,
    col4: string,
    col5: string,
    col6: string,
    col7: string,
    col8: string,
    col9: string,
    col10: string
) {
    return { col1, col2, col3, col4, col5, col6, col7, col8, col9, col10 };
}
function createData2(
    col1: string,
    col2: string,
    col3: string,
    col4: string,
    col5: string,
    col6: string,
    col7: string,
    col8: string,
    col9: string,
    col10: string
) {
    return { col1, col2, col3, col4, col5, col6, col7, col8, col9, col10 };
}
const rows = [
    createData('', '', 'SPR21-1474', '10023866', 'JA219A', '', 'N/R-00027', 'MAM', '中川', '2022/02/01'),
    createData('', '', 'SPR21-1474', '10023866', 'JA219A', '', 'N/R-00027', 'MAM', '中川', '2022/02/01'),
    createData('', '', 'SPR21-1474', '10023866', 'JA219A', '', 'N/R-00027', 'MAM', '中川', '2022/02/01'),
    createData('', '', 'SPR21-1474', '10023866', 'JA219A', '', 'N/R-00027', 'MAM', '中川', '2022/02/01')
];
const rows2 = [
    createData2('1', 'TAAI3 - 03 PE00-01', 'SEAT CAP', 'AE', 'EA', '', '2022/02/08', '0', '', ''),
    createData2('1', 'TAAI3 - 03 PE00-01', 'SEAT CAP', 'AE', 'EA', '', '2022/02/08', '0', '', ''),
    createData2('1', 'TAAI3 - 03 PE00-01', 'SEAT CAP', 'AE', 'EA', '', '2022/02/08', '0', '', ''),
    createData2('1', 'TAAI3 - 03 PE00-01', 'SEAT CAP', 'AE', 'EA', '', '2022/02/08', '0', '', ''),
    createData2('1', 'TAAI3 - 03 PE00-01', 'SEAT CAP', 'AE', 'EA', '', '2022/02/08', '0', '', '')
];


// CSS
const mainTable = {
    backgroundColor: '#F8F8F8',
    boxShadow: 'none', 
    'tbody td, thead th': {
        position: 'relative',
        color: '#325381',
        fontSize: '12px',
        textAlign: 'center',
        '&:after': {
            content: `''`,
            position: 'absolute',
            backgroundColor: '#D9D9D9',
            width: '1px',
            height: '70%',
            right: '0',
            top: '0',
            bottom: '0',
            marginY: 'auto'
        }
    },
    'tbody td:last-child, thead th:last-child': {
        '&:after': {
            display: 'none'
        }
    }
}
const mainTable2 = {
    backgroundColor: '#F8F8F8',
    boxShadow: 'none', 
    'thead th': {
        padding: '5px',
        height: '60px',
        fontWeight: 'bold',
        fontSize: '15px'
    },
    'tbody td, thead th': {
        position: 'relative',
        color: '#325381',
        fontSize: '15px',
        textAlign: 'center',
        '&:after': {
            content: `''`,
            position: 'absolute',
            backgroundColor: '#D9D9D9',
            width: '1px',
            height: '70%',
            right: '0',
            top: '0',
            bottom: '0',
            marginY: 'auto'
        },
    },
    'tbody td:last-child, thead th:last-child': {
        '&:after': {
            display: 'none'
        }
    },
    'tbody tr:last-child td': {
        borderBottom: 'none'
    }, 
}
const mainTable3 = {
    backgroundColor: '#F8F8F8',
    boxShadow: 'none', 
    'tbody td, thead th': {
        position: 'relative',
        color: '#325381',
        fontSize: '12px',
        textAlign: 'center',
        paddingY: '5px', 
        '&:after': {
            content: `''`,
            position: 'absolute',
            backgroundColor: '#D9D9D9',
            width: '1px',
            height: '70%',
            right: '0',
            top: '0',
            bottom: '0',
            marginY: 'auto'
        },
        '.css-ahj2mt-MuiTypography-root': {
            fontSize: '12px'
        }
    },
    'tbody td:last-child, thead th:last-child': {
        '&:after': {
            display: 'none'
        }
    }
}
const mainDialog = {
    '.css-ypiqx9-MuiDialogContent-root': {
        padding: '30px 50px', 
    }, 
    '.css-tm6vhc-MuiGrid-root': {
        position: 'relative', 
        '.css-4enqgj': {
            position: 'absolute',
            bottom: '-25px',
            right: '20px'
        }
    }  
}
const mainBoxTable = {
    color: '#325381', 
    fontSize: '13px',
    backgroundColor: '#F8F8F8',
    padding: '10px 0 10px 30px'
}
const mainBoxValidate = {
    color: '#DE0606',
    fontSize: '11px',
    textAlign: 'right',
    marginTop: '10px', 
    paddingRight: '20px'
}
const mainBoxInfo = {
    color: '#325381', 
    fontSize: '13px',
    padding: '0 0 16px 30px',
    borderBottom: '1px solid #E3E3E3'
}

// Stack
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#F8F8F8',
    padding: theme.spacing(1),
    textAlign: 'center',
  }));
const stackTable = {
    '.css-ctpqxb-MuiPaper-root:first-child': {
        width: '430px', 
        color: '#325381', 
        fontSize: '13px'
    },
    '.css-ctpqxb-MuiPaper-root:last-child': {
        width: 'calc(100% - 430px)', 
        textAlign: 'left',
        paddingLeft: '50px', 
        '&:after': {
            display: 'none'
        }
    },
    '.css-ctpqxb-MuiPaper-root': {
        boxShadow: 'none', 
        position: 'relative',
        '&:after': {
            content: `''`,
            position: 'absolute',
            backgroundColor: '#D9D9D9',
            width: '1px',
            height: '70%',
            right: '0',
            top: '0',
            bottom: '0',
            marginY: 'auto'
        }
    }
}

// DatePicker
const datePicker = {
    minWidth: '150px !important', 
    width: '150px !important', 
    marginRight: '20px',
    'input': {
        color: '#325381',
        fontSize: '13px',
        order: '2' 
    }, 
    '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: 0,
    },
}

//Radio
const radioMain = {
    justifyContent: 'center'
}

const btnTable1 = { color: '#325381', backgroundColor: '#FFFFFF', borderRadius: '4px', p: '2px 8px', marginRight: '5px', minWidth: 0, borderColor: 'rgba(0,0,0,0.25)', textTransform: 'none' };
const text1 = {color: '#325381', fontSize: '20px'}
const text2 = {color: '#325381', fontSize: '25px'}
const text3 = {color: '#325381', fontSize: '13px'}

    
//Dialog
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

export default function SPR() {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };


    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Box sx={{ color: '#325381', my: 2, mx: 2 }}>
                <Grid container spacing={2} sx={{ marginBottom: '10px' }}>
                    <Grid item xs={9}>
                        <Typography>
                            <strong>SPR (Shortage Parts Report) Ver.2</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ textAlign: 'left' }} >
                        <Typography sx={{ marginBottom: '10px' }}>
                            <strong>WO:</strong>
                        </Typography>
                        <Box>
                            <FormControl sx={{ textAlign: 'center', marginRight: '5px', minWidth: 200 }} size="small">
                                <Select
                                    value={age}
                                    label="10024280"
                                    onChange={handleChange}
                                    displayEmpty
                                >
                                    <MenuItem value={10024280}>10024280</MenuItem>
                                    <MenuItem value={10024281}>10024281</MenuItem>
                                    <MenuItem value={10024282}>10024282</MenuItem>
                                </Select>
                            </FormControl>
                            <Button variant="contained" sx={{ paddingX: '30px' }} className="bg-blue-800">全て表示</Button>
                        </Box>
                    </Grid>
                </Grid>
                <TableContainer component={Paper} sx={mainTable}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: "22%" }}>SPR</TableCell>
                                <TableCell style={{ width: "13%" }}>資材出庫要求伝票</TableCell>
                                <TableCell style={{ width: "9%" }}>No.</TableCell>
                                <TableCell style={{ width: "8%" }}>Wo</TableCell>
                                <TableCell style={{ width: "8%" }}>AC</TableCell>
                                <TableCell style={{ width: "8%" }}>SPR NO</TableCell>
                                <TableCell style={{ width: "8%" }}>TaskCard</TableCell>
                                <TableCell style={{ width: "8%" }}>Zone</TableCell>
                                <TableCell style={{ width: "8%" }}>ISSUED BY</TableCell>
                                <TableCell style={{ width: "8%" }}>DATE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.col1}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>
                                        <span style={{ marginRight: '5px' }}>1</span>
                                        <Button onClick={handleClickOpen} sx={btnTable1} variant="outlined">
                                            <img src="../spr/icon-edit.svg" style={{ marginRight: '3px' }} width="20" height="20" />
                                            修正
                                        </Button>
                                        <Button sx={btnTable1} variant="outlined">
                                            <img src="../spr/icon-view.svg" style={{ marginRight: '3px' }} width="20" height="20" />
                                            View
                                        </Button>
                                        <Button sx={btnTable1} variant="outlined">
                                            <img src="../spr/icon-pdf.svg" style={{ marginRight: '3px' }} width="20" height="20" />
                                            PDF
                                        </Button>
                                        <Button sx={btnTable1} variant="outlined">
                                            <img src="../spr/icon-print.svg" style={{ marginRight: '3px' }} width="20" height="20" />
                                            Print
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button sx={btnTable1} variant="outlined">
                                            <img src="../spr/icon-pdf.svg" style={{ marginRight: '3px' }} width="20" height="20" />
                                            PDF
                                        </Button>
                                        <Button sx={btnTable1} variant="outlined">
                                            <img src="../spr/icon-print.svg" style={{ marginRight: '3px' }} width="20" height="20" />
                                            Print
                                        </Button>
                                    </TableCell>
                                    <TableCell>{row.col3}</TableCell>
                                    <TableCell>{row.col4}</TableCell>
                                    <TableCell>{row.col5}</TableCell>
                                    <TableCell>{row.col6}</TableCell>
                                    <TableCell>{row.col7}</TableCell>
                                    <TableCell>{row.col8}</TableCell>
                                    <TableCell>{row.col9}</TableCell>
                                    <TableCell>{row.col10}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                fullWidth 
                maxWidth="xl" 
                sx={mainDialog}
            >
                <DialogTitle>
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}> 
                        <Grid container spacing={0} sx={{ marginBottom: '10px' }}>
                            <Grid item xs={6}>
                                <Typography sx={text1}>
                                    <strong>SPR 修正</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'right' }} >
                                <Button variant="contained" sx={{ paddingX: '30px' }} className="bg-blue-800">N/R Task Data 更新</Button>
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: 'center' }} >
                                <img src="../logo.png" width="174" height="35"/>
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: 'center' }} >
                                <Typography sx={text2}>
                                    <strong>SHORTAGE PARTS REPORT (SPR)</strong>
                                </Typography>
                            </Grid>
                        </Grid>
                    </BootstrapDialogTitle>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} sx={{ marginBottom: '10px' }}>
                        <Grid item xs={12} sx={{ textAlign: 'right' }}>
                            <Typography sx={text3}>
                                Issue date : 2023/05/19
                            </Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <TableContainer component={Paper} sx={mainTable2}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ width: "430px" }}>A/C No.</TableCell>
                                            <TableCell>DOCK No.</TableCell>
                                            <TableCell>SPR No.</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                JA219A
                                            </TableCell>
                                            <TableCell>
                                                DOCK-2
                                            </TableCell>
                                            <TableCell>
                                                
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item xs={5} sx={{ textAlign: 'center' }} >
                            <TableContainer component={Paper} sx={mainTable2}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ width: "22%" }}>ZONE</TableCell>
                                            <TableCell style={{ width: "13%" }}>
                                                Issued By <br /> 発行者
                                            </TableCell>
                                            <TableCell style={{ width: "9%" }}>
                                                Confirmed By <br /> 確認者
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                JA219A
                                            </TableCell>
                                            <TableCell>
                                                DOCK-2
                                            </TableCell>
                                            <TableCell>
                                                
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: 'right', marginTop: '5px' }}>
                            <Stack direction="row" spacing={0} sx={stackTable}>
                                <Item>
                                    Dock - in Period <br/>
                                    (yyyy/mm/dd - yyyy/mm/dd) <br/>
                                    ドックイン期間
                                </Item>
                                <Item>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker sx={datePicker} defaultValue={dayjs('2022/02/06')} />
                                    </LocalizationProvider>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker sx={datePicker} defaultValue={dayjs('2022/02/09')}/>
                                    </LocalizationProvider>
                                </Item>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: 'left', marginTop: '5px' }}>
                            <Box sx={mainBoxTable}>
                                Requested part  要求部品
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ marginTop: '5px' }}>
                            <TableContainer component={Paper} sx={mainTable3}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>No.</TableCell>
                                            <TableCell>PARTS No.</TableCell>
                                            <TableCell>NOMEN</TableCell>
                                            <TableCell colSpan={2}>Q’ty / Unit</TableCell>
                                            <TableCell>IPC No. DWG No</TableCell>
                                            <TableCell>Request Date <br/> 入手希望日</TableCell>
                                            <TableCell>Stock Qty <br/> 願客在庫数</TableCell>
                                            <TableCell>Account <br/> 口座の有無</TableCell>
                                            <TableCell>Other Stock <br/> 海外在庫の有無</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rows2.map((row) => (
                                        <TableRow key={row.col1}>
                                            <TableCell>
                                                {row.col1}
                                            </TableCell>
                                            <TableCell>
                                                {row.col2}
                                            </TableCell>
                                            <TableCell>
                                                {row.col3}
                                            </TableCell>
                                            <TableCell>
                                                {row.col4}
                                            </TableCell>
                                            <TableCell>
                                                {row.col5}
                                            </TableCell>
                                            <TableCell>
                                                {row.col6}
                                            </TableCell>
                                            <TableCell>
                                                {row.col7}
                                            </TableCell>
                                            <TableCell>
                                                {row.col8}
                                            </TableCell>
                                            <TableCell>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                    sx={radioMain}
                                                >
                                                    <FormControlLabel value="有" control={<Radio size="small"/>} label="有"/>
                                                    <FormControlLabel value="無" control={<Radio size="small"/>} label="無"/>
                                                </RadioGroup>
                                            </TableCell>
                                            <TableCell>
                                                <RadioGroup
                                                        row
                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                        name="row-radio-buttons-group"
                                                        sx={radioMain}
                                                    >
                                                        <FormControlLabel value="有" control={<Radio size="small"/>} label="有"/>
                                                        <FormControlLabel value="無" control={<Radio size="small"/>} label="無"/>
                                                    </RadioGroup>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Box sx={mainBoxValidate}>
                                選択の削除はキーボードの[Delete]
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: 'left', marginTop: '5px' }}>
                            <Box sx={mainBoxInfo}>
                                N/R No :   ANA-12030006 
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: 'left' }}>
                            <Box sx={mainBoxInfo}>
                                Defects details 不具合内容: COND AND EXPIRATION DATE CK - LIFE VESTS
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: 'left' }}>
                            <Box sx={mainBoxInfo}>
                                Remarks  備考 :
                            </Box>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    );
}