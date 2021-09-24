import * as actionTypes from './actionTypes';

// set loader state
export const fetchProductsStart = () => {
	return { type: actionTypes.FETCH_PRODUCTS_START };
};

export const fetchProductsFail = (error) => {
	return { type: actionTypes.FETCH_PRODUCTS_FAIL, error: error };
};

export const fetchProductsSuccess = (data) => {
	return {
		type: actionTypes.FETCH_PRODUCTS_SUCCESS,
		payload: data
	};
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fakeProduct = {
	imgSrc: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg',
	title: 'Pizza',
	text: 'New york style pizza',
	price: '99'
};

const fakeArrayOfProducts = [fakeProduct, fakeProduct, fakeProduct, fakeProduct];

export const fetchProducts = () => {
	return async (dispatch) => {
		dispatch(fetchProductsStart());
		try {
			await sleep(2000); // fake api call
			const data = fakeArrayOfProducts;
			dispatch(fetchProductsSuccess(data));
		} catch (error) {
			dispatch(fetchProductsFail(error));
		}
	};
};
