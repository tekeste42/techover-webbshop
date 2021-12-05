import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';
import ProductCard from '../../ProductCard/ProductCard.js';
import useStyles from './styles';
import { connect } from 'react-redux';

const Products = ({ products, error, loading, orders }) => {
	const classes = useStyles();

	const showSkeletonLoaders = () => [1, 2, 3, 4, 5].map((d) => <ProductCard key={d} loading={true} />);

	const renderProductCards = () => {
		if (loading) return showSkeletonLoaders();

		return products.map((prod, i) => {
			const order = orders.find((orders) => orders.product.id === prod.id);
			const quantity = order ? order.quantity : null;

			return (
				<ProductCard {...prod} quantity={quantity} loading={false} key={i} isLast={i === products.length - 1} />
			);
		});
	};

	return (
		<div id="Product__screen">
			<Container maxWidth="md">
				<div className="Products__view">
					<div className={classes.productHeader}>
						<Typography variant="h1" className={classes.productsTitle}>
							Välj varor
						</Typography>
					</div>
					<Grid container spacing={2} justify="center">
						<Grid item xs={12}>
							{renderProductCards()}
						</Grid>
					</Grid>
					<div className={classes.buttonContainer}>
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
		orders,
		error,
		loading
	};
};

export default connect(mapStateToProps)(Products);
