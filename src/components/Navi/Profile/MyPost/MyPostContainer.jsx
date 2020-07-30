import React from 'react';
import MyPost from './MyPost'
import { addPost, updateNewTextPost } from '../../../../Redux/profileReducer'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
	return {
		post: state.profilePage.post,
		newTextPost: state.profilePage.newTextPost
	}
}
// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		addPost: () => {
// 			dispatch(ActionCreator())
// 		},
// 		updateNewTextPost: (text) => {
// 			dispatch(ActionCreator(text))
// 		}
// 	}
// }

export default connect(mapStateToProps, { updateNewTextPost, addPost })(MyPost)


