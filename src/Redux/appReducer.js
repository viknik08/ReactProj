import { authAPI } from '../API/api'
import { stopSubmit } from 'redux-form'
import { setAuthUserData } from './authReducer'


const SET_INITIALIZED = 'SET_INITIALIZED '

// дефолтные значения 
let initState = {
	initialized: false,

}

const appReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_INITIALIZED:
			return {
				...state,
				initialized: true,
			}

		default:
			return state
	}
}


// функции для actiona сообщений
export const setInitializedData = () => ({ type: SET_INITIALIZED, })

// санки для header 
export const initializeApp = () => {
	return (dispatch) => {
		let promise = dispatch(setAuthUserData())
		Promise.all([promise]).then(() => {
			dispatch(setInitializedData())
		})
	}
}
export default appReducer

