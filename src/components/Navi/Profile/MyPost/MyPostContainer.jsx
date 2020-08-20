import React from 'react';
import MyPost from './MyPost'
import { addPost } from '../../../../Redux/profileReducer'
import { connect } from 'react-redux'
import { getPost, getProfile } from '../../../../Redux/Selectors/profileSelector';

let mapStateToProps = (state) => {
	return {
		post: getPost(state),
		profile: getProfile(state),


	}
}

export default connect(mapStateToProps, { addPost })(MyPost)


