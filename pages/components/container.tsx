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
  boxShadow:'none',
}));

const ItemIcon = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow:'10',
}));

export const mainContainer = (
<React.Fragment>
<div>
    <Grid container spacing={1}>
      <Grid item xs={12}>
      	<Box sx={{ width: '100%', height: '100vh'}} backgroundColor="#FFFFFF">
		      <Paper
		      	elevation={0}
	          sx={{
	          	mt:1,
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

	        <Grid item xs={12} sx={{ mt:4, ml:4, mr:4 }}>
	        	<Typography color="#3A5075" >
            	<strong>PARTS</strong>
	          </Typography>
	          <Divider sx={{ my: 1}} />
		 			</Grid>

		 			<Grid item xs={12} sx={{ ml:4, mr:4 }}>
		 				<Grid item xs={12} sx={{ ml:4, mr:4 }}>
		          <Grid container spacing={2}>
		            <Grid item xs={6} md={1}>
							    <Item>
							    		<Grid>
								    		<Item>
								    			<Typography color="#3A5075" sx={{ textDecoration: 'underline', fontSize:13 }}>
							            	<strong>Parts Order</strong>
								          </Typography>
								    		</Item>
								    		<ItemIcon>
												  <Avatar
													 	src="icon/PC/individual.png"
														sx={{
														p:1,
														width: 70,
														height: 70,
														}}
												  />
													<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 12, mb:1 }}>
														Parts Order
													</Typography>
											
								    		</ItemIcon>
							    		</Grid>
							    </Item>
							  </Grid>
							  <Grid item xs={6} md={1}>
							    <Item>
							    		<Grid>
								    		<Item>
								    			<Typography color="#3A5075" sx={{ textDecoration: 'underline', fontSize:13 }}>
							            	<strong>Parts Order</strong>
								          </Typography>
								    		</Item>
								    		<ItemIcon>
												  <Avatar
													 	src="icon/PC/individual.png"
														sx={{
														p:1,
														width: 70,
														height: 70,
														}}
												  />
													<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 12, mb:1 }}>
														Parts Order
													</Typography>
											
								    		</ItemIcon>
							    		</Grid>
							    </Item>

							  </Grid>
							  <Grid item xs={12} md={4}>
							    <Item>xs=6 md=8</Item>
							  </Grid>
							  <Grid item xs={6} md={2}>
							    <Item>xs=6 md=4</Item>
							  </Grid>
							  <Grid item xs={6} md={1}>
							    <Item>xs=6 md=4</Item>
							  </Grid>
							</Grid>

						</Grid>
		 			</Grid>

		    </Box>
 			</Grid>
    </Grid>
</div>
</React.Fragment>
);