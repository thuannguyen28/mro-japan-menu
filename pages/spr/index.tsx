import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';



export default function SPR() {


  return (
  <div>
    <Box sx={{ color: '#325381', my: 2 , mx: 2}}>
      <Grid container spacing={2}>
        <Grid item xs={7} md={9}>
          <Typography>
            <strong>SPR (Shortage Parts Report) Ver.2</strong>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </div>
  );
}