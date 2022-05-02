import { Container, Grid, Typography, Button, List } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';

const Products = ({ products, loading, error }) => {
	const renderProductsCard = () => {
		return products.map((product, i) => <ProductCard key={i} />);
	};

	return (
		<div id="Products__screen">
			<Container maxWidth="md">
				<div className="Products__view">
					<div
						className="Products__view__header"
						style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}
					>
						<Typography variant="h1" sx={{ color: 'text.primary' }}>
							Valj varor
						</Typography>
					</div>
					<Grid container spacing={2} justify={'center'}>
						<Grid item xs={12}>
							<List sx={{ bgcolor: 'background.paper' }}>{renderProductsCard()}</List>
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
	return { products: items, loading, error };
};

export default connect(mapStateToProps)(Products);
