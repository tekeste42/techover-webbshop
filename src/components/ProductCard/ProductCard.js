import React from 'react';
import { IconButton, Skeleton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const ProductCard = ({
	loading,
	title,
	disabled,
	onDecrement,
	onIncrement,
	price,
	image,
	id,
	description,
	category,
	rating
}) => {
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
			<IconButton aria-label="plus" onClick={onIncrement}>
				<AddIcon fontSize="large" color="primary" />
			</IconButton>
			<IconButton aria-label="minus" onClick={onDecrement} disabled={disabled}>
				<RemoveIcon fontSize="large" color={disabled ? '#f7f8fa' : 'primary'} />
			</IconButton>
		</ListItem>
	);
};

export default ProductCard;
