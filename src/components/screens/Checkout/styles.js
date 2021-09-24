import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		productHeader: {
			display: 'flex',
			justifyContent: 'space-between',
			marginBottom: 30
		}
	})
);

export default useStyles;
