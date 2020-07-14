import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Heder/Header'
import Navi from './components/Navi/Navi';
import Profile from './components/Profile/Profile';

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
