import useStyles from './styles';
import { Typography, Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { connect } from 'react-redux';
import { incrementProduct, decrementProduct } from '../../reduxStore/actions/cartActions';
import { useState } from 'react';

const ControlButtons = ({ onIncrement, onDecrement, quantity, product }) => {
	const classes = useStyles();
	const [disabled, setDisable] = useState(!quantity && quantity < 1);

	return (
		<div className={classes.buttons}>
			<IconButton aria-label="plus" onClick={() => onIncrement(product)}>
				<AddIcon fontSize="large" className={classes.button} />
			</IconButton>
			<div className={classes.quantity}>{quantity}</div>
			<IconButton aria-label="minus" onClick={() => onDecrement(product)} disabled={disabled}>
				<RemoveIcon fontSize="large" className={disabled ? classes.buttonDisabled : classes.button} />
			</IconButton>
		</div>
	);
};

const mapDIspatchToProps = (dispatch) => {
	return {
		onIncrement: (data) => dispatch(incrementProduct(data)),
		onDecrement: (data) => dispatch(decrementProduct(data))
	};
};

export default connect(null, mapDIspatchToProps)(ControlButtons);
