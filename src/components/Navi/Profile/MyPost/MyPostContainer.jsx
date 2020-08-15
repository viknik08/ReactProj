import React from 'react';
import MyPost from './MyPost'
import { addPost } from '../../../../Redux/profileReducer'
import { connect } from 'react-redux'
import { getPost } from '../../../../Redux/Selectors/profileSelector';

let mapStateToProps = (state) => {
	return {
		post: getPost(state),
	}
}

export default connect(mapStateToProps, { addPost })(MyPost)


