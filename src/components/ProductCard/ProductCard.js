import { IconButton, Skeleton, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { connect } from 'react-redux';
import { incrementProduct, decrementProduct } from '../../reduxStore/actions/cartActions';

const ProductCard = ({ title, image, price, disabled, loading, id, onIncrement, onDecrement }) => {
	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar
					variant="rounded"
					sx={{ width: 65, height: 92, bgcolor: 'background.paper', marginRight: '20px' }}
				>
					{loading ? (
						<Skeleton variant="rectangular" width={65} height={92} />
					) : (
						<img style={{ width: 65 }} src={image} alt={title} />
					)}
				</Avatar>
			</ListItemAvatar>
			<ListItemText
				primary={loading ? <Skeleton variant="text" width={100} height={20} /> : title}
				secondary={loading ? <Skeleton variant="text" width={40} height={20} /> : `${price} kr`}
			/>
			<IconButton onClick={() => onIncrement({ title, price, image, id })}>
				<AddIcon fontSize="large" sx={{ color: '#00c896' }} />
			</IconButton>
			<IconButton onClick={() => onDecrement({ title, price, image, id })} disable={disabled}>
				<RemoveIcon fontSize="large" sx={{ color: '#00c896' }} />
			</IconButton>
		</ListItem>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement: (payload) => dispatch(incrementProduct(payload)),
		onDecrement: (payload) => dispatch(decrementProduct(payload))
	};
};

export default connect(null, mapDispatchToProps)(ProductCard);
