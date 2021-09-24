import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';
import ProductCard from '../../ProductCard/ProductCard.js';
import useStyles from './styles';
import { connect } from 'react-redux';
import { decrementProduct, incrementProduct } from '../../../reduxStore/actions/index';

const Products = ({ products, error, loading, incrementProduct, decrementProduct, orders }) => {
	const classes = useStyles();

	const handleIncrement = (product) => {
		incrementProduct(product);
	};

	const handleDecrement = (product) => {
		decrementProduct(product);
	};

	const showSkeletonLoaders = () => [1, 2, 3, 4, 5].map((d) => <ProductCard key={d} loading={true} />);

	const renderProductCards = () => {
		if (loading) return showSkeletonLoaders();

		return products.map((prod, i) => {
			const order = orders.find((orders) => orders.product.itemid === prod.itemid);
			const quantity = order ? order.quantity : null;

			return (
				<ProductCard
					{...prod}
					quantity={quantity}
					loading={false}
					key={i}
					onIncrement={() => handleIncrement(prod)}
					onDecrement={() => handleDecrement(prod)}
					isLast={i === products.length - 1}
				/>
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

const mapDIspatchToProps = (dispatch) => {
	return {
		incrementProduct: (data) => dispatch(incrementProduct(data)),
		decrementProduct: (data) => dispatch(decrementProduct(data))
	};
};

export default connect(mapStateToProps, mapDIspatchToProps)(Products);
