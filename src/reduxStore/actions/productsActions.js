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

const product1 = {
	imgSrc: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg',
	title: 'Pizza',
	text: 'New york style pizza',
	price: '99',
	itemid: 1
};

const product2 = {
	imgSrc: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg',
	title: 'Hamburger',
	text: 'New york style pizza',
	price: '50',
	itemid: 2
};

const product3 = {
	imgSrc: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg',
	title: 'Candy',
	text: '',
	price: '5',
	itemid: 3
};

const fakeArrayOfProducts = [product1, product2, product3];

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
