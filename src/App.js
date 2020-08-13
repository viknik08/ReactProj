import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/Heder/HeaderContainer'
import Navi from './components/Navi/Navi';
import ProfileContainer from './components/Navi/Profile/ProfileContainer';
import Music from './components/Navi/Music/Music'
import News from './components/Navi/News/News'
import Settings from './components/Navi/Settings/Settings'
import DialogesContainer from './components/Navi/Dialoges/DialogesContainer';
import FindUsersContainer from './components/Navi/FindeUsers/FindUsersContainer';
import Login from './components/Login/Login';
import { setInitializedThunkCreator } from './Redux/appReducer'
import { connect } from 'react-redux';
import Preloader from './components/common/preloader/preloader';
import { compose } from 'redux';

class App extends React.Component {

	componentDidMount() {
		// возвращвет логин
		this.props.setInitializedThunkCreator()
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div className="wraper" >
				<HeaderContainer />
				<Navi />
				<div className="wraper-content">
					<Route path='/dialoge' render={() => <DialogesContainer />} />
					<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/settings' render={() => <Settings />} />
					<Route path='/users' render={() => <FindUsersContainer />} />
					<Route path='/login' render={() => <Login />} />

				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
	isAuth: state.auth.isAuth,
})

export default compose(
	withRouter,
	connect(mapStateToProps, { setInitializedThunkCreator }))
	(App);
