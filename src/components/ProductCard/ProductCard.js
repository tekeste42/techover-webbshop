import React, { Fragment } from 'react';
import { Typography, Divider, Skeleton } from '@mui/material';
import useStyles from './styles';
import ControlButtons from '../ControlButtons/ControlButtons';

const ProductCard = ({ loading, title, isLast, price, image, id, description, category, rating, quantity }) => {
	const classes = useStyles();

	const renderControlButtons = () => {
		const product = {
			category,
			description,
			id,
			image,
			price,
			rating,
			title
		};
		return <ControlButtons product={product} quantity={quantity} />;
	};

	return (
		<div className={classes.productCard}>
			<div className={classes.productCardFlex}>
				<div className={classes.informationContainer}>
					<div className={classes.info}>
						{loading ? (
							<Skeleton variant="rect" width={65} height={92} style={{ marginRight: 20 }} />
						) : (
							<img className={classes.img} src={image} alt={title}></img>
						)}
						<div className={classes.details}>
							<Typography variant="subtitle2">
								{loading ? (
									<Skeleton variant="text" width={50} height={20} />
								) : (
									<p className={`${classes.title} ${classes.detailMargin}`}>{title}</p>
								)}
							</Typography>

							{loading ? (
								<Skeleton variant="text" width={80} height={20} />
							) : (
								<Fragment>
									<p className={classes.detailMargin}>{price} Kr</p>
								</Fragment>
							)}
						</div>
					</div>
				</div>
				{renderControlButtons()}
			</div>
			{!isLast && (
				<div className={classes.divider}>
					<Divider variant="middle" />
				</div>
			)}
		</div>
	);
};

export default ProductCard;
