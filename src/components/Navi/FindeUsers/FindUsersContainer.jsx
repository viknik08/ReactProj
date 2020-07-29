import React from 'react'
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../../Redux/findUsersReducer'
import FindUsers from './FindUsers'

let mapStateToProps = (state) => {
	return {
		users: state.findUsersPage.users,
		pageSize: state.findUsersPage.pageSize,
		totalUserCount: state.findUsersPage.totalUserCount,
		currentPage: state.findUsersPage.currentPage,
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
		},
		setCurrentPage: (numberPage) => {
			dispatch(setCurrentPageAC(numberPage))
		},
		setUsersTotalCount: (totalCount) => {
			dispatch(setUsersTotalCountAC(totalCount))
		},

	}
}
const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)
export default FindUsersContainer