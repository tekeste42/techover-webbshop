import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		productsTitle: {},
		productHeader: {
			display: 'flex',
			justifyContent: 'space-between',
			marginBottom: 30
		},
		buttonContainer: {
			padding: '20px 0px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}
	})
);

export default useStyles;
