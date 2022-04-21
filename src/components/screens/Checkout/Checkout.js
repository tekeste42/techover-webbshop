import { Typography, Container, Grid, Divider, Box } from '@mui/material';
import { connect } from 'react-redux';
import CartItem from '../../CartItem/CartItem';

const Checkout = ({ cart }) => {
	const renderCartItems = () => {
		return cart.orders.map((item, i) => <CartItem {...item} key={i} />);
	};

	const bigText = { fontWeight: 700, fontSize: '1.2rem' };
	const text = { fontWeight: 700, fontSize: '0.8rem' };

	return (
		<Box id="Checkout__screen" style={{ paddingBottom: '50px' }}>
			<Container maxWidth="sm">
				<Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
					<Typography variant="h1" sx={{ color: 'text.primary' }}>
						Checkout
					</Typography>
				</Box>
				<Grid container spacing={2} justify="center">
					<Grid item xs={12}>
						{renderCartItems()}
					</Grid>
				</Grid>

				<Divider style={{ marginBottom: 20 }} />
				<Grid container spacing={2} justify="center">
					<Grid item xs={10}>
						Subtotal:
					</Grid>
					<Grid item xs={2} sx={text}>
						{cart.productPrice} kr
					</Grid>
					<Grid item xs={10}>
						Shipping:
					</Grid>
					<Grid item xs={2} sx={text}>
						{cart.deliveryFee} kr
					</Grid>
					<Grid item xs={10} sx={bigText}>
						Total:
					</Grid>
					<Grid item xs={2} sx={bigText}>
						{cart.totalPrice} kr
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

const mapStateToProps = (state) => {
	return { cart: state.cart };
};

export default connect(mapStateToProps)(Checkout);
