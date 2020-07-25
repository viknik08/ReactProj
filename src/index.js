import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import store from './Redux/reduxStore'
import { BrowserRouter } from 'react-router-dom'

let rerenderEntereTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store} >
					<App />
				</Provider >
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
rerenderEntereTree(store.getState())
store.subscribe(() => {
	let state = store.getState()
	rerenderEntereTree(state)
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
