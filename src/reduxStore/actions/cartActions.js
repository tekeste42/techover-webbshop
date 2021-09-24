import * as actionTypes from './actionTypes';

export const resetCart = () => {
	return {
		type: actionTypes.RESET_CART
	};
};

export const calculateTotalCartAmount = () => {
	return (dispatch, getState) => {
		dispatch({
			type: actionTypes.CALCULATE_TOTAL_CART_AMOUNT,
			productPrice: 100,
			deliveryFee: 50,
			totalPrice: 150
		});
	};
};

export const incrementProduct = (payload) => {
	return (dispatch) => {
		dispatch({ type: actionTypes.INCREMENT_PRODUCT, payload });
		dispatch(calculateTotalCartAmount());
	};
};

export const decrementProduct = (payload) => {
	return (dispatch) => {
		dispatch({ type: actionTypes.DECREMENT_PRODUCT, payload });
		dispatch(calculateTotalCartAmount());
	};
};
