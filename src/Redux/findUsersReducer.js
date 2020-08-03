import { userAPI } from '../API/api'

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
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u
				})
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
	return (dispatch) => {
		dispatch(setCurrentPage(currentPage))
		dispatch(toggleIsFetching(true))
		userAPI.getUsers(currentPage, pageSize).then(data => {
			dispatch(toggleIsFetching(false))
			dispatch(setUsers(data.items))
			dispatch(setUsersTotalCount(data.totalCount))
		})
	}
}
// санки для follow/unfollow
export const followThunkCreator = (id) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, id))
		userAPI.postUsers(id).then(data => {
			if (data.resultCode == 0) {
				dispatch(follow(id))
			}
			dispatch(toggleFollowingProgress(false, id))
		})
	}
}
export const unfollowThunkCreator = (id) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, id))
		userAPI.deleteUsers(id).then(data => {
			if (data.resultCode == 0) {
				dispatch(unfollow(id))
			}
			dispatch(toggleFollowingProgress(false, id))
		})
	}
}




export default findUsersReducer