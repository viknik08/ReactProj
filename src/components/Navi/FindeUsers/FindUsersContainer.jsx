import React from 'react'
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC } from '../../../Redux/findUsersReducer'
import FindUsers from './FindUsers'

let mapStateToProps = (state) => {
	return {
		users: state.findUsersPage.users
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		follow: (usersId) => {
			dispatch(followAC(usersId))
		},
		unfollow: (usersId) => {
			dispatch(unfollowAC(usersId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		}
	}
}
const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)
export default FindUsersContainer