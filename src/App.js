import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Navi from './components/Navi';
import Profile from './components/Profile';

const App = () => {
	return (
		<div className="wraper">
			<Header />
			<Navi />
			<Profile />
		</div>
	);
}

export default App;
