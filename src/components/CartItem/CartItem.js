import { Typography, Grid, Paper, Chip, Stack } from '@mui/material';
import ControlButtons from '../ControlButtons/ControlButtons';

const CartItem = ({ product, quantity }) => {
	return (
		<Paper style={{ marginBottom: '15px', padding: '10px 20px', bgcolor: 'background.default' }} elevation={4}>
			<Grid container spacing={2}>
				<Grid item xs={10}>
					<Typography
						variant="h3"
						sx={{
							color: '#4e6f7d',
							fontWeight: 500,
							marginBottom: '10px',
							height: '40px',
							fontSize: '18px'
						}}
					>
						{product.title}
					</Typography>
					<img
						style={{ width: '30px', marginBottom: '10px', objectFit: 'contain' }}
						src={product.image}
						alt={product.title}
					/>
					<Stack direction="row">
						<Chip
							label={`${parseInt(product.price) * quantity} kr`}
							sx={{ background: 'linear-gradient(90deg, #00c896 0%, #93F9B9 100%)', color: '#ffffff' }}
						/>
					</Stack>
				</Grid>
				<Grid item xs={2}>
					<ControlButtons product={product} quantity={quantity} />
				</Grid>
			</Grid>
		</Paper>
	);
};

export default CartItem;
