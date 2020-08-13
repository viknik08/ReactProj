import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { logoutThunkCreator } from '../../Redux/authReducer'

=======
import { setAuthThunkCreator } from '../../Redux/authReducer'
>>>>>>> parent of 4c2a6d9... 77+78 stage form login

class HeaderContainer extends React.Component {


	render() {
		return (
			<Header {...this.props} />
		)
	}
}
const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})
<<<<<<< HEAD
export default connect(mapStateToProps, { logoutThunkCreator })(HeaderContainer)
=======
export default connect(mapStateToProps, { setAuthThunkCreator })(HeaderContainer)
>>>>>>> parent of 4c2a6d9... 77+78 stage form login
