import { authAPI } from '../API/api'
import { setAuthThunkCreator } from './authReducer'


const SET_INITIALIZED = 'SET_INITIALIZED'

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
export const setInitialized = () => ({ type: SET_INITIALIZED, })

// санки для app
export const setInitializedThunkCreator = () => {
	return (dispatch) => {
		let promise = dispatch(setAuthThunkCreator())
		Promise.all([promise])
			.then(() => {
				dispatch(setInitialized())
			})
	}
}



export default appReducer