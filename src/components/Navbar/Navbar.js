import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = (props) => {
	const { theme, toggleColorMode } = useTheme();
	const history = useHistory();
	console.log();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ background: '#00c896' }}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Techover
					</Typography>
					<Button onClick={() => history.push('/checkout')} color="inherit">
						Checkout
					</Button>
					<Button onClick={() => history.push('/')} color="inherit">
						Products
					</Button>
					<Button onClick={toggleColorMode} color="inherit">
						{theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
