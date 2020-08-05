import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfileThunkCreator } from '../../../Redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'




class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 9543
		}
		this.props.setProfileThunkCreator(userId)
	}
	render() {
		return (
			< Profile {...this.props} profile={this.props.profile} />
		)
	}
}


// hoc
let authRedirectComponent = withAuthRedirect(ProfileContainer)

// инфа из store
let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth
})
// wthRouter для добавления параметров в пропсы из url
let whithUserDataUrlComponent = withRouter(authRedirectComponent)
export default connect(mapStateToProps, { setProfileThunkCreator })(whithUserDataUrlComponent)