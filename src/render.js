import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, sandMsg, updateNewTextPost, updateNewTextMessage } from './Redux/State'
import { BrowserRouter } from 'react-router-dom'

export let rerenderEntereTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} addPost={addPost} sand={sandMsg} update={updateNewTextPost} updateMsg={updateNewTextMessage} />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}





