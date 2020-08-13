import { createStore, combineReducers, applyMiddleware } from 'redux'
import dialogeReducer from './dialogReducer'
import profileReducer from './profileReducer'
import findUsersReducer from './findUsersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer'

let reducers = combineReducers({
	dialogePage: dialogeReducer,
	profilePage: profileReducer,
	findUsersPage: findUsersReducer,
	auth: authReducer,
	app: appReducer,
	form: formReducer,
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store