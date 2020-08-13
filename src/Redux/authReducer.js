import { authAPI } from '../API/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA'

// дефолтные значения для 
let initState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	isFarching: false,
}

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true
			}

		default:
			return state
	}
}


// функции для actiona сообщений
export const setAuthUserData = (userId, login, email) => ({ type: SET_USER_DATA, data: { userId, login, email } })

// санки для header 
export const setAuthThunkCreator = () => {
	return (dispatch) => {
		authAPI.authUsers().then(data => {
			if (data.resultCode == 0) {
<<<<<<< HEAD
				let { id, login, email, } = data.data
				dispatch(setAuthUserData(id, login, email, true))
			}
		})
	}
}

// санки для login 
export const loginThunkCreator = (email, password, rememberme) => {
	return (dispatch) => {
		authAPI.login(email, password, rememberme).then(data => {
			if (data.resultCode == 0) {
				dispatch(setAuthThunkCreator())
			} else {
				let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
				dispatch(stopSubmit('login', { _error: message })) //для выявления ошибки при неправильном вводе логина или пасс
			}
		})
	}
}
// санки для logout
export const logoutThunkCreator = () => {
	return (dispatch) => {
		authAPI.logout().then(data => {
			if (data.resultCode == 0) {
				dispatch(setAuthThunkCreator(null, null, null, false))
=======
				let { id, login, email } = data.data
				dispatch(setAuthUserData(id, login, email))
>>>>>>> parent of 4c2a6d9... 77+78 stage form login
			}
		})
	}
}

export default authReducer