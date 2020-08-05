import { Redirect } from 'react-router-dom'
import React from 'react';
import { connect } from 'react-redux'


// инфа из store
let mapStateForRedirect = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}
// готовый hoc для auth
export const withAuthRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if (!this.props.isAuth) return <Redirect to={'/login'} />
			return <Component {...this.props} />
		}
	}
	// connect для прокидывания инфы из store
	return connect(mapStateForRedirect)(RedirectComponent)


}

