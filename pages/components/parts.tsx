import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

export default function JustifyContent() {
  return (
   <div style={{ width: '100%' }}>
   	<Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        p: 1,
        m: 1,
        bgcolor: 'background.paper',
        borderRadius: 1,
      }}
    >
	  <Paper
	    elevation={0}
	    sx={{
	    ml:6,
	  	mb:4,
	  	display: { xs: '12', md: 'flex' },
	  	flexWrap: 'wrap',
	  	flexDirection: 'column',
	  	}}
	  >
	    <Typography color="#3A5075" sx={{textDecoration: 'underline', fontSize: 14}}>
		  	<strong>Parts Order</strong>
	    </Typography>
		<Paper
		  elevation={0}
		  sx={{
		  mt:2,
		  display: 'flex',
		  flexDirection: 'row',
		  }}
		>
		  <Paper
		  	elevation={10}
		  	sx={{
		  	mr:2,
		  	display: 'flex',
		  	flexDirection: 'column',
		  	justifyContent: 'center',
		  	alignItems: 'center',
		  	width: 120,
		  	height: 120,
		  	borderRadius: 4,
		  }}
		  >
		  <Avatar
		 	src="icon/PC/individual.png"
			sx={{
			p:1,
			width: 90,
			height: 90,
			}}
		  />
			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 12, mb:1 }}>
				Parts Order
			</Typography>
			</Paper>
	  </Paper>
	</Paper>

	<Paper
	    elevation={0}
	    sx={{
	    ml:6,
	  	mb:4,
	  	display: { xs: '12', md: 'flex' },
	  	flexWrap: 'wrap',
	  	flexDirection: 'column',
	  	}}
	  >
	    <Typography color="#3A5075" sx={{textDecoration: 'underline', fontSize: 14}}>
		  	<strong>Parts Kit</strong>
	    </Typography>
		<Paper
		  elevation={0}
		  sx={{
		  mt:2,
		  display: 'flex',
		  flexDirection: 'row',
		  }}
		>
		  <Paper
		  	elevation={10}
		  	sx={{
		  	mr:2,
		  	display: 'flex',
		  	flexDirection: 'column',
		  	justifyContent: 'center',
		  	alignItems: 'center',
		  	width: 120,
		  	height: 120,
		  	borderRadius: 4,
		  }}
		  >
		  <Avatar
		 	src="icon/PC/individual.png"
			sx={{
			p:1,
			width: 90,
			height: 90,
			}}
		  />
			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 12, mb:1 }}>
				Parts kit
			</Typography>
			</Paper>
	  </Paper>
	</Paper>

	  <Paper
	    elevation={0}
	    sx={{
	    ml:6,
	  	mb:4,
	  	display: { xs: '12', md: 'flex' },
	  	flexWrap: 'wrap',
	  	flexDirection: 'column',
	  	}}
	  >
	    <Typography color="#3A5075" sx={{textDecoration: 'underline', fontSize: 14}}>
		  	<strong>Order Confirmation</strong>
	    </Typography>
		<Paper
		  elevation={0}
		  sx={{
		  mt:2,
		  display: 'flex',
		  flexWrap: 'wrap',
		  flexDirection: 'row',
		  }}
		>
		  <Paper
		  	elevation={10}
		  	sx={{
		  	mr:2,
		  	mb:2,
		  	display: 'flex',
		  	flexDirection: 'column',
		  	justifyContent: 'center',
		  	alignItems: 'center',
		  	width: 120,
		  	height: 120,
		  	borderRadius: 4,
		  }}
		  >
		  <Avatar
		 	src="icon/PC/individual.png"
			sx={{
			p:1,
			width: 90,
			height: 90,
			}}
		  />
			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 12, mb:1 }}>
				Parts Order List (Zone)
			</Typography>
		  </Paper>

		  <Paper
		  	elevation={10}
		  	sx={{
		  	mr:2,
		  	display: 'flex',
		  	flexDirection: 'column',
		  	justifyContent: 'center',
		  	alignItems: 'center',
		  	width: 120,
		  	height: 120,
		  	borderRadius: 4,
		  }}
		  >
		  <Avatar
		 	src="icon/PC/individual.png"
			sx={{
			p:1,
			width: 90,
			height: 90,
			}}
		  />
			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 12, mb:1 }}>
				Parts Order List Search
			</Typography>
		  </Paper>

		  <Paper
		  	elevation={10}
		  	sx={{
		  	mr:2,
		  	display: 'flex',
		  	flexDirection: 'column',
		  	justifyContent: 'center',
		  	alignItems: 'center',
		  	width: 120,
		  	height: 120,
		  	borderRadius: 4,
		  }}
		  >
		  <Avatar
		 	src="icon/PC/individual.png"
			sx={{
			p:1,
			width: 90,
			height: 90,
			}}
		  />
			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 12, mb:1 }}>
				Parts Order List (All)
			</Typography>
		  </Paper>

		  <Paper
		  	elevation={10}
		  	sx={{
		  	mr:2,
		  	display: 'flex',
		  	flexDirection: 'column',
		  	justifyContent: 'center',
		  	alignItems: 'center',
		  	width: 120,
		  	height: 120,
		  	borderRadius: 4,
		  }}
		  >
		  <Avatar
		 	src="icon/PC/individual.png"
			sx={{
			p:1,
			width: 90,
			height: 90,
			}}
		  />
			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 12, mb:1 }}>
				受領者検索
			</Typography>
		  </Paper>
	  </Paper>
	</Paper>

	<Paper
	    elevation={0}
	    sx={{
	    ml:6,
	  	mb:4,
	  	display: { xs: '12', md: 'flex' },
	  	flexWrap: 'wrap',
	  	flexDirection: 'column',
	  	}}
	  >
	    <Typography color="#3A5075" sx={{textDecoration: 'underline', fontSize: 14}}>
		  	<strong>Document Drafting Assistance</strong>
	    </Typography>
		<Paper
		  elevation={0}
		  sx={{
		  mt:2,
		  display: 'flex',
		  flexDirection: 'row',
		  }}
		>
		  <Paper
		  	elevation={10}
		  	sx={{
		  	mr:2,
		  	display: 'flex',
		  	flexDirection: 'column',
		  	justifyContent: 'center',
		  	alignItems: 'center',
		  	width: 120,
		  	height: 120,
		  	borderRadius: 4,
		  }}
		  >
		  <Avatar
		 	src="icon/PC/individual.png"
			sx={{
			p:1,
			width: 90,
			height: 90,
			}}
		  />
			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 12, mb:1 }}>
				SPR
			</Typography>
			</Paper>

			<Paper
		  	elevation={10}
		  	sx={{
		  	mr:2,
		  	display: 'flex',
		  	flexDirection: 'column',
		  	justifyContent: 'center',
		  	alignItems: 'center',
		  	width: 120,
		  	height: 120,
		  	borderRadius: 4,
		  }}
		  >
		  <Avatar
		 	src="icon/PC/individual.png"
			sx={{
			p:1,
			width: 90,
			height: 90,
			}}
		  />
			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 12, mb:1 }}>
				良品票添付台紙
			</Typography>
			</Paper>
	  </Paper>
	</Paper>

	<Paper
	    elevation={0}
	    sx={{
	    ml:6,
	  	mb:4,
	  	display: { xs: '12', md: 'flex' },
	  	flexWrap: 'wrap',
	  	flexDirection: 'column',
	  	}}
	  >
	    <Typography color="#3A5075" sx={{textDecoration: 'underline', fontSize: 14}}>
		  	<strong>Parts Supply Department</strong>
	    </Typography>
		<Paper
		  elevation={0}
		  sx={{
		  mt:2,
		  display: 'flex',
		  flexDirection: 'row',
		  }}
		>
		  <Paper
		  	elevation={10}
		  	sx={{
		  	mr:2,
		  	display: 'flex',
		  	flexDirection: 'column',
		  	justifyContent: 'center',
		  	alignItems: 'center',
		  	width: 120,
		  	height: 120,
		  	borderRadius: 4,
		  }}
		  >
		  <Avatar
		 	src="icon/PC/individual.png"
			sx={{
			p:1,
			width: 90,
			height: 90,
			}}
		  />
			<Typography color="#3A5075" textAlign="center" sx={{ fontSize: 12, mb:1 }}>
				Parts Supply Department Menu
			</Typography>
			</Paper>
	  </Paper>
	</Paper>
    </Box>
   </div>
  );
}