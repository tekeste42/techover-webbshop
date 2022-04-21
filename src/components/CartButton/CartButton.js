import * as React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

function CartButton({ cartItems }) {
	const history = useHistory();

	return (
		<IconButton aria-label="cart" onClick={() => history.push('/checkout')}>
			<Badge badgeContent={cartItems} color="info">
				<ShoppingCartIcon sx={{ color: '#ffffff' }} />
			</Badge>
		</IconButton>
	);
}

const mapStateToProps = (state) => {
	return { cartItems: state.cart.orders.length };
};

export default connect(mapStateToProps)(CartButton);
