import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfileThunkCreator } from '../../../Redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux';




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

// инфа из store
let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
})

export default compose(
	connect(mapStateToProps, { setProfileThunkCreator }),
	withRouter, // wthRouter для добавления параметров в пропсы из url
	withAuthRedirect // hoc
)(ProfileContainer)


