import { userAPI } from '../API/api'
import { updateObjectArray } from '../utils/object-helper'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE–IS-FOLLOWING-PROGRESS '


// дефолтные значения для usersPage
let initState = {
	users: [],
	pageSize: 5,
	totalUserCount: 21,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [], //для дизайбла кнопки пока идет ответ от сервера

}

const findUsersReducer = (state = initState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectArray(state.users, action.userId, "id", { followed: true })
				// users: state.users.map(u => {
				// 	if (u.id === action.userId) {
				// 		return { ...u, followed: true }
				// 	}
				// 	return u
				// })
			}
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectArray(state.users, action.userId, "id", { followed: false })
				// users: state.users.map(u => {
				// 	if (u.id === action.userId) {
				// 		return { ...u, followed: false }
				// 	}
				// 	return u
				// })
			}
		case SET_USERS:
			return {
				...state,
				users: action.users,
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			}
		case SET_TOTAL_COUNT:
			return {
				...state,
				totalUserCount: action.totalUserCount,
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId),
			}

		default:
			return state
	}
}


// функции для actiona 
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (totalUserCount) => ({ type: SET_TOTAL_COUNT, totalUserCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

// криетор санок для axios в findeusercontainer запросов
export const getUserThunkCreator = (currentPage, pageSize) => {
	return async (dispatch) => {
		dispatch(setCurrentPage(currentPage))
		dispatch(toggleIsFetching(true))
		let data = await userAPI.getUsers(currentPage, pageSize)
		dispatch(toggleIsFetching(false))
		dispatch(setUsers(data.items))
		dispatch(setUsersTotalCount(data.totalCount))
	}
}

// общий метод для санок follow unfollow
const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, id))
	let data = await apiMethod(id)
	if (data.resultCode == 0) {
		dispatch(actionCreator(id))
	}
	dispatch(toggleFollowingProgress(false, id))
}
// санки для follow/unfollow
export const followThunkCreator = (id) => {
	return async (dispatch) => {
		let apiMethod = userAPI.postUsers.bind(userAPI)
		let actionCreator = follow
		followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
	}
}
export const unfollowThunkCreator = (id) => {
	return async (dispatch) => {
		let apiMethod = userAPI.deleteUsers.bind(userAPI)
		let actionCreator = unfollow
		followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
	}
}




export default findUsersReducer