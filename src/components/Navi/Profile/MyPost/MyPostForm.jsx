import React from 'react';
import Post from '../Post/Post'
import s from './MyPost.module.css'
import { reduxForm, Field } from 'redux-form';



const MyPostForm = (props) => {


	return (

		<div>
			<form onSubmit={props.handleSubmit} >
				<div className={s.newpost__input}>
					<Field component="textarea" name="textarea" placeholder="Введите текст" />
				</div>
				<div className={s.newpost__btn}>
					<button  >add post</button>
				</div>
			</form>
		</div>
	)
}
export const MyPostReduxForm = reduxForm({ form: 'MyPost ' })(MyPostForm)

export default MyPostForm


