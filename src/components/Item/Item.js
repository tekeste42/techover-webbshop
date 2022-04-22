import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

const Item = ({ product, quantity }) => {
	const { image, title, price } = product;
	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar variant="rounded" sx={{ width: 40, bgcolor: 'background.paper', marginRight: '20px' }}>
					<img style={{ width: '40px' }} src={image} alt={title} />
				</Avatar>
			</ListItemAvatar>
			<ListItemText primary={title} secondary={`${price} Kr`} />
			{quantity}
		</ListItem>
	);
};

export default Item;
