import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		productHeader: {
			display: 'flex',
			justifyContent: 'space-between',
			marginBottom: 30
		},
		boldText: {
			fontWeight: 700,
			fontSize: '1.2rem'
		},
		subTotal: {
			fontWeight: 700,
			fontSize: '0.8rem'
		}
	})
);

export default useStyles;
