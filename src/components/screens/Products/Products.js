import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';
import ProductCard from '../../ProductCard/ProductCard.js';
import useStyles from './styles';
import { connect } from 'react-redux';

const Products = ({ products, error, loading }) => {
	const classes = useStyles();
	console.log({ products });
	const handleIncrement = (params) => {};
	const handleDecrement = (params) => {};

	const renderProductCards = () => {
		if (loading) return [1, 2, 3, 4, 5].map((d) => <ProductCard key={d} loading={true} />);

		return products.map((prod, i) => {
			return (
				<ProductCard
					{...prod}
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
	return {
		products: items,
		error,
		loading
	};
};

const mapDIspatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDIspatchToProps)(Products);
