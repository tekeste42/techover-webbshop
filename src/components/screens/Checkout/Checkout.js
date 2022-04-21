import { Typography, Container, Grid, Divider, Box, Collapse } from '@mui/material';
import { connect } from 'react-redux';
import CartItem from '../../CartItem/CartItem';
import { TransitionGroup } from 'react-transition-group';

const Checkout = ({ cart }) => {
	const renderCartItems = () => {
		return cart.orders.map((item, i) => (
			<Collapse key={i}>
				<CartItem {...item} key={i} />
			</Collapse>
		));
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
						<TransitionGroup>{renderCartItems()}</TransitionGroup>
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
