import { Title } from '@mui/icons-material';
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
			return { ...initialState };

		case actionTypes.CALCUALTE_TOTAL_CART_AMOUNT:
			return {};

		case actionTypes.INCREMENT_PRODUCT:
			return {
				...state,
				orders: [...state.orders, action.payload]
			};

		case actionTypes.DECREMENT_PRODUCT:
			const filtered = state.orders.filter((order, i) => order !== action.payload);
			return {
				...state,
				orders: [...filtered]
			};

		default:
			return state;
	}
};

export default reducer;
