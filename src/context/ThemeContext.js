import React, { createContext, useContext, useState } from 'react';
import { getDesignTokens } from '../style/material-themes';
import { ThemeProvider as MaterialThemeProvider, createTheme } from '@mui/material/styles';

const ThemeContext = createContext({ theme: 'light', toggleColorMode: () => {} });

export function useTheme() {
	return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
	const [mode, setMode] = useState('light');

	const colorMode = () => {
		setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
	};

	const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	const value = {
		theme: mode,
		toggleColorMode: colorMode
	};

	return (
		<ThemeContext.Provider value={value}>
			<MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
		</ThemeContext.Provider>
	);
};
