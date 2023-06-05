import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Typography from '@mui/material/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';

export const mainListItems = (
  <React.Fragment>
    <Typography color="blue" sx={{mt:3, ml:2}}>
      <strong>PART</strong>
    </Typography>
		<ListSubheader component="div" >
       <Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<ListItemIcon>
			        <ShoppingCartIcon />
			      </ListItemIcon>
						<Typography> Parts Order </Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:7}}>
						  <Link href="#">Parts Order</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>
		</ListSubheader>

		<ListSubheader component="div" >
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<ListItemIcon>
			        <ShoppingCartIcon />
			      </ListItemIcon>
						<Typography>Parts Kit</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:7}}>
						  <Link href="#">Parts Kit</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>
		</ListSubheader>

		<ListSubheader component="div" >
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<ListItemIcon>
			        <ShoppingCartIcon />
			      </ListItemIcon>
						<Typography>Order Confirmation</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:7}}>
						  <Link href="#">Parts Order List (Zone)</Link>
						</Typography>

						<Typography sx={{ml:7}}>
						  <Link href="#">Parts Order List Search</Link>
						</Typography>

						<Typography sx={{ml:7}}>
						  <Link href="#">Parts Order List (All)</Link>
						</Typography>

						<Typography sx={{ml:7}}>
						  <Link href="#">受領者検索</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>
		</ListSubheader>

		<ListSubheader component="div" >
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<ListItemIcon>
			        <ShoppingCartIcon />
			      </ListItemIcon>
						<Typography>Document Drafting...</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:7}}>
						  <Link href="#">SPR</Link>
						</Typography>

						<Typography sx={{ml:7}}>
						  <Link href="#">良品票添付台紙</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>
		</ListSubheader>

		<ListSubheader component="div" >
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<ListItemIcon>
			        <ShoppingCartIcon />
			      </ListItemIcon>
						<Typography>Parts Supply...</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:7}}>
						  <Link href="#">Parts Supply Department Menu</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>
		</ListSubheader>

		<Typography color="blue" sx={{mt:1, ml:2}}>
      <strong>WORK ORDER</strong>
    </Typography>
    <ListSubheader component="div" >
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<ListItemIcon>
			        <ShoppingCartIcon />
			      </ListItemIcon>
						<Typography>Task Card</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:7}}>
						  <Link href="#">Task Card Status</Link>
						</Typography>

						<Typography sx={{ml:7}}>
						  <Link href="#">N/R Task Card Status</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>
		</ListSubheader>

		<ListSubheader component="div" >
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<ListItemIcon>
			        <ShoppingCartIcon />
			      </ListItemIcon>
						<Typography>Line Maintenance</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:7}}>
						  <Link href="#">LINE定例作業</Link>
						</Typography>

						<Typography sx={{ml:7}}>
						  <Link href="#">Task Card Status</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>
		</ListSubheader>

		<Typography color="blue" sx={{mt:1, ml:2}}>
      <strong>TOOLS</strong>
    </Typography>
    <ListSubheader component="div" >
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<ListItemIcon>
			        <ShoppingCartIcon />
			      </ListItemIcon>
						<Typography>Tools Order</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:7}}>
						  <Link href="#">Tool Order</Link>
						</Typography>

						<Typography sx={{ml:7}}>
						  <Link href="#">Tool Check</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>
		</ListSubheader>

		<ListSubheader component="div" >
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<ListItemIcon>
			        <ShoppingCartIcon />
			      </ListItemIcon>
						<Typography>Tools Check</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:7}}>
						  <Link href="#">Tool Inventory</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>
		</ListSubheader>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton sx={{ml:2}}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Help & infomation" />
    </ListItemButton>

    <ListItemButton sx={{ml:2}}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);
