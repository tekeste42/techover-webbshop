import React, { Fragment } from 'react';
import { Typography, IconButton, Divider, Skeleton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useStyles from './styles';

const ProductCard = ({ loading, title, isLast, onDecrement, onIncrement, text, price, imgSrc, quantity }) => {
	const classes = useStyles();
	const disabled = !quantity && quantity < 1;

	return (
		<div className={classes.productCard}>
			{quantity && (
				<div className={classes.quantityCounter}>
					<div className={classes.rotated}></div>
					<div className={`${classes.quantity} ${classes.detailMargin}`}>{quantity} st</div>
				</div>
			)}
			<div className={classes.productCardFlex}>
				<div className={classes.informationContainer}>
					<div className={classes.info}>
						{loading ? (
							<Skeleton variant="rect" width={110} height={70} style={{ marginRight: 20 }} />
						) : (
							<img className={classes.img} src={imgSrc} alt={title}></img>
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
									<p className={classes.detailMargin}>{text}</p>
									<p className={classes.detailMargin}>{price} Kr</p>
								</Fragment>
							)}
						</div>
					</div>
				</div>

				<div className={classes.buttons}>
					<IconButton aria-label="plus" onClick={onIncrement}>
						<AddIcon fontSize="large" className={classes.button} />
					</IconButton>
					<IconButton aria-label="minus" onClick={onDecrement} disabled={disabled}>
						<RemoveIcon fontSize="large" className={disabled ? classes.buttonDisabled : classes.button} />
					</IconButton>
				</div>
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
