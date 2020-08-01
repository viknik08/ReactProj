import { createStore, combineReducers } from 'redux'
import dialogeReducer from './dialogReducer'
import profileReducer from './profileReducer'
import findUsersReducer from './findUsersReducer'
import authReducer from './authReducer'

let reducers = combineReducers({
	dialogePage: dialogeReducer,
	profilePage: profileReducer,
	findUsersPage: findUsersReducer,
	auth: authReducer

})
let store = createStore(reducers)
window.store = store

export default store