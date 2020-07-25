import { createStore, combineReducers } from 'redux'
import dialogeReducer from './dialogReducer'
import profileReducer from './profileReducer'

let reducers = combineReducers({
	dialogePage: dialogeReducer,
	profilePage: profileReducer
})
let store = createStore(reducers)

export default store