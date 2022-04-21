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
	const copyOfArray = initArray.slice();
	const productIndex = findProductIndex(copyOfArray, action.payload.id);

	if (productIndex !== -1) {
		copyOfArray[productIndex] = incrementProduct(
			copyOfArray[productIndex].product,
			copyOfArray[productIndex].quantity
		);
	} else {
		const prod = incrementProduct(action.payload, 0);
		copyOfArray.push(prod);
	}
	return copyOfArray;
};

const decrementProducts = (initArray, id) => {
	const copyOfArray = initArray.slice();
	const decProdIndex = findProductIndex(copyOfArray, id);

	if (decProdIndex !== -1 && initArray[decProdIndex].quantity > 1) {
		copyOfArray[decProdIndex] = decrementIronedProduct(
			copyOfArray[decProdIndex].product,
			copyOfArray[decProdIndex].quantity
		);
	} else if (decProdIndex !== -1) {
		copyOfArray.splice(decProdIndex, 1);
	}
	return copyOfArray;
};

export default reducer;
