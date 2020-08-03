import { userAPI } from '../API/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

// дефолтные значения для profilePage
let initState = {
	post: [
		{ id: '1', message: 'Hi, who are you?', likeCount: '10' },
		{ id: '2', message: 'Yeah, man! I miss you nigga', likeCount: '12' },
		{ id: '3', message: 'Fuck off', likeCount: '9' },
	],
	newTextPost: '',
	profile: null,
}

const profileReducer = (state = initState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = state.newTextPost
			return {
				...state,
				newTextPost: '',
				post: [...state.post, { id: 5, message: newPost, likeCount: 0, }],
			}

		case UPDATE_NEW_TEXT_POST:
			return {
				...state,
				newTextPost: action.postText,
			}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			}
		default:
			return state
	}
}


// функции для actiona постов
export const addPost = () => ({ type: ADD_POST })
export const updateNewTextPost = (text) => ({ type: UPDATE_NEW_TEXT_POST, text, })
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

// санки для profile
export const setProfileThunkCreator = (userId) => {
	return (dispatch) => {
		userAPI.profileUsers(userId).then(data => {
			dispatch(setUsersProfile(data))
		})
	}
}

export default profileReducer