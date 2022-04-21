import React from 'react';
import { Typography, Container, Grid, Button, List } from '@mui/material';
import ProductCard from '../../ProductCard/ProductCard.js';
import { connect } from 'react-redux';

const Products = ({ products, error, loading, orders }) => {
	const showSkeletonLoaders = () => [1, 2, 3, 4, 5].map((d) => <ProductCard key={d} loading={true} />);

	const renderProductCards = () => {
		if (loading) return showSkeletonLoaders();

		return products.map((prod, i) => {
			const order = orders.find((orders) => orders.product.id === prod.id);
			const quantity = order ? order.quantity : null;
			return <ProductCard {...prod} quantity={quantity} loading={false} key={i} />;
		});
	};

	return (
		<div id="Product__screen">
			<Container maxWidth="md">
				<div className="Products__view">
					<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 30 }}>
						<Typography variant="h1" sx={{ color: 'text.primary' }}>
							Välj varor
						</Typography>
					</div>
					<Grid container spacing={2} justify="center">
						<Grid item xs={12}>
							<List sx={{ bgcolor: 'background.paper' }}>{renderProductCards()}</List>
						</Grid>
					</Grid>
					<div
						style={{ padding: '20px 0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
					>
						<Button variant="contained">Köp</Button>
					</div>
				</div>
			</Container>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { items, loading, error } = state.products;
	const { orders } = state.cart;
	return {
		products: items,
		error,
		loading,
		orders
	};
};

export default connect(mapStateToProps)(Products);
