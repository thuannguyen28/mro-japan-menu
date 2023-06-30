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

const colorText = '#325381';
const colorBg = '#F5F5F5';

export default function NotDetectiveProductModal() {
  return (
    <div>

        <DialogContent>
          <Grid container spacing={2}>
	          <Grid item xs={5}>
	           <Box sx={{ bgcolor: colorBg, color: colorText, py : 2, px: 2, pr: 4}}>
	             <Typography>入力</Typography>
	             <Box sx={{ p: 0}}>
	                <Typography sx={{ textAlign: 'right', fontSize: '13px' }}>印刷回数 : 1</Typography>
	                <Grid container spacing={1} sx={{ mt: 1 }}>
	                  <Grid item xs={4.75}>
	                  	<FormControlLabel sx={{ display: 'flex', '.MuiFormControlLabel-label': { width: '100%', fontSize: '14px' } }} control={<TextField fullWidth size="small" />} label="Date (YYYY/MM/DD) :" labelPlacement="top" />
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
	                    <Button sx={{ backgroundColor: colorText, mt: '22px' }} fullWidth variant="contained">写真削除</Button>
	                  </Grid>

	                  <Grid item xs={2.5}>
	                    <Typography sx={{ fontSize: '14px', mx: 2 }}>Refrence :</Typography>
	                  </Grid>
	                  <Grid item xs={2}>
                      <Typography sx={{ color: '#DE0606', fontSize: '14px' }}>最大3行</Typography>
                    </Grid>
                    <Grid item xs={7.5}>
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
	                    <Button sx={{ backgroundColor: colorText, mt: '22px' }} fullWidth variant="contained">写真削除</Button>
	                  </Grid>

	                  <Grid item xs={2.5}>
	                    <Typography sx={{ fontSize: '14px', mx: 2 }}>Refrence :</Typography>
	                  </Grid>
	                  <Grid item xs={2}>
                      <Typography sx={{ color: '#DE0606', fontSize: '14px' }}>最大3行</Typography>
                    </Grid>
                    <Grid item xs={7.5}>
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
	          <Grid item xs={7}>
	            <Box sx={{ bgcolor: colorBg, color: colorText, p: 2}}>
	             <Typography>プレビュー</Typography>
	            </Box>
	          </Grid>
          </Grid>
        </DialogContent>
      
    </div>
  );
}