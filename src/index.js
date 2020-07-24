import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import store from './Redux/Store'
import { BrowserRouter } from 'react-router-dom'

let rerenderEntereTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} dispatch={store.dispatch.bind(store)} />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
rerenderEntereTree(store.getState())
store.subscribe(rerenderEntereTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
