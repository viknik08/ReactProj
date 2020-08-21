import { profileAPI } from '../API/api'

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE-POST'
// const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

// дефолтные значения для profilePage
let initState = {
	post: [
		{ id: '3', message: 'Hi, who are you?', likeCount: '10' },
		{ id: '2', message: 'Yeah, man! I miss you nigga', likeCount: '12' },
		{ id: '1', message: 'Fuck off', likeCount: '9' },
	],
	profile: null,
	status: ''
}

const profileReducer = (state = initState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = action.textarea
			return {
				...state,
				post: [{ id: 4, message: newPost, likeCount: 0, }, ...state.post],
			}
		case DELETE_POST:
			return {
				...state,
				post: state.post.filter(p => p.id != action.postId),
			}

		// case UPDATE_NEW_TEXT_POST:
		// 	return {
		// 		...state,
		// 		newTextPost: action.text,
		// 	}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			}
		case SET_USER_STATUS:
			return {
				...state,
				status: action.status,
			}
		default:
			return state
	}
}


// функции для actiona постов
export const addPost = (textarea) => ({ type: ADD_POST, textarea })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
// export const updateNewTextPost = (text) => ({ type: UPDATE_NEW_TEXT_POST, text })
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUsersStatus = (status) => ({ type: SET_USER_STATUS, status })

// санки для profile
export const setProfileThunkCreator = (userId) => {
	return async (dispatch) => {
		let data = await profileAPI.profileUsers(userId)
		dispatch(setUsersProfile(data))
	}
}
// санки для получения status
export const setStatusThunkCreator = (userId) => {
	return async (dispatch) => {
		let data = await profileAPI.profileStatus(userId)
		dispatch(setUsersStatus(data))
	}
}
// санки для обновления status
export const updateStatusThunkCreator = (status) => {
	return async (dispatch) => {
		let data = await profileAPI.updateStatus(status)
		if (data.resultCode === 0) {
			dispatch(setUsersStatus(status))
		}
	}
}


export default profileReducer