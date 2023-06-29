import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const cssBorderTable = { 'td, th': { border: 1, borderColor: '#D9D9D9', borderBottom: 0, py: 1, height: '55px' } };
const colorText = '#325381';

export default function NotDetectiveProduct() {
  const [age, setAge] = React.useState(10024280);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
  <div>
    <Box sx={{ color: colorText, my: 2 , mx: 2}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>
            <strong>良品票添付台紙</strong>
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography>
            <strong>WO:</strong>
          </Typography>
        </Grid>

        <Grid item xs={6}>
           <FormControl sx={{ minWidth: 250, backgroundColor: '#F5F5F5' }} size="small">
            <Select
              value={age}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ color : colorText, textAlign: 'center' }}
            >              
              <MenuItem value={10024280}>10024280</MenuItem>
              <MenuItem value={10024281}>10024281</MenuItem>
              <MenuItem value={10024282}>10024282</MenuItem>
            </Select>
          </FormControl>
          <Button sx={{ ml: 2, backgroundColor: colorText }} variant="contained">全て表示</Button>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'right' }}>
         <Button sx={{backgroundColor: colorText }} variant="contained" startIcon={<LibraryAddIcon />}>新規作成</Button>
        </Grid>


        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{backgroundColor: '#F5F5F5'}}>
                  <TableCell sx={{ color: colorText, fontWeight: 700, width: 280 }} align="center">Create Date</TableCell>
                  <TableCell sx={{ color: colorText, fontWeight: 700 }} align="center">Wo No.</TableCell>
                  <TableCell sx={{ color: colorText, fontWeight: 700 }} align="center">Date</TableCell>
                  <TableCell sx={{ color: colorText, fontWeight: 700 }} align="center">Name</TableCell>
                  <TableCell sx={{ color: colorText, fontWeight: 700 }} align="center">TC/NRTC No.</TableCell>
                  <TableCell sx={{ color: colorText, fontWeight: 700 }} align="center">Rotable</TableCell>
                  <TableCell sx={{ color: colorText, fontWeight: 700 }} align="center">Print</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow
                    sx={cssBorderTable}
                  >
                    <TableCell sx={{ color: colorText }} align="left">
                    <Button sx={{ mr: 2 }} variant="outlined" startIcon={<RemoveRedEyeOutlinedIcon />}>View</Button>
                    2023/04/25 11:43:43
                    </TableCell>
                    <TableCell sx={{ color: colorText }} align="center">10024285</TableCell>
                    <TableCell sx={{ color: colorText }} align="center">2023/04/25</TableCell>
                    <TableCell sx={{ color: colorText }} align="center">Name</TableCell>
                    <TableCell sx={{ color: colorText }} align="center">TC/NRTC No.</TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText, textAlign: 'right' }} align="center">
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={cssBorderTable}
                  >
                    <TableCell sx={{ color: colorText }} align="left"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center">&nbsp;</TableCell>
                  </TableRow>
                  <TableRow
                    sx={cssBorderTable}
                  >
                    <TableCell sx={{ color: colorText }} align="left"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center">&nbsp;</TableCell>
                  </TableRow>
                  <TableRow
                    sx={cssBorderTable}
                  >
                    <TableCell sx={{ color: colorText }} align="left"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center">&nbsp;</TableCell>
                  </TableRow>
                  <TableRow
                    sx={cssBorderTable}
                  >
                    <TableCell sx={{ color: colorText }} align="left"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center">&nbsp;</TableCell>
                  </TableRow>
                  <TableRow
                    sx={cssBorderTable}
                  >
                    <TableCell sx={{ color: colorText }} align="left"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center">&nbsp;</TableCell>
                  </TableRow>
                  <TableRow
                    sx={cssBorderTable}
                  >
                    <TableCell sx={{ color: colorText }} align="left"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center">&nbsp;</TableCell>
                  </TableRow>
                  <TableRow
                    sx={cssBorderTable}
                  >
                    <TableCell sx={{ color: colorText }} align="left"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center"></TableCell>
                    <TableCell sx={{ color: colorText }} align="center">&nbsp;</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid> 

      </Grid>
    </Box>
  </div>
  );
}