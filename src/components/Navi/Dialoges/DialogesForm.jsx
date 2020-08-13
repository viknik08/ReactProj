import React from 'react';
import s from './Dialoges.module.css'
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';




const DialogesForm = (props) => {

	return (
		<div >
			<form onSubmit={props.handleSubmit}>
				<Field component="textarea" name="texarea" placeholder="Введите текст" className={s.input_text} validate={required} />
				<div>
					<button className={s.input_btn} >send</button>
				</div>
			</form>

		</div>
	)
}

export const DialogesReduxForm = reduxForm({
	form: 'dialoges' //уникальное строковое имя
})(DialogesForm)

export default DialogesForm