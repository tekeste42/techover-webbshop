import React from 'react';
import { Skeleton, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import ControlButtons from '../ControlButtons/ControlButtons';

const ProductCard = ({ loading, title, price, image, id, description, category, rating, quantity }) => {
	const product = {
		category,
		description,
		id,
		image,
		price,
		rating,
		title
	};

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
						<img style={{ width: '65px', objectFit: 'contain' }} src={image} alt={title} />
					)}
				</Avatar>
			</ListItemAvatar>
			<ListItemText
				primary={loading ? <Skeleton variant="text" width={50} height={20} /> : title}
				secondary={loading ? <Skeleton variant="text" width={80} height={20} /> : `${price} Kr`}
			/>
			<ControlButtons product={product} quantity={quantity} />
		</ListItem>
	);
};

export default ProductCard;
