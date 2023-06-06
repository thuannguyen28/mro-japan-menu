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
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const mainContainer = (
<React.Fragment>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper
          sx={{
          	mt:4,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 200,
          }}
        >
	      
    	    <Typography color="black" sx={{ textAlign: 'right', marginLeft: 'auto', mr:2}} >
		      	<strong>Hello Admind</strong>
		    	</Typography>
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
      </Grid>

      <Grid item xs={12}>
        <Grid item xs={12}>
        	<Grid item xs={12}>
             <Container maxWidth="" sx={{ bgcolor: '#FFFFFF',p:2 }}>
		       	  <Grid container spacing={3}>
		       	  	{/* PARTS */}
		       	  	<Grid item xs={12} md={8} lg={12}>
	                <Typography color="#3A5075">
			            	<strong>PARTS</strong>
				          </Typography>
			          	<Divider sx={{ my: 1 }} />
              	</Grid>
              	{/* order part */}     	
              		<Parts />
		       	  </Grid>
		     		</Container>
        	</Grid>
        	<Grid item xs={12}>
             <Container maxWidth="" sx={{ bgcolor: '#FFFFFF',p:2}}>
		       	  <Grid container spacing={3}>
		       	  	{/* PARTS */}
		       	  	<Grid item xs={12} md={8} lg={12}>
	                <Typography color="#3A5075">
			            	<strong>WORK ORDER</strong>
				          </Typography>
			          	<Divider sx={{ my: 1 }} />
              	</Grid>
              	{/* order part */}     	
              		<WorkOrder />
		       	  </Grid>
		     		</Container>
        	</Grid>

        	<Grid item xs={12}>
             <Container maxWidth="" sx={{ bgcolor: '#FFFFFF',p:2 }}>
		       	  <Grid container spacing={3}>
		       	  	{/* PARTS */}
		       	  	<Grid item xs={12} md={8} lg={12}>
	                <Typography color="#3A5075">
			            	<strong>TOOLS</strong>
				          </Typography>
			          	<Divider sx={{ my: 1 }} />
              	</Grid>
              	{/* order part */}     	
              		<Tools />
		       	  </Grid>
		     		</Container>
        	</Grid>
    	</Grid>
    </Grid>

    

    </Grid>
</React.Fragment>
);