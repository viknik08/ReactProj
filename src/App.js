import React from 'react';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './components/Heder/Header'
import Navi from './components/Navi/Navi';
import Profile from './components/Navi/Profile/Profile';
import Music from './components/Navi/Music/Music'
import News from './components/Navi/News/News'
import Settings from './components/Navi/Settings/Settings'
import DialogesContainer from './components/Navi/Dialoges/DialogesContainer';
import FindUsersContainer from './components/Navi/FindeUsers/FindUsersContainer';

const App = (props) => {
	return (
		<div className="wraper">
			<Header />
			<Navi />
			<div className="wraper-content">
				<Route path='/dialoge' render={() => <DialogesContainer store={props.store} />} />
				<Route path='/profile' render={() => <Profile store={props.store} />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/news' render={() => <News />} />
				<Route path='/settings' render={() => <Settings />} />
				<Route path='/users' render={() => <FindUsersContainer />} />

			</div>
		</div>
	);
}

export default App;
