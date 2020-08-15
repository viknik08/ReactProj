import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfileThunkCreator, setStatusThunkCreator, updateStatusThunkCreator } from '../../../Redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux';
import { getProfile, getStatus } from '../../../Redux/Selectors/profileSelector'
import { getUserId, getAuth } from '../../../Redux/Selectors/authSelector'




class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.authUserId
			if (!userId) {
				this.props.history.push('/login')
			}
		}
		this.props.setProfileThunkCreator(userId)
		this.props.setStatusThunkCreator(userId)
	}
	render() {
		return (
			< Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusThunkCreator} />
		)
	}
}

// инфа из store
// let mapStateToProps = (state) => ({
// 	profile: state.profilePage.profile,
// 	status: state.profilePage.status,
// 	authUserId: state.auth.userId,
// 	isAuth: state.auth.isAuth,
// })
let mapStateToProps = (state) => ({
	profile: getProfile(state),
	status: getStatus(state),
	authUserId: getUserId(state),
	isAuth: getAuth(state),
})

export default compose(
	connect(mapStateToProps, { setProfileThunkCreator, setStatusThunkCreator, updateStatusThunkCreator }),
	withRouter, // wthRouter для добавления параметров в пропсы из url
	withAuthRedirect // hoc
)(ProfileContainer)


