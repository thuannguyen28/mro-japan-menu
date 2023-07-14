import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';

//Virtualized List
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

//Dialog
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// CSS
const text__title1 = {
    textTransform: 'uppercase',
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign: 'center'
}
const text__title2Center = {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center'
}
const text__title2Left = {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'left'
}

//BoxItem
const boxItem = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '118px',
    border: '2px solid #00000040',
    borderRadius: '5px',
    position: 'relative',
    '&:after': {
        content: `''`,
        position: 'absolute',
        backgroundColor: '#D9D9D9',
        width: '5px',
        height: '83px',
        right: '0',
        left: '0',
        bottom: '-83px',
        marginX: 'auto'
    },
}
const boxItem2 = {
    position: 'relative',
    '.css-0': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '92px',
        border: '2px solid #00000040',
        borderRadius: '5px',
        position: 'absolute',
        right: '0',
        left: '0',
        top: '-85px',
        marginX: 'auto',
        '&:before': {
            content: `''`,
            position: 'absolute',
            backgroundColor: '#D9D9D9',
            width: '76%',
            height: '5px',
            left: '-76%',
        },
        '&:after': {
            content: `''`,
            position: 'absolute',
            backgroundColor: '#D9D9D9',
            width: '76%',
            height: '5px',
            right: '-76%',
        },
    }
}
const boxLetter = {
    width: '100%',
    height: '319px',
    border: '3px solid #00C2FF',
    borderRadius: '5px',
    paddingX: '30px',
    position: 'relative',
    '.css-477asx-MuiTypography-root': {
        position: 'absolute',
        top: '-35px',
        left: '0',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    '&:after': {
        content: `''`,
        position: 'absolute',
        backgroundColor: '#D9D9D9',
        width: '5px',
        height: '81px',
        right: '0',
        left: '0',
        bottom: '-84px',
        marginX: 'auto'
    },
    'li': {
        borderBottom: '1px solid #9C9C9C',
        paddingX: '0',
    },
    'li .css-ftiju0-MuiButtonBase-root-MuiListItemButton-root': {
        paddingY: '0',
        marginY: '0'
    }
}
const boxLetter2 = {
    width: '100%',
    height: '319px',
    border: '3px solid #CC00FF',
    borderRadius: '5px',
    position: 'relative',
    '.css-477asx-MuiTypography-root': {
        position: 'absolute',
        top: '-35px',
        left: '0',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    '&:after': {
        content: `''`,
        position: 'absolute',
        backgroundColor: '#D9D9D9',
        width: '5px',
        height: '81px',
        right: '0',
        left: '0',
        bottom: '-84px',
        marginX: 'auto'
    },
}
const boxLetter3 = {
    width: '100%',
    height: '319px',
    border: '3px solid #70FF00',
    borderRadius: '5px',
    position: 'relative',
    '.css-477asx-MuiTypography-root': {
        position: 'absolute',
        top: '-35px',
        left: '0',
        fontSize: '20px',
        fontWeight: 'bold',
    }
}
const boxLetter3__line = {
    width: '100%',
    height: '319px',
    border: '3px solid #70FF00',
    borderRadius: '5px',
    position: 'relative',
    '.css-477asx-MuiTypography-root': {
        position: 'absolute',
        top: '-35px',
        left: '0',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    '&:after': {
        content: `''`,
        position: 'absolute',
        backgroundColor: '#D9D9D9',
        width: '5px',
        height: '81px',
        right: '0',
        left: '0',
        bottom: '-84px',
        marginX: 'auto'
    },
}
const boxLetter4 = {
    width: '100%',
    height: '319px',
    border: '3px solid #FFD600',
    borderRadius: '5px',
    position: 'relative',
    '.css-477asx-MuiTypography-root': {
        position: 'absolute',
        top: '-35px',
        left: '0',
        fontSize: '20px',
        fontWeight: 'bold',
    }
}
const boxLetter5 = {
    width: '100%',
    height: '319px',
    border: '3px solid #FF5C00',
    borderRadius: '5px',
    position: 'relative',
    '.css-477asx-MuiTypography-root': {
        position: 'absolute',
        top: '-35px',
        left: '0',
        fontSize: '20px',
        fontWeight: 'bold',
    }
}

//Divider
const boxDivider = {
    display: 'flex',
    alignItems: 'center',
    color: '#325381',
    fontSize: '20px',
    '.MuiBox-root': {
        width: '100%',
        '.css-1puturl-MuiDivider-root:before, .css-1puturl-MuiDivider-root:after ': {
            borderTop: '5px solid #D9D9D9'
        }
    }
}

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

export default function tools_order() {
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
                <Grid container spacing={2} sx={{ marginBottom: '30px' }}>
                    <Grid item xs={12}>
                        <Typography>
                            <strong>夜間定例作業 事前準備</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={text__title1}>
                            <strong>PARTS</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Typography sx={text__title1}>
                            <strong>TOOL</strong>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={0} sx={{ marginBottom: '81px' }}>
                    <Grid item xs={4}>
                        <Box sx={boxItem}>
                            <img src="../icon/icon-email.png" style={{ marginRight: '3px' }} width="68" height="68" />
                            <Typography sx={text__title2Center}>
                                ➀ 事前調査不要の連絡
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
                <Grid container spacing={0} sx={{ marginBottom: '81px' }}>
                    <Grid item xs={4}>
                        <Box sx={boxItem}>
                            <img src="../icon/icon-email.png" style={{ marginRight: '3px' }} width="68" height="68" />
                            <Typography sx={text__title2Center}>
                                ➀ 事前調査不要の連絡
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sx={ boxDivider }>
                        <Box>
                            <Divider>
                                <Chip label="夜間定例計面書を入手 (13:00)" />
                            </Divider>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={boxItem}>
                            <img src="../icon/icon-email.png" style={{ marginRight: '3px' }} width="68" height="68" />
                            <Typography sx={text__title2Center}>
                                ➀ 事前調査不要の連絡
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={0} sx={{ marginBottom: '81px' }}>
                    <Grid item xs={4}>
                        <Box sx={boxLetter}>
                            <Typography sx={text__title2Left}>保存中 (Mail末送信)</Typography>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary={`View`} />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText primary={`23-01580`} />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText primary={`2023/06/19`} />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText primary={`20015`} />
                                </ListItemButton>
                                <ListItemButton>
                                    <img src="../icon/icon-delete.svg" style={{ marginRight: '3px' }} width="20" height="20" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary={`View`} />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText primary={`23-01580`} />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText primary={`2023/06/19`} />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText primary={`20015`} />
                                </ListItemButton>
                                <ListItemButton>
                                    <img src="../icon/icon-delete.svg" style={{ marginRight: '3px' }} width="20" height="20" />
                                </ListItemButton>
                            </ListItem>
                        </Box>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Box sx={boxLetter}>
                            <Typography sx={text__title2Left}>保存中 (Mail末送信)</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={0} sx={{ marginBottom: '81px' }}>
                    <Grid item xs={4}>
                        <Box sx={boxItem}>
                            <img src="../icon/icon-email.png" style={{ marginRight: '3px' }} width="68" height="68" />
                            <Typography sx={text__title2Center}>
                                ② 補給に調査依頼する (13:00 ~ 14:30)
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Box sx={boxItem}>
                            <img src="../icon/icon-email.png" style={{ marginRight: '3px' }} width="68" height="68" />
                            <Typography sx={text__title2Center}>
                                ② 補給に調査依頼する (13:00 ~ 14:30)
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={0} sx={{ marginBottom: '81px' }}>
                    <Grid item xs={4}>
                        <Box sx={boxLetter2}>
                            <Typography sx={text__title2Left}>調査票送信済</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Box sx={boxLetter2}>
                            <Typography sx={text__title2Left}>調査票送信済</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={0} sx={{ marginBottom: '81px' }}>
                    <Grid item xs={4}>
                        <Box sx={boxLetter3__line}>
                            <Typography sx={text__title2Left}>要求済</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={boxItem2}>
                            <Box>
                                <img src="../icon/icon-email.png" style={{ marginRight: '3px' }} width="68" height="68" />
                                <Typography sx={text__title2Center}>
                                    ➀ 事前調査不要の連絡
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={boxLetter3}>
                            <Typography sx={text__title2Left}>要求済</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={0} sx={{ marginBottom: '81px' }}>
                    <Grid item xs={4}>
                        <Box sx={boxLetter4}>
                            <Typography sx={text__title2Left}>出庫経済＆受領済</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>
                <Grid container spacing={0} sx={{ marginBottom: '81px' }}>
                    <Grid item xs={4}>
                        <Box sx={boxLetter5}>
                            <Typography sx={text__title2Left}>キャンセル</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={boxLetter5}>
                            <Typography sx={text__title2Left}>キャンセル</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>

        // <Dialog
        // fullScreen={fullScreen}
        // open={open}
        // onClose={handleClose}
        // aria-labelledby="responsive-dialog-title"
        // fullWidth 
        // maxWidth="xl" 
        // sx={mainDialog}
        // >
        // <DialogTitle>
        //     <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}> 
        //         <Grid container spacing={0} sx={{ marginBottom: '10px' }}>
        //             <Grid item xs={6}>
        //                 <Typography sx={text1}>
        //                     <strong>SPR 修正</strong>
        //                 </Typography>
        //             </Grid>
        //             <Grid item xs={6} sx={{ textAlign: 'right' }} >
        //                 <Button variant="contained" sx={{ paddingX: '30px' }} className="bg-blue-800">N/R Task Data 更新</Button>
        //             </Grid>
        //             <Grid item xs={12} sx={{ textAlign: 'center' }} >
        //                 <img src="../logo.png" width="174" height="35"/>
        //             </Grid>
        //             <Grid item xs={12} sx={{ textAlign: 'center' }} >
        //                 <Typography sx={text2}>
        //                     <strong>SHORTAGE PARTS REPORT (SPR)</strong>
        //                 </Typography>
        //             </Grid>
        //         </Grid>
        //     </BootstrapDialogTitle>
        // </DialogTitle>
        // <DialogContent>
        // </DialogContent>
        // </Dialog>
    );
}