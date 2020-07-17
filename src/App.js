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

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="wraper">
				<Header />
				<Navi state={props.state.dialogePage} />
				<div className="wraper-content">
					<Route path='/dialoge' render={() => <Dialoges state={props.state.dialogePage} />} />
					<Route path='/profile' render={() => <Profile state={props.state.profilePage} />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/settings' render={() => <Settings />} />

				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
