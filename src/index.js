import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import configureStore from './reduxStore/configureStore';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
