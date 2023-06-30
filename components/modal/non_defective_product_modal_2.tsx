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

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import Divider from '@mui/material/Divider';

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
        padding: '8.5px 14px'
    }, 
    '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: 0,
        backgroundColor: 'transparent'
    },
}

export default function NotDetectiveProductModal() {
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
	                    <FormControlLabel sx={{ display: 'flex', '.MuiFormControlLabel-label': { fontSize: '14px' } }} control={<Checkbox defaultChecked />} label="Rotable :" labelPlacement="top" />
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

                  <Grid container spacing={1} sx={{ mt: 4 }}>
	                  <Grid item xs={4.75}>
	                  	<Typography sx={{ fontSize: '14px', mx: 2, mt: 1 }}>Serviceable Tag 添付台紙</Typography>
	                  </Grid>
	                  <Grid item xs={7.25}>
	                  	<FormControlLabel sx={{ ml: 2, display: 'flex', '.MuiFormControlLabel-label': { width: '100%', fontSize: '14px' } }} control={<TextField sx={{ 'input': { color: colorText ,bgcolor: '#fff', textAlign: 'center', fontSize: '13px' }, '.MuiOutlinedInput-notchedOutline': {border: 'none'} }} fullWidth  size="small" value="" />}/>
	                  </Grid>
	                </Grid>

                  <Grid container spacing={1} sx={{ mt: 1 }}>
	                  <Grid item xs={4.75}>
	                  	<Typography sx={{ fontSize: '14px', mx: 2, mt: 1 }}>Tag Number </Typography>
	                  </Grid>
	                  <Grid item xs={7.25}>
	                  	<FormControlLabel sx={{ ml: 2, display: 'flex', '.MuiFormControlLabel-label': { width: '100%', fontSize: '14px' } }} control={<TextField sx={{ 'input': { color: colorText ,bgcolor: '#fff', textAlign: 'center', fontSize: '13px' }, '.MuiOutlinedInput-notchedOutline': {border: 'none'} }} fullWidth  size="small" value="" />}/>
	                  </Grid>
	                </Grid>

                  <Grid container spacing={1} sx={{ mt: 1 }}>
	                  <Grid item xs={4.75}>
	                  	<Typography sx={{ fontSize: '14px', mx: 2, mt: 1 }}>Tag Number </Typography>
	                  </Grid>
	                  <Grid item xs={7.25}>
	                  	<FormControlLabel sx={{ ml: 2, display: 'flex', '.MuiFormControlLabel-label': { width: '100%', fontSize: '14px' } }} control={<TextField sx={{ 'input': { color: colorText ,bgcolor: '#fff', textAlign: 'center', fontSize: '13px' }, '.MuiOutlinedInput-notchedOutline': {border: 'none'} }} fullWidth  size="small" value="" />}/>
	                  </Grid>
	                </Grid>

                  <Grid container spacing={1} sx={{ mt: 1 }}>
	                  <Grid item xs={4.75}>
	                  	<Typography sx={{ fontSize: '14px', mx: 2, mt: 1 }}>Tag Number </Typography>
	                  </Grid>
	                  <Grid item xs={7.25}>
	                  	<FormControlLabel sx={{ ml: 2, display: 'flex', '.MuiFormControlLabel-label': { width: '100%', fontSize: '14px' } }} control={<TextField sx={{ 'input': { color: colorText ,bgcolor: '#fff', textAlign: 'center', fontSize: '13px' }, '.MuiOutlinedInput-notchedOutline': {border: 'none'} }} fullWidth  size="small" value="" />}/>
	                  </Grid>
	                </Grid>	                

                  <Grid container spacing={1} sx={{ mt: 4 }}>
	                  <Grid item xs={4.75}>
	                  	<FormControlLabel sx={{ display: 'flex', '.MuiFormControlLabel-label': { width: '100%', fontSize: '14px' } }} control={<TextField sx={{ 'input': { color: colorText ,bgcolor: '#fff', textAlign: 'center', fontSize: '13px' }, '.MuiOutlinedInput-notchedOutline': {border: 'none'} }} fullWidth  size="small" value="10024285" />} label="Item :" labelPlacement="top" />
	                  </Grid>
	                  <Grid item xs={7.25}>	                  	
	                  </Grid>
	                  <Grid item xs={3.7}>
	                    <Typography sx={{ fontSize: '14px', mx: 2 }}>Refrence :</Typography>
	                  </Grid>
                    <Grid item xs={8.3}>
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
	                            <Typography sx={{ mt: 1, mx: 2, fontSize: '13px' }}>TC / NRTC No. :</Typography>
	                            <Typography sx={{ mb: '13px', mx: 2, textAlign: 'center', fontSize: '13px' }}>ANA-20145518</Typography>
	                          </Box>
                          </Box>

                        </Grid>
                      </Grid>

                      <Box sx={{ m: 10}}>
                        <Typography sx={{ fontSize: '18px', mt: 12 }}>The number of attached serviceable tags : Total_____sheets</Typography>
                        <Typography sx={{ fontSize: '18px' }}>Tag number : </Typography>
                        <Typography sx={{ fontSize: '18px' }}>Tag number : </Typography>
                        <Typography sx={{ fontSize: '18px' }}>Tag number : </Typography>
                        <Typography sx={{ fontSize: '18px', mt: 5 }}>ITEM 1</Typography>
                        <Typography sx={{ fontSize: '18px' }}>REF : AMM 25-25-100-10</Typography>
                      </Box>
                      <Typography sx={{ pt: 2, my: 1, mx: 2, fontSize: '13px', textAlign: 'right' }}>MRO Japan (REF. C-PN-34210)</Typography>
                    </Box>
                  </Grid>
                </Grid>
	            
	            </Box>
	          </Grid>
          </Grid>
        </DialogContent>
      
    </div>
  );
}