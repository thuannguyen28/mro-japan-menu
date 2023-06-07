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

export default function NestedList() {

const [open, setOpen] = React.useState([true, true]);

const handleClick = (index) => {
  const newOpen = [...open];
  newOpen[index] = !newOpen[index];
  setOpen(newOpen);
};

  return (
  	<div>
	    <List
	    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
	    component="nav"
	    aria-labelledby="nested-list-subheader"
	    subheader={
		      <ListSubheader component="div" id="nested-list-subheader">
		        <Typography color="#3A5075" sx={{mt:3, ml:2}}>
				      <strong>PART</strong>
				    </Typography>
		      </ListSubheader>
		    }
		  >

	      <ListItemButton onClick={() => handleClick(0)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/order.png" width="27" height="27" /></Icon>
		      </ListItemIcon>
		      <ListItemText primary="Parts Order" />
		      {open[0] ? <ExpandLess /> : <ExpandMore />}
		    </ListItemButton>
		    <Collapse in={open[0]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primary="Parts Order" />
		        </ListItemButton>
		      </List>
		    </Collapse>

	      <ListItemButton onClick={() => handleClick(1)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/order kit.png" width="27" height="27" /></Icon>
		      </ListItemIcon>
		      <ListItemText primary="Parts Kit" />
		      {open[1] ? <ExpandLess /> : <ExpandMore />}
		    </ListItemButton>
		    <Collapse in={open[1]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primary="Parts Kit" />
		        </ListItemButton>
		      </List>
		    </Collapse>

	      <ListItemButton onClick={() => handleClick(2)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/order comfirm.png" width="27" height="27" /></Icon>
		      </ListItemIcon>
		      <ListItemText primary="Order Confirmation" />
		      {open[2] ? <ExpandLess /> : <ExpandMore />}
		    </ListItemButton>
		    <Collapse in={open[2]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primary="Parts Order List (Zone)" />
		        </ListItemButton>
		      </List>
		    </Collapse>
		    <Collapse in={open[2]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primary="Parts Order List Search" />
		        </ListItemButton>
		      </List>
		    </Collapse>
		    <Collapse in={open[2]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primary="Parts Order List (All)" />
		        </ListItemButton>
		      </List>
		    </Collapse>
		    <Collapse in={open[2]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primary="受領者検索" />
		        </ListItemButton>
		      </List>
		    </Collapse>

	      <ListItemButton onClick={() => handleClick(3)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/document drafting.png" width="27" height="27" /></Icon>
		      </ListItemIcon>
		      <ListItemText primary="Document Drafting ..." />
		      {open[3] ? <ExpandLess /> : <ExpandMore />}
		    </ListItemButton>
		    <Collapse in={open[3]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primary="SPR" />
		        </ListItemButton>
		      </List>
		    </Collapse>
		    <Collapse in={open[3]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primary="良品票添付台紙" />
		        </ListItemButton>
		      </List>
		    </Collapse>

	      <ListItemButton onClick={() => handleClick(4)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/parts supply.png" width="27" height="27" /></Icon>
		      </ListItemIcon>
		      <ListItemText primary="Parts Supply Depar..." />
		      {open[4] ? <ExpandLess /> : <ExpandMore />}
		    </ListItemButton>
		    <Collapse in={open[4]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primary="Parts Supply Department Menu" />
		        </ListItemButton>
		      </List>
		    </Collapse>
	    </List>
	    <List
	    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
	    component="nav"
	    aria-labelledby="nested-list-subheader"
	    subheader={
		      <ListSubheader component="div" id="nested-list-subheader">
		        <Typography color="#3A5075" sx={{mt:3, ml:2}}>
				      <strong>WORK ORDER</strong>
				    </Typography>
		      </ListSubheader>
		    }
		  >

	      <ListItemButton onClick={() => handleClick(5)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/calendar.png" width="27" height="27" /></Icon>
		      </ListItemIcon>
		      <ListItemText primary="Task Card" />
		      {open[5] ? <ExpandLess /> : <ExpandMore />}
		    </ListItemButton>
		    <Collapse in={open[5]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primary="Task Card Status" />
		        </ListItemButton>
		      </List>
		    </Collapse>
		    <Collapse in={open[5]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primary="N/R Task Card Status" />
		        </ListItemButton>
		      </List>
		    </Collapse>

	      <ListItemButton onClick={() => handleClick(6)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/tools.png" width="27" height="27" /></Icon>
		      </ListItemIcon>
		      <ListItemText primary="Line Maintenance" />
		      {open[6] ? <ExpandLess /> : <ExpandMore />}
		    </ListItemButton>
		    <Collapse in={open[6]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primary="LINE定例作業" />
		        </ListItemButton>
		      </List>
		    </Collapse>
	    </List>

	    <List
	    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
	    component="nav"
	    aria-labelledby="nested-list-subheader"
	    subheader={
		      <ListSubheader component="div" id="nested-list-subheader">
		        <Typography color="#3A5075" sx={{mt:3, ml:2}}>
				      <strong>TOOLS</strong>
				    </Typography>
		      </ListSubheader>
		    }
		  >

	      <ListItemButton onClick={() => handleClick(7)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/tools.png" width="27" height="27" /></Icon>
		      </ListItemIcon>
		      <ListItemText primary="Tools Order" />
		      {open[7] ? <ExpandLess /> : <ExpandMore />}
		    </ListItemButton>
		    <Collapse in={open[7]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primary="Tools Order" />
		        </ListItemButton>
		      </List>
		    </Collapse>

		    <ListItemButton onClick={() => handleClick(7)}>
		      <ListItemIcon>
		        <Icon><img src="../icon/PC/tools check.png" width="27" height="27" /></Icon>
		      </ListItemIcon>
		      <ListItemText primary="Tools Check" />
		      {open[7] ? <ExpandLess /> : <ExpandMore />}
		    </ListItemButton>
		    <Collapse in={open[7]} timeout="auto" unmountOnExit>
		      <List component="div" disablePadding>
		        <ListItemButton sx={{ pl: 4 }}>
		          <ListItemIcon>
		            <StarBorder />
		          </ListItemIcon>
		          <ListItemText primary="Tool Check" />
		        </ListItemButton>
		      </List>
		    </Collapse>
	    </List>

    </div>

  );
}