import React from 'react';
import MyPost from './MyPost'
import { addPostActionCreator, updateNewTextPostActionCreator } from '../../../../Redux/profileReducer'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
	return {
		post: state.profilePage.post,
		newTextPost: state.profilePage.newTextPost
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		updateNewTextPost: (text) => {
			dispatch(updateNewTextPostActionCreator(text))
		}
	}
}
const MyPostConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostConteiner


