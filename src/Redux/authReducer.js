import { authAPI } from '../API/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA'

// дефолтные значения
let initState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	isFatching: false,
}

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			}

		default:
			return state
	}
}


// функции для actiona сообщений
export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, payload: { userId, login, email, isAuth } })

// санки для проверки авторизации
export const setAuthThunkCreator = () => {
	return async (dispatch) => {
		let data = await authAPI.authUsers()
		if (data.resultCode === 0) {
			let { id, login, email, } = data.data
			dispatch(setAuthUserData(id, login, email, true))
		}
	}
}

// санки для login 
export const loginThunkCreator = (email, password, rememberMe) => {
	return async (dispatch) => {
		let data = await authAPI.login(email, password, rememberMe)
		if (data.resultCode === 0) {
			dispatch(setAuthThunkCreator())
		} else {
			let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
			dispatch(stopSubmit('login', { _error: message })) //для выявления ошибки при неправильном вводе логина или пасс
		}
	}
}
// санки для logout
export const logoutThunkCreator = () => {
	return async (dispatch) => {
		let data = await authAPI.logout()
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	}
}

export default authReducer