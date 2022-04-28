import React from 'react';
import ScreensRoot from '../screens/Root';
import { Box } from '@mui/material';

function App() {
	return (
		<div className="App">
			<Box sx={{ bgcolor: 'background.default' }}>
				<ScreensRoot />
			</Box>
		</div>
	);
}

export default App;
