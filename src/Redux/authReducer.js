const SET_USER_DATA = 'SET_USER_DATA'

// дефолтные значения для dialogePage
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


export default authReducer