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

import Parts from './parts';
import WorkOrder from './work-order';
import Tools from './tools';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow:'none',
}));
// dọc
const ItemTitle = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  
  textAlign: 'left',
  marginLeft:8,
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.text.secondary,
  boxShadow:'none',
}));
// ngang
const ItemRow = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  color: theme.palette.text.secondary,
  boxShadow:'none',
}));

const ItemFrame = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2, 
  width:85,
  height:80,
  marginRight:10,
  boxShadow:'10',
  [theme.breakpoints.up('sm')]: {
          width: 112,
          height:121,
          marginRight:10,
          padding: theme.spacing(0),
				  textAlign: 'center',
				  color: theme.palette.text.secondary,
				  borderRadius: '10px',
				  boxShadow:'0px 0px 10px rgba(0, 0, 0, 0.2)',
        },
}));

const ItemAvatar = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2, 
  width:50,
  height:50,
  margin: 'auto',
  boxShadow:'none',
  [theme.breakpoints.up('sm')]: {
          width: 70,
          height:70,
          padding: theme.spacing(0),
          margin: 'auto',
				  textAlign: 'center',
				  color: theme.palette.text.secondary,
				  boxShadow:'none',
        },
}));

const ItemText = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2, 
  width:75,
  height:20,
  margin: 'auto',
  boxShadow:'none',
  [theme.breakpoints.up('sm')]: {
          width: 112,
          height:50,
          padding: theme.spacing(1),
				  textAlign: 'center',
				  color: theme.palette.text.secondary,
				  boxShadow:'none',
        },
}));


export const mainContainer = (
<React.Fragment>
<div>
	<Box>
    <Grid container spacing={1}>
      <Grid item xs={12}>
      	<Box sx={{ width: '100%', height: '100%',overflow: 'auto'}} backgroundColor="#FFFFFF">
		      <Paper
		      	elevation={0}
	          sx={{
	            p: 2,
	            display: 'flex',
	            flexDirection: 'column',
	            height: 160,
	          }}
	        >
				    <Paper
				    	elevation={0}
				    	sx={{
				    	  p:2,
				    	  mt:2,
				    	  ml:1,
				    	  mr:1,
				    	  height: 120,
				    	  borderRadius: 4,
				    	  backgroundColor: '#f5f5f5' }}>

			    	  	<Typography color="#3A5075" sx={{ textDecoration: 'underline' }}>
					      <strong>お知らせ</strong>
					    	</Typography>

					    <Typography 
					    	color="#3A5075"
					    	sx={{ mt:2 }}>
					      <strong>●</strong> Announcement of new business strategy changes applied throughout the company
					    </Typography>
				    </Paper>
	        </Paper>
	        {/*PARTS*/}
	        <Grid item xs={12} sx={{ mt:4, ml:4, mr:4 }}>
	        	<Typography color="#3A5075" >
            	<strong>PARTS</strong>
	          </Typography>
	          <Divider sx={{ my: 1}} />
		 			</Grid>
		 			<Parts />

		 			{/*WORK ORDER*/}
		 			<Grid item xs={12} sx={{ mt:2, ml:4, mr:4 }}>
	        	<Typography color="#3A5075" >
            	<strong>WORK ORDER</strong>
	          </Typography>
	          <Divider sx={{ my: 1}} />
		 			</Grid>
		 			<WorkOrder />

		 			{/*TOOLS*/}
		 			<Grid item xs={12} sx={{ mt:2, ml:4, mr:4 }}>
	        	<Typography color="#3A5075" >
            	<strong>TOOLS</strong>
	          </Typography>
	          <Divider sx={{ my: 1}} />
		 			</Grid>
		 			<Tools />
		    </Box>
 			</Grid>
    </Grid>
  </Box>
</div>
</React.Fragment>
);