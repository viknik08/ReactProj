import { createStore, combineReducers, applyMiddleware } from 'redux'
import dialogeReducer from './dialogReducer'
import profileReducer from './profileReducer'
import findUsersReducer from './findUsersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
	dialogePage: dialogeReducer,
	profilePage: profileReducer,
	findUsersPage: findUsersReducer,
	auth: authReducer

})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store