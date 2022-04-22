import { List, Paper, ListItemButton, Skeleton } from '@mui/material';
import { connect } from 'react-redux';
import Item from '../Item/Item';

const Cart = ({ dbProducts, products, id, selectCart, selected, loading }) => {
	const getMyProducts = () => {
		const productsFromCart = [];
		products.forEach((product) => {
			const foundProduct = dbProducts.find((productFromDB) => productFromDB.id === product.productId);
			if (!!foundProduct) {
				productsFromCart.push({ product: foundProduct, quantity: product.quantity });
			}
		});
		return productsFromCart;
	};

	const renderProducts = () => {
		const productsWithQuantity = getMyProducts();
		return productsWithQuantity.map(({ product, quantity }, i) => (
			<Item key={i} product={product} quantity={quantity} />
		));
	};

	return (
		<Paper elevation={3} sx={{ marginBottom: 4, padding: 2 }}>
			{loading ? (
				<Skeleton variant="rectangular" width={'100%'} height={120} />
			) : (
				<ListItemButton onClick={() => selectCart(id)} selected={selected}>
					<List sx={{ width: '100%' }}>{renderProducts()}</List>
				</ListItemButton>
			)}
		</Paper>
	);
};

const mapState = (state) => ({ dbProducts: state.products.items });

export default connect(mapState)(Cart);
