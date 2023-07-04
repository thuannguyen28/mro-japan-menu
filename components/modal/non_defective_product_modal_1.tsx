import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import Divider from '@mui/material/Divider';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const colorText = '#325381';
const colorBg = '#F5F5F5';

// DatePicker
const datePicker = {
    'input': {
        color: '#325381',
        fontSize: '13px',
        backgroundColor: '#fff',
        padding: '8.5px 14px',
        paddingLeft: 4,
        order: 2
    },
    '.MuiInputBase-formControl': {
      backgroundColor: '#fff',
    },    
    '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: 0,
    },
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

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
            right: 2,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function NotDetectiveProductModal() {

  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>

        <DialogContent>
          <Grid container spacing={2}>
	          <Grid item xs={5.5}>
	           <Box sx={{ bgcolor: colorBg, color: colorText, py : 2, px: 2, pr: 4}}>
	             <Typography sx={{ fontWeight : 700 }}>入力</Typography>
	             <Box sx={{ p: 0}}>
	                <Typography sx={{ textAlign: 'right', fontSize: '13px' }}>印刷回数 : 1</Typography>
	                <Grid container spacing={1} sx={{ mt: 1 }}>
	                  <Grid item xs={4.75}>
	                  	<FormControlLabel sx={{ display: 'flex', '.MuiFormControlLabel-label': { width: '100%', fontSize: '14px' } }} control={
	                  		<LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker format="YYYY/MM/DD" sx={datePicker} defaultValue={dayjs('2023/04/25')} />
                        </LocalizationProvider>
	                  	} label="Date (YYYY/MM/DD) :" labelPlacement="top" />
	                  </Grid>
	                  <Grid item xs={4.75}>
	                  	<FormControlLabel sx={{ display: 'flex', '.MuiFormControlLabel-label': { width: '100%', fontSize: '14px' } }} control={<TextField sx={{ 'input': { color: colorText ,bgcolor: '#fff', textAlign: 'center', fontSize: '13px' }, '.MuiOutlinedInput-notchedOutline': {border: 'none'} }} fullWidth  size="small" value="中嶋 智加朗" />} label="Name :" labelPlacement="top" />
	                  </Grid>
	                  <Grid item xs={2.5}>
	                    <FormControlLabel sx={{ display: 'flex', '.MuiFormControlLabel-label': { fontSize: '14px' } }} control={<Checkbox />} label="Rotable :" labelPlacement="top" />
	                  </Grid>
	                </Grid>

	                <Grid container spacing={1} sx={{ mt: 1 }}>
	                  <Grid item xs={4.75}>
	                  	<FormControlLabel sx={{ display: 'flex', '.MuiFormControlLabel-label': { width: '100%', fontSize: '14px' } }} control={<TextField sx={{ 'input': { color: colorText ,bgcolor: '#fff', textAlign: 'center', fontSize: '13px' }, '.MuiOutlinedInput-notchedOutline': {border: 'none'} }} fullWidth  size="small" value="10024285" />} label="Wo No. :" labelPlacement="top" />
	                  </Grid>
	                  <Grid item xs={7.25}>
	                  	<FormControlLabel sx={{ display: 'flex', '.MuiFormControlLabel-label': { width: '100%', fontSize: '14px' } }} 
		                  	control={
		                  		<FormControl sx={{ width: '100%', backgroundColor: '#F5F5F5' }} size="small">
								            <Select
								              value={20076170}
								              inputProps={{ 'aria-label': 'Without label' }}
								              sx={{ color : colorText, textAlign: 'center', backgroundColor: '#fff', fontSize: '13px', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
								            >              
								              <MenuItem value={20076170}>ANA-20076170</MenuItem>								             
								            </Select>
							            </FormControl>
						            } 
						            label="TC/NRTC No. :" labelPlacement="top" />
	                  </Grid>
	                </Grid>

	                <Grid container spacing={1} sx={{ mt: 2 }}>

	                  <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 700, mx: 2, fontSize: '13px' }}>PART TAG 1 :</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography sx={{ color: '#DE0606', fontSize: '12px', textAlign: 'right' }}>*PCでTAG写真の追加はできません</Typography>
                    </Grid>

	                  <Grid item xs={4.75}>
	                  	<FormControlLabel sx={{ display: 'flex', '.MuiFormControlLabel-label': { width: '100%', fontSize: '14px' } }} control={<TextField sx={{ 'input': { color: colorText ,bgcolor: '#fff', textAlign: 'center', fontSize: '13px' }, '.MuiOutlinedInput-notchedOutline': {border: 'none'} }} fullWidth  size="small" value="10024285" />} label="Item :" labelPlacement="top" />
	                  </Grid>
	                  <Grid item xs={4.75}>
	                  	<FormControlLabel sx={{ display: 'flex', '.MuiFormControlLabel-label': { width: '100%', fontSize: '14px' } }} control={<TextField sx={{ 'input': { color: colorText ,bgcolor: '#fff', textAlign: 'center', fontSize: '13px' }, '.MuiOutlinedInput-notchedOutline': {border: 'none'} }} fullWidth  size="small" value="ANA-20076170" />} label="Used Qty :" labelPlacement="top" />	                  	
	                  </Grid>
	                  <Grid item xs={2.5}>
	                    <Button onClick={handleClickOpenModal} sx={{ backgroundColor: colorText, mt: '22px' }} fullWidth variant="contained">写真削除</Button>
	                  </Grid>

	                  <Grid item xs={2.7}>
	                    <Typography sx={{ fontSize: '14px', mx: 2 }}>Refrence :</Typography>
	                  </Grid>
	                  <Grid item xs={2}>
                      <Typography sx={{ color: '#DE0606', fontSize: '14px' }}>最大3行</Typography>
                    </Grid>
                    <Grid item xs={7.3}>
                      <Typography sx={{ color: '#00C2FF', fontSize: '14px' }}>過去実績参照</Typography>
                    </Grid>

                    <Grid item xs={12} sx={{  ml: 2  }}>
	                    <TextField
	                      multiline
	                      fullWidth
	                      rows={3}
	                      sx={{ 
	                      	p: 1,
	                      	bgcolor:"#FFF", 
	                      	'& .MuiOutlinedInput-root':{
	                      		p: 0,
	                      	},
	                        '& .MuiOutlinedInput-notchedOutline': {
	                          border: 'none',
	                        },
	                      }}
	                      InputLabelProps={{style: {fontSize: '15px', color: '#325381'}}}
	                      inputProps={{style: {fontSize: '13px'}}}
	                    />
	                  </Grid>
                  </Grid>

                  <Grid container spacing={1} sx={{ mt: 2 }}>

	                  <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 700, mx: 2, fontSize: '13px' }}>PART TAG 2 :</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography sx={{ color: '#DE0606', fontSize: '12px', textAlign: 'right' }}></Typography>
                    </Grid>

	                  <Grid item xs={4.75}>
	                  	<FormControlLabel sx={{ display: 'flex', '.MuiFormControlLabel-label': { width: '100%', fontSize: '14px' } }} control={<TextField sx={{ 'input': { color: colorText ,bgcolor: '#fff', textAlign: 'center', fontSize: '13px' }, '.MuiOutlinedInput-notchedOutline': {border: 'none'} }} fullWidth  size="small" value="10024285" />} label="Item :" labelPlacement="top" />
	                  </Grid>
	                  <Grid item xs={4.75}>
	                  	<FormControlLabel sx={{ display: 'flex', '.MuiFormControlLabel-label': { width: '100%', fontSize: '14px' } }} control={<TextField sx={{ 'input': { color: colorText ,bgcolor: '#fff', textAlign: 'center', fontSize: '13px' }, '.MuiOutlinedInput-notchedOutline': {border: 'none'} }} fullWidth  size="small" value="ANA-20076170" />} label="Used Qty :" labelPlacement="top" />	                  	
	                  </Grid>
	                  <Grid item xs={2.5}>
	                    <Button onClick={handleClickOpenModal} sx={{ backgroundColor: colorText, mt: '22px' }} fullWidth variant="contained">写真削除</Button>
	                  </Grid>

	                  <Grid item xs={2.7}>
	                    <Typography sx={{ fontSize: '14px', mx: 2 }}>Refrence :</Typography>
	                  </Grid>
	                  <Grid item xs={2}>
                      <Typography sx={{ color: '#DE0606', fontSize: '14px' }}>最大3行</Typography>
                    </Grid>
                    <Grid item xs={7.3}>
                      <Typography sx={{ color: '#00C2FF', fontSize: '14px' }}>過去実績参照</Typography>
                    </Grid>

                    <Grid item xs={12} sx={{  ml: 2  }}>
	                    <TextField
	                      multiline
	                      fullWidth
	                      rows={3}
	                      sx={{ 
	                      	p: 1,
	                      	bgcolor:"#FFF", 
	                      	'& .MuiOutlinedInput-root':{
	                      		p: 0,
	                      	},
	                        '& .MuiOutlinedInput-notchedOutline': {
	                          border: 'none',
	                        },
	                      }}
	                      InputLabelProps={{style: {fontSize: '15px', color: '#325381'}}}
	                      inputProps={{style: {fontSize: '13px'}}}
	                    />
	                  </Grid>
                  </Grid>
	             </Box>	
	           </Box>
	          </Grid>
	          <Grid item xs={6.5}>
	            <Box sx={{ bgcolor: colorBg, color: colorText, py : 2, px: 2, pr: 2}}>
	              <Grid container spacing={1}>
	                <Grid item xs={6}>
	                  <Typography sx={{ fontWeight : 700 }}>プレビュー</Typography>
	                </Grid>
	                <Grid item xs={6} sx={{ textAlign: 'right' }}>
	                  <Button sx={{backgroundColor: colorText, minWidth: '120px' }} variant="contained" startIcon={<LibraryAddIcon />}>複製</Button>
	                  <Button sx={{backgroundColor: colorText, minWidth: '120px', ml: 2 }} variant="contained" startIcon={<PrintOutlinedIcon />}>印刷</Button>
	                </Grid>
                </Grid>

                <Grid container spacing={1} sx={{ mt: 1 }}>
                  <Grid item xs={12}>
                    <Box sx={{ color: colorText, border: 1, height: '608px'}}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Typography sx={{ fontWeight : 700, my: 1, mx: 2, fontSize: '13px' }}>Parts TAG 貼付台紙 (Attaching Sheet For Parts Tags)</Typography>
                        </Grid>
                      </Grid>

                      <Grid container spacing={0}>
                        <Grid item xs={7}>
                          <Box sx={{ color: colorText, border: 1, borderLeft: 0, borderRight: 0 }}>
                            <Typography sx={{ my: 1, mx: 2, fontSize: '13px' }}>準備確認(Refernce Document Check)</Typography>
                          </Box>
                          <Box sx={{ color: colorText, border: 0, borderBottom: 1 }}>
                            <Grid container spacing={0}>
                              <Grid item xs={5.5} sx={{ color: colorText, border: 0, borderRight: 1 }}>
                               <Typography sx={{ my: 1, mb: 2, mx: 2, fontSize: '13px' }}>Date (YYYY/MM/DD) :</Typography>
                               <Typography sx={{ mb: 3, mx: 2, textAlign: 'center', fontSize: '13px' }}>2022/02/07</Typography>
                              </Grid>
                              <Grid item xs={6.5}>
                               <Typography sx={{ my: 1, mb: 2, mx: 2, fontSize: '13px' }}>Name :</Typography>
                               <Typography sx={{ mb: 3, mx: 2, textAlign: 'center', fontSize: '13px' }}>中嶋 智加朗</Typography>
                              </Grid>
                            </Grid> 
                           
                          </Box>
                          
                        </Grid>
                        <Grid item xs={5}>
                          <Box sx={{ color: colorText, border: 1, borderRight: 0 }}>
                            <Typography sx={{ mt: 1, mx: 2 , fontSize: '13px'}}>Wo Nop. :</Typography>
                            <Typography sx={{ mb: 2, mx: 2, textAlign: 'center', fontSize: '13px' }}>10023867</Typography>
                            <Box sx={{ color: colorText, border: 0, borderTop: 1 }}>
	                            <Typography sx={{ mb: 4, mt: 1, mx: 2, fontSize: '13px' }}>TC / NRTC No. :</Typography>	                           
	                          </Box>
                          </Box>

                        </Grid>
                      </Grid>

                      <Box sx={{ m: 2, color: colorText, border: 1, height: '170px' }}>
                        <Typography sx={{ my: 8, fontSize: '18px', textAlign: 'center' }}>Parts Tag 1</Typography>
                      </Box>

                      <Box sx={{ m: 2, mt: 5, color: colorText, border: 1, height: '170px' }}>
                        <Typography sx={{ my: 8, fontSize: '18px', textAlign: 'center' }}>Parts Tag 2</Typography>
                      </Box>

                      <Typography sx={{ my: 1, mx: 2, fontSize: '13px', textAlign: 'right' }}>MRO Japan (REF. C-PN-34210)</Typography>

                    </Box>
                  </Grid>
                </Grid>
	            
	            </Box>
	          </Grid>
          </Grid>
        </DialogContent>
	      <BootstrapDialog
	        onClose={handleCloseModal}
	        fullWidth
	        aria-labelledby="customized-dialog-title"
	        open={openModal}
	        maxWidth="md"
	      >
	        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseModal}></BootstrapDialogTitle>
	        <DialogContent>
	          <Grid container spacing={2} sx={{ mt: 2, color: colorText}}>
		          <Grid item xs={1}>
                <Typography sx={{ mx: 2, fontSize: '15px', fontWeight: 700 }}>Item</Typography>
		          </Grid>
		          <Grid item xs={11}>
                <Typography sx={{ mx: 2, fontSize: '15px', fontWeight: 700 }}>REF</Typography>
		          </Grid>
		        </Grid>

		        <Grid container spacing={2} sx={{ mt: 0, color: colorText}}>
		          <Grid item xs={12}>
                <Typography component="div" sx={{ borderRadius: '10px', border: '1px solid #ccc', p: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={1.5}>
                      <Typography component="div" sx={{ borderRadius: '5px', border: '1px solid #ccc', p: 1 }}>
                      1
                      </Typography>
                      <Typography component="div" sx={{ mt: 1 ,borderRadius: '5px', border: '1px solid #ccc', p: 1, textAlign: 'center' }}>
                       <img src="../spr/arrow_left.png"/>
                      </Typography>
                    </Grid>
                    <Grid item xs={10.5}>
                      <Typography component="div" sx={{ borderRadius: '5px', border: '1px solid #ccc', p: 1, height: '92px', fontWeight: 700 }}>
                      REF AMM BULL 10-XE005 ADDITIONAL STORAGE WORK 1
                      </Typography>
                    </Grid>
                  </Grid>
                </Typography>

                <Typography component="div" sx={{ borderRadius: '10px', border: '1px solid #ccc', p: 2, mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={1.5}>
                      <Typography component="div" sx={{ borderRadius: '5px', border: '1px solid #ccc', p: 1 }}>
                      1
                      </Typography>
                      <Typography component="div" sx={{ mt: 1 ,borderRadius: '5px', border: '1px solid #ccc', p: 1, textAlign: 'center' }}>
                       <img src="../spr/arrow_left.png"/>
                      </Typography>
                    </Grid>
                    <Grid item xs={10.5}>
                      <Typography component="div" sx={{ borderRadius: '5px', border: '1px solid #ccc', p: 1, height: '92px', fontWeight: 700 }}>
                      REF AMM BULL 10-XE005 ADDITIONAL STORAGE WORK 1
                      </Typography>
                    </Grid>
                  </Grid>
                </Typography>                
		          </Grid>		          
		        </Grid>
		      </DialogContent>  
	      </BootstrapDialog>
    </div>
  );
}