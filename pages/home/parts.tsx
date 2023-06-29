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
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';

const cssLink = { textDecoration: 'none', color: 'inherit' };

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
  width:77,
  height:80,
  marginRight:5,
  marginBottom:10,
  boxShadow:'0px 0px 10px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.up('sm')]: {
          width: 112,
          height:121,
          marginRight:20,
          padding: theme.spacing(0),
				  textAlign: 'center',
				  color: theme.palette.text.secondary,
				  borderRadius: '10px',
				  boxShadow:'0px 0px 10px rgba(1, 1, 1, 0.2)',
        },
}));

const ItemAvatar = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2, 
  width:50,
  height:50,
  margin: 'auto',
  padding: theme.spacing(1),
  boxShadow:'none',
  [theme.breakpoints.up('sm')]: {
          width: 70,
          height:70,
          padding: theme.spacing(1),
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
  boxShadow:'none',
  display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
          width: 112,
          height:50,
          display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
          padding: theme.spacing(1),
				  textAlign: 'center',
				  color: theme.palette.text.secondary,
				  boxShadow:'none',
        },
}));

const cardMedia = { margin: 'auto', mt: '2px', width: { xs: 30, md: 50 }, height: { xs: 35, md: 62 } };

export default function Parts() {
  return (
   	<Grid item xs={12} sx={{  mr:4, mt:4, ml: { md: 4} }}>
 				<Grid item xs={12} sx={{ ml:5, mr:4 }}>
          <Grid container spacing={2}>

					    <Item>
					    	<ItemTitle>
					    		<Typography color="#3A5075" sx={{ textDecoration: 'underline', fontSize: 13 }}>
							      <strong>Parts Order</strong>
							    </Typography>
					    	</ItemTitle>
						    <ItemRow>
						      <Link href="/part_order" sx={cssLink}>
							    	<ItemFrame>
							    		<ItemAvatar>
							    			<CardMedia
							    				sx={cardMedia}
												 	image="home/main 1-0.png"/>
											</ItemAvatar>
							    		<ItemText>
							    			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 11 }}>
													Parts Order
												</Typography>
							    		</ItemText>
							    	</ItemFrame>
							    </Link>	
					    	</ItemRow>
					    </Item>

					    <Item>
					    	<ItemTitle>
					    		<Typography color="#3A5075" sx={{ textDecoration: 'underline', fontSize: 13 }}>
							      <strong>Parts Kit</strong>
							    </Typography>
					    	</ItemTitle>
						    <ItemRow>
							    <Link href="/part_kit" sx={cssLink}>
							    	<ItemFrame>
							    		<ItemAvatar>
							    			<CardMedia
							    				sx={cardMedia}
												 	image="home/main 1-13.png"/>
							    		</ItemAvatar>
							    		<ItemText>
							    			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 11 }}>
													Parts kit
												</Typography>
							    		</ItemText>
							    	</ItemFrame>	 
							    </Link>	   	
					    	</ItemRow>
					    </Item>

					    <Item>
						    <ItemTitle>
						    	<Typography color="#3A5075" sx={{ textDecoration: 'underline', fontSize: 13 }}>
							      <strong>Order Confirmation</strong>
							    </Typography>
						    </ItemTitle>
						    <ItemRow>
						    	<ItemFrame>
						    		<ItemAvatar>
						    			<CardMedia
						    				sx={cardMedia}
											 	image="home/main 1-9.png"/>
						    		</ItemAvatar>
						    		<ItemText>
						    			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 11 }}>
												Parts Order List (Zone)
											</Typography>
						    		</ItemText>
						    	</ItemFrame>

						    	<Link href="/part_order_search" sx={cssLink}>	    	
							    	<ItemFrame>
							    		<ItemAvatar>
							    			<CardMedia
							    				sx={cardMedia}
												 	image="home/main 1-11.png"/>
							    		</ItemAvatar>
							    		<ItemText>
							    			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 11 }}>
													Parts Order List Search
												</Typography>
							    		</ItemText>
							    	</ItemFrame>
							    </Link>

						    	<Link href="/part_order_list_all" sx={cssLink}>	
							    	<ItemFrame>
							    		<ItemAvatar>
							    			<CardMedia
							    				sx={cardMedia}
												 	image="home/main 1-10.png"/>
							    		</ItemAvatar>
							    		<ItemText>
							    			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 11 }}>
													Parts Order List (All)
												</Typography>
							    		</ItemText>
							    	</ItemFrame>
							    </Link>

							    <Link href="/recipient_search" sx={cssLink}>	
							    	<ItemFrame>
							    		<ItemAvatar>
							    			<CardMedia
							    				sx={cardMedia}
												 	image="home/main 1-12.png"/>
							    		</ItemAvatar>
							    		<ItemText>
							    			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 11 }}>
													受領者検索
												</Typography>
							    		</ItemText>
							    	</ItemFrame>
							    </Link>

					    	</ItemRow>
					    </Item>

					    <Item>
					    	<ItemTitle>
					    		<Typography color="#3A5075" sx={{ textDecoration: 'underline', fontSize: 13 }}>
							      <strong>Document Drafting Assistance</strong>
							    </Typography>
					    	</ItemTitle>
						    <ItemRow>
						    	<ItemFrame>
						    		<ItemAvatar>
						    			<CardMedia
						    				sx={cardMedia}
											 	image="home/main 1-1.png"/>
						    		</ItemAvatar>
						    		<ItemText>
						    			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 11 }}>
												SPR
											</Typography>
						    		</ItemText>
						    	</ItemFrame>	    	
						    	<ItemFrame>
						    		<ItemAvatar>
						    			<CardMedia
						    				sx={cardMedia}
											 	image="home/main 1-2.png"/>
						    		</ItemAvatar>
						    		<ItemText>
						    			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 11 }}>
												良品票添付台紙
											</Typography>
						    		</ItemText>
						    	</ItemFrame>	

					    	</ItemRow>
					    </Item>

					    <Item>
					    	<ItemTitle>
					    		<Typography color="#3A5075" sx={{ textDecoration: 'underline', fontSize: 13 }}>
							      <strong>Parts Supply Department</strong>
							    </Typography>
					    	</ItemTitle>
						    <ItemRow>
						    	<Link href="/part_supply_department" sx={cssLink}>
							    	<ItemFrame>
							    		<ItemAvatar>
							    			<CardMedia
							    				sx={cardMedia}
												 	image="home/main 1-14.png"/>
							    		</ItemAvatar>
							    		<ItemText>
							    			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 11 }}>
													Parts Supply Department
												</Typography>
							    		</ItemText>
							    	</ItemFrame>
							    </Link>	    	
					    	</ItemRow>
					    </Item>

					</Grid>

				</Grid>
 			</Grid>
  );
}