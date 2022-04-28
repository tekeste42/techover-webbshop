import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid, Button, List } from '@mui/material';
import ProductCard from '../../ProductCard/ProductCard.js';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Products = ({ products, error, loading, orders }) => {
	const [category, setCategory] = useState('');
	const [renderCategories, setRenderCategories] = useState([]);

	const handleChange = (event) => {
		setCategory(event.target.value);
	};
	const showSkeletonLoaders = () => [1, 2, 3, 4, 5].map((d) => <ProductCard key={d} loading={true} />);

	const renderProductCards = () => {
		if (loading) return showSkeletonLoaders();

		if (category) {
			return products
				.filter((product) => product.category === category)
				.map((prod, i) => {
					const order = orders.find((orders) => orders.product.id === prod.id);
					const quantity = order ? order.quantity : null;
					return <ProductCard {...prod} quantity={quantity} loading={false} key={i} />;
				});
		} else {
			return products.map((prod, i) => {
				const order = orders.find((orders) => orders.product.id === prod.id);
				const quantity = order ? order.quantity : null;
				return <ProductCard {...prod} quantity={quantity} loading={false} key={i} />;
			});
		}
	};

	useEffect(() => {
		let uniqueCategories = [];
		products.forEach((product) => {
			if (uniqueCategories.includes(product.category)) return;
			uniqueCategories.push(product.category);
		});
		setRenderCategories(uniqueCategories);
	}, [products]);

	return (
		<div id="Product__screen">
			<Container maxWidth="md">
				<div className="Products__view">
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginBottom: 30
						}}
					>
						<Typography variant="h1" sx={{ color: 'text.primary' }}>
							Välj varor
						</Typography>
						<Box sx={{ minWidth: 120 }}>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">Filter</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={category}
									label="Filter"
									onChange={handleChange}
								>
									{renderCategories.map((item) => (
										<MenuItem key={item} value={item}>
											{item}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>
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
