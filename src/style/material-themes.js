import { createTheme } from '@mui/material/styles';
const white = '#ffffff';
const neonDark = '#00c896';
const primary = { light: neonDark, main: neonDark, dark: neonDark, contrastText: white };

const h1 = { fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '24px', lineHeight: '30px' };
const h2 = { fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '20px', lineHeight: '24px' };
const h3 = { fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '17px', lineHeight: '20px' };
const h4 = { fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '20px' };

const mainTheme = createTheme({
	palette: {
		primary,
		background: {
			paper: '#ffffff',
			default: '#ffffff'
		},

		text: {
			primary: '#1b1b1b',
			secondary: '#b3b3b3'
		}
	},
	typography: {
		fontFamily: [
			'Roboto',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(','),
		h1,
		h2,
		h3,
		h4
	}
});

export default mainTheme;
