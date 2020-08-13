import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { setAuthThunkCreator, logoutThunkCreator } from '../../Redux/authReducer'
=======
<<<<<<< HEAD
import { logoutThunkCreator } from '../../Redux/authReducer'
>>>>>>> 930f2481cdb9f194f12ee7f7f343adac19e70de8

=======
import { setAuthThunkCreator } from '../../Redux/authReducer'
>>>>>>> parent of 4c2a6d9... 77+78 stage form login

class HeaderContainer extends React.Component {

	componentDidMount() {
		// возвращвет логин
		this.props.setAuthThunkCreator()
	}
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
export default connect(mapStateToProps, { setAuthThunkCreator, logoutThunkCreator })(HeaderContainer)
=======
<<<<<<< HEAD
export default connect(mapStateToProps, { logoutThunkCreator })(HeaderContainer)
=======
export default connect(mapStateToProps, { setAuthThunkCreator })(HeaderContainer)
>>>>>>> parent of 4c2a6d9... 77+78 stage form login
>>>>>>> 930f2481cdb9f194f12ee7f7f343adac19e70de8
