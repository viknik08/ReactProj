import { createSelector } from "reselect"

// пример написания реселекторов
export const getUser = (state) => {
	return state.findUsersPage.users
}
const getUserSelector = createSelector(getUser, (users) => {
	users.filter(u => true)
})


export const getUsers = (state) => {
	return state.findUsersPage.users
}
export const getPageSize = (state) => {
	return state.findUsersPage.pageSize
}
export const getTotalUserCount = (state) => {
	return state.findUsersPage.totalUserCount
}
export const getCurrentPage = (state) => {
	return state.findUsersPage.currentPage
}
export const getIsFetching = (state) => {
	return state.findUsersPage.isFetching
}
export const getFollowingInProgress = (state) => {
	return state.findUsersPage.followingInProgress
}