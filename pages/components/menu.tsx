import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Link from '@mui/material/Link';
import MenuItem  from '@mui/material/MenuItem';
import ListItem  from '@mui/material/ListItem';

export default function NestedList() {

  const cssMenuLink = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '95%',
    whiteSpace: 'nowrap',
    color:'#9C9C9C',
  };

  const color = {color:'#9C9C9C'};

  const cssLink = { textDecoration: 'none', color: 'inherit' };

  const [open, setOpen] = React.useState([]);

  const heightIcon = 27;
  const widthIcon = 27;

  const handleClick = (index) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

  return (
  	<div>
	    <List
	    sx={{ width: '100%', bgcolor: 'background.paper' }}
	    component="nav"
	    aria-labelledby="nested-list-subheader"
	    subheader={
		      <ListSubheader component="div" id="nested-list-subheader">
		        <Typography color="#3A5075">
				      <strong>PART</strong>
				    </Typography>
		      </ListSubheader>
		    }
		  >

	      <ListItemButton onClick={() => handleClick(0)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/order.png" width={widthIcon} height={heightIcon} /></Icon>
		      </ListItemIcon>
		      <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Parts Order" />
		      {open[0] ? <ExpandLess sx={color} /> : <ExpandMore sx={color} />}
		    </ListItemButton>
		    <Collapse in={open[0]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Parts Order" />
		        </ListItemButton>
		      </List>
		    </Collapse>

	      <ListItemButton onClick={() => handleClick(1)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/order kit.png" width={widthIcon} height={heightIcon} /></Icon>
		      </ListItemIcon>
		      <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Parts Kit" />
		      {open[1] ? <ExpandLess sx={color} /> : <ExpandMore sx={color} />}
		    </ListItemButton>
		    <Collapse in={open[1]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Parts Kit" />
		        </ListItemButton>
		      </List>
		    </Collapse>

	      <ListItemButton onClick={() => handleClick(2)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/order comfirm.png" width={widthIcon} height={heightIcon} /></Icon>
		      </ListItemIcon>
		      <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Order Confirmation" />
		      {open[2] ? <ExpandLess sx={color} /> : <ExpandMore sx={color} />}
		    </ListItemButton>
		    <Collapse in={open[2]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Parts Order List (Zone)" />
		        </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Parts Order List Search" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Parts Order List (All)" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="受領者検索" />
            </ListItemButton>
		      </List>
		    </Collapse>

	      <ListItemButton onClick={() => handleClick(3)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/document drafting.png" width={widthIcon} height={heightIcon} /></Icon>
		      </ListItemIcon>
		      <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Document Drafting Assistance" />
		      {open[3] ? <ExpandLess sx={color} /> : <ExpandMore sx={color} />}
		    </ListItemButton>
		    <Collapse in={open[3]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="SPR" />
		        </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="良品票添付台紙" />
            </ListItemButton>
		      </List>
		    </Collapse>

	      <ListItemButton onClick={() => handleClick(4)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/parts supply.png" width={widthIcon} height={heightIcon} /></Icon>
		      </ListItemIcon>
		      <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Parts Supply Department" />
		      {open[4] ? <ExpandLess sx={color} /> : <ExpandMore sx={color} />}
		    </ListItemButton>
		    <Collapse in={open[4]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Parts Supply Department Menu" />
		        </ListItemButton>
		      </List>
		    </Collapse>
	    </List>
	    <List
	    sx={{ width: '100%', bgcolor: 'background.paper' }}
	    component="nav"
	    aria-labelledby="nested-list-subheader"
	    subheader={
		      <ListSubheader component="div" id="nested-list-subheader">
		        <Typography color="#3A5075" sx={{mt:3}}>
				      <strong>WORK ORDER</strong>
				    </Typography>
		      </ListSubheader>
		    }
		  >

	      <ListItemButton onClick={() => handleClick(5)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/calendar.png" width={widthIcon} height={heightIcon} /></Icon>
		      </ListItemIcon>
		      <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Task Card" />
		      {open[5] ? <ExpandLess sx={color} /> : <ExpandMore sx={color} />}
		    </ListItemButton>
		    <Collapse in={open[5]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Task Card Status" />
		        </ListItemButton>
		      </List>
		    </Collapse>
		    <Collapse in={open[5]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="N/R Task Card Status" />
		        </ListItemButton>
		      </List>
		    </Collapse>

	      <ListItemButton onClick={() => handleClick(6)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/tools.png" width={widthIcon} height={heightIcon} /></Icon>
		      </ListItemIcon>
		      <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Line Maintenance" />
		      {open[6] ? <ExpandLess sx={color} /> : <ExpandMore sx={color} />}
		    </ListItemButton>
		    <Collapse in={open[6]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="LINE定例作業" />
		        </ListItemButton>
		      </List>
		    </Collapse>
	    </List>

	    <List
	    sx={{ width: '100%', bgcolor: 'background.paper', mb: 15 }}
	    component="nav"
	    aria-labelledby="nested-list-subheader"
	    subheader={
		      <ListSubheader component="div" id="nested-list-subheader">
		        <Typography color="#3A5075" sx={{mt:3}}>
				      <strong>TOOLS</strong>
				    </Typography>
		      </ListSubheader>
		    }
		  >

	      <ListItemButton onClick={() => handleClick(7)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/tools.png" width={widthIcon} height={heightIcon} /></Icon>
		      </ListItemIcon>
		      <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Tools Order" />
		      {open[7] ? <ExpandLess sx={color} /> : <ExpandMore sx={color} />}
		    </ListItemButton>
		    <Collapse in={open[7]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Tools Order" />
		        </ListItemButton>
		      </List>
		    </Collapse>

		    <ListItemButton onClick={() => handleClick(8)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/tools check.png" width={widthIcon} height={heightIcon} /></Icon>
		      </ListItemIcon>
		      <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Tools Check" />
		      {open[8] ? <ExpandLess sx={color} /> : <ExpandMore sx={color} />}
		    </ListItemButton>
		    <Collapse in={open[8]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Tool Inventory" />
		        </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Flash Light" />
            </ListItemButton>
		      </List>
		    </Collapse>
	    </List>

      <Link  href="#" sx={ cssLink }>
          <ListItemButton>
            <ListItemIcon> <Icon><img src="../icon/PC/information.png" width={widthIcon} height={heightIcon} /></Icon> </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Help & information" />
          </ListItemButton>
      </Link>
      <Link  href="#" sx={ cssLink }>
          <ListItemButton>
            <ListItemIcon> <Icon><img src="../icon/PC/logout.png" width={widthIcon} height={heightIcon} /></Icon> </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: cssMenuLink }} primary="Logout" />
          </ListItemButton>
      </Link>
    </div>
  );
}