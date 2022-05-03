import * as actionTypes from './actionTypes';

export const resetCart = () => ({ type: actionTypes.RESET_CART });

export const incrementProduct = (payload) => {
	return { type: actionTypes.INCREMENT_PRODUCT, payload };
};

export const decrementProduct = (payload) => {
	return { type: actionTypes.DECREMENT_PRODUCT, payload };
};
