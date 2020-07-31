import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios'
import { setUsersProfile } from '../../../Redux/profileReducer'
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 2
		}
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
			this.props.setUsersProfile(response.data)
		})
	}
	render() {
		return (
			< Profile {...this.props} profile={this.props.profile} />
		)
	}
}


let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
})
// wthRouter для добавления парапетров в пропсы из url
let whithUserDataUrlComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, { setUsersProfile })(whithUserDataUrlComponent)