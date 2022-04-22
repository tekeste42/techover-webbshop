import React, { useEffect, useState } from 'react';
import { Typography, Container, Grid, List, Paper } from '@mui/material';
import Cart from '../../Cart/Cart';

const Deals = () => {
	const [cartId, setCartId] = useState(1);
	const [carts, setCarts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://fakestoreapi.com/carts');
			const carts = await response.json();
			setCarts(carts);
		};
		fetchData();
	}, []);

	const renderCarts = () => {
		if (carts.length === 0) return [1, 2, 3, 4].map((e, i) => <Cart key={i} loading={true} />);
		return carts.map((cart, i) => (
			<Cart key={i} {...cart} selectCart={setCartId} selected={cartId === cart.id} loading={false} />
		));
	};

	return (
		<div id="Carts">
			<Container maxWidth="xl">
				<Typography variant="h1" mb={5}>
					Select a deal!
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={12} lg={6}>
						<List sx={{ paddingTop: '0px' }}>{renderCarts()}</List>
					</Grid>
					<Grid item xs={12} lg={6}>
						<Paper elevation={3}>
							<iframe
								src={`https://klarna-checkout-boilerplate.herokuapp.com/cart-checkout/${cartId}`}
								title="W3Schools Free Online Web Tutorials"
								width={'100%'}
								height={'1000px'}
								style={{ border: 'none' }}
							></iframe>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Deals;
