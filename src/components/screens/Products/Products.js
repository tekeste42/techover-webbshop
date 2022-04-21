import React from 'react';
import { Typography, Container, Grid, Button, List } from '@mui/material';
import ProductCard from '../../ProductCard/ProductCard.js';
import { connect } from 'react-redux';

const Products = ({ products, error, loading }) => {
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
				/>
			);
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
	return {
		products: items,
		error,
		loading
	};
};

export default connect(mapStateToProps)(Products);
