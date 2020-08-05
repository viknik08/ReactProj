import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthThunkCreator } from '../../Redux/authReducer'

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
export default connect(mapStateToProps, { setAuthThunkCreator })(HeaderContainer)