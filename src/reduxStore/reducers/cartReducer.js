import * as actionTypes from '../actions/actionTypes';

const initialState = {
	totalPrice: 0,
	deliveryFee: 0,
	productPrice: 0,
	orders: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.RESET_CART:
			return {
				...state
			};

		case actionTypes.CALCULATE_TOTAL_CART_AMOUNT:
			return {
				...state,
				totalPrice: action.totalPrice,
				deliveryFee: action.deliveryFee,
				productPrice: action.productPrice
			};

		case actionTypes.INCREMENT_PRODUCT:
			const incremArray = incrementIronedProducts(state.orders, action);
			return {
				...state,
				orders: incremArray
			};

		case actionTypes.DECREMENT_PRODUCT:
			const decArray = decrementProducts(state.orders, action.payload.id);
			return {
				...state,
				orders: decArray
			};

		default:
			return state;
	}
};

const findProductIndex = (incremArray, id) => {
	if (incremArray.length === 0) {
		return -1;
	} else {
		return incremArray.findIndex((item) => item.product.id === id);
	}
};

const incrementProduct = (product, quantity) => ({ product: product, quantity: quantity + 1 });

const decrementIronedProduct = (product, quantity) => ({ product: product, quantity: quantity - 1 });

const incrementIronedProducts = (initArray, action) => {
	const incremArray = initArray.slice();
	const productIndex = findProductIndex(incremArray, action.payload.id);

	if (productIndex !== -1) {
		incremArray[productIndex] = incrementProduct(
			incremArray[productIndex].product,
			incremArray[productIndex].quantity
		);
	} else {
		const prod = incrementProduct(action.payload, 0);
		incremArray.push(prod);
	}
	return incremArray;
};

const decrementProducts = (initArray, id) => {
	const decArray = initArray.slice();
	const decProdIndex = findProductIndex(decArray, id);

	if (decProdIndex !== -1 && initArray[decProdIndex].quantity > 1) {
		decArray[decProdIndex] = decrementIronedProduct(
			decArray[decProdIndex].product,
			decArray[decProdIndex].quantity
		);
	} else if (decProdIndex !== -1) {
		decArray.splice(decProdIndex, 1);
	}
	return decArray;
};

export default reducer;
