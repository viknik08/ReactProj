import React from 'react';
import s from './MyPost.module.css'
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validators/validators'
import { Textarea } from '../../../common/FormsControl/FormsControl'

const maxLength10 = maxLengthCreator(10)
const MyPostForm = (props) => {
	return (

		<div>
			<form onSubmit={props.handleSubmit} >
				<div className={s.newpost__input}>
					<Field component={Textarea} name="textarea" placeholder="Введите текст" validate={[required, maxLength10]} />
				</div>
				<div className={`${s.newpost__btn} ${'btn'}`}>
					<button>
						{!props.error ? <span>add post</span> : props.error}
					</button>
				</div>
			</form>
		</div>
	)
}
export const MyPostReduxForm = reduxForm({ form: 'MyPost ' })(MyPostForm)

export default MyPostForm


