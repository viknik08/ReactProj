import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logoutThunkCreator } from '../../Redux/authReducer'
import { getLogin, getAuth } from '../../Redux/Selectors/authSelector'


class HeaderContainer extends React.Component {

	render() {
		return (
			<Header {...this.props} />
		)
	}
}
const mapStateToProps = (state) => ({
	isAuth: getAuth(state),
	login: getLogin(state)
})

export default connect(mapStateToProps, { logoutThunkCreator })(HeaderContainer)

