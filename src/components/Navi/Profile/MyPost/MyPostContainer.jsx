import React from 'react';
import MyPost from './MyPost'
import { addPost } from '../../../../Redux/profileReducer'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
	return {
		post: state.profilePage.post,
	}
}

export default connect(mapStateToProps, { addPost })(MyPost)


