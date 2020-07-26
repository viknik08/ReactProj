import { createStore, combineReducers } from 'redux'
import dialogeReducer from './dialogReducer'
import profileReducer from './profileReducer'
import findUsersReducer from './findUsersReducer'

let reducers = combineReducers({
	dialogePage: dialogeReducer,
	profilePage: profileReducer,
	findUsersPage: findUsersReducer

})
let store = createStore(reducers)

export default store