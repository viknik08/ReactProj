import React from 'react';
import MyPost from './MyPost'
import { addPostActionCreator, updateNewTextPostActionCreator } from '../../../../Redux/profileReducer'



const MyPostConteiner = (props) => {

	let state = props.store.getState()

	// функции для послания постов и взаимодействия их с BLL
	let addPost = () => {
		props.store.dispatch(addPostActionCreator())
	}
	let onPostChange = (text) => {
		props.store.dispatch(updateNewTextPostActionCreator(text))
	}

	return <MyPost updateNewTextPost={onPostChange} addPost={addPost}
		state={state.profilePage}
	/>

}

export default MyPostConteiner


