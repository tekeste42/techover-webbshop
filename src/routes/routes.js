import Products from '../components/screens/Products/Products';
import Checkout from '../components/screens/Checkout/Checkout';
import Deals from '../components/screens/Deals/Deals';

const NoMatch = () => {
	return <div>404</div>;
};

export const ROUTES = [
	{
		path: '/deals',
		exact: true,
		component: Deals
	},
	{
		path: '/checkout',
		exact: true,
		component: Checkout
	},
	{
		path: '/',
		exact: true,
		component: Products
	},
	{
		path: '*',
		exact: true,
		component: NoMatch
	}
];
