import useStyles from './styles';
import { Typography, Grid } from '@mui/material';
import ControlButtons from '../ControlButtons/ControlButtons';

const CartItem = ({ product, quantity }) => {
	console.log({ product, quantity });
	const classes = useStyles();
	return (
		<div className={classes.cartItem}>
			<Grid container spacing={2}>
				<Grid item xs={10}>
					<Typography variant="h3" className={classes.title}>
						{product.title}
					</Typography>
					<Typography variant="subtitle1" className={classes.subTitle}>
						{product.text}
					</Typography>
					<div className={classes.chip}>{parseInt(product.price) * quantity} kr</div>
				</Grid>
				<Grid item xs={2}>
					<ControlButtons product={product} quantity={quantity} />
				</Grid>
			</Grid>
		</div>
	);
};

export default CartItem;
