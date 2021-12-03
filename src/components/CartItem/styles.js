import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		cartItem: {
			marginBottom: 15,
			background: '#ffffff',
			borderRadius: 5,
			padding: '10px 20px'
		},
		subTitle: {
			fontWeight: 300,
			marginBottom: 5,
			color: '#9db2bf',
			fontSize: '14px'
		},
		title: {
			color: '#4e6f7d',
			fontWeight: 500,
			marginBottom: 5,
			fontSize: '18px'
		},
		chip: {
			padding: '4px 12px',
			background: 'linear-gradient(90deg, rgba(145,141,232,1) 0%, rgba(211,159,252,1) 100%)',
			width: 'fit-content',
			borderRadius: 50,
			color: '#ffffff',
			fontWeight: 300
		}
	})
);

export default useStyles;
