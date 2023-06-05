import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

export default function Header() {
  return (

	<Toolbar sx={{ ml: 0 , borderBottom:'1px solid #e0e0e0' }}>
			<img src="/menu/header.png" width="150" height="30"/>
			<IconButton
				size="large"
				edge="start"
				aria-label="menu"
				sx={{ ml: 2 }}
			>
					<MenuIcon />
			</IconButton>

			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />

			<Avatar alt="Travis Howard" 
			      src="/avatar/2.png"
			      sx={{ width: 56, height: 56, mt:2, mb:2 }} />
	</Toolbar>

	)
}