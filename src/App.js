import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './components/Heder/Header'
import Navi from './components/Navi/Navi';
import Profile from './components/Navi/Profile/Profile';
import Dialoges from './components/Navi/Dialoges/Dialoges'
import Music from './components/Navi/Music/Music'
import News from './components/Navi/News/News'
import Settings from './components/Navi/Settings/Settings'

const App = () => {
	return (
		<BrowserRouter>
			<div className="wraper">
				<Header />
				<Navi />
				<div className="wraper-content">
					<Route path='/dialoge' component={Dialoges} />
					<Route path='/profile' component={Profile} />
					<Route path='/music' component={Music} />
					<Route path='/news' component={News} />
					<Route path='/settings' component={Settings} />

				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
