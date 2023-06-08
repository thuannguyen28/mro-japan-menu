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

export default function WorkOrder() {
  return (
   	<Grid item xs={12} sx={{  mr:4 }}>
 				<Grid item xs={12} sx={{ ml:4, mr:4 }}>
          <Grid container spacing={2}>
            <Grid item xs={7} md={2} sx={{ mr:2}}>
					    <Item>
					    	<ItemTitle>
					    		<Typography color="#3A5075" sx={{ textDecoration: 'underline', fontSize: 13 }}>
							      <strong>Task Card</strong>
							    </Typography>
					    	</ItemTitle>
						    <ItemRow>
						    	<ItemFrame>
						    		<ItemAvatar>
						    			<Avatar
						    				sx={{ 
													p:1, 
													mr:1, 
													width: { xs: 56, md: 80 }, 
													height: { xs: 56, md: 80 } 
												}}
											 	src="icon/PC/parts supply.png"/>
						    		</ItemAvatar>
						    		<ItemText>
						    			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 11 }}>
												Task Card Status
											</Typography>
						    		</ItemText>
						    	</ItemFrame>	    	
						    	<ItemFrame>
						    		<ItemAvatar>
						    			<Avatar
						    				sx={{ 
													p:1, 
													mr:1, 
													width: { xs: 56, md: 80 }, 
													height: { xs: 56, md: 80 } 
												}}
											 	src="icon/Mobile/confirm 4.png"/>
						    		</ItemAvatar>
						    		<ItemText>
						    			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 11 }}>
												N/R Task Card Status
											</Typography>
						    		</ItemText>
						    	</ItemFrame>	

					    	</ItemRow>
					    </Item>
					  </Grid>
					  <Grid item xs={4} md={2}>
					    <Item>
					    	<ItemTitle>
					    		<Typography color="#3A5075" sx={{ textDecoration: 'underline', fontSize: 13 }}>
							      <strong>Line Maintenance</strong>
							    </Typography>
					    	</ItemTitle>
						    <ItemRow>
						    	<ItemFrame>
						    		<ItemAvatar>
						    			<Avatar
						    				sx={{ 
													p:1, 
													mr:1, 
													width: { xs: 56, md: 80 }, 
													height: { xs: 56, md: 80 } 
												}}
											 	src="icon/Mobile/document 3.png"/>
						    		</ItemAvatar>
						    		<ItemText>
						    			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 11 }}>
												LINE定例作業
											</Typography>
						    		</ItemText>
						    	</ItemFrame>	    	
					    	</ItemRow>
					    </Item>
					  </Grid>
					</Grid>

				</Grid>
 			</Grid>
  );
}