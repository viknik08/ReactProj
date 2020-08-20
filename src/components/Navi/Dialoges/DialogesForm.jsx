import React from 'react';
import s from './Dialoges.module.css'
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControl/FormsControl';




const DialogesForm = (props) => {

	return (
		<div >
			<form onSubmit={props.handleSubmit}>
				<div className={s.input_text}>
					<Field component={Textarea} name="texarea" placeholder="Введите текст" validate={required} />
				</div>
				<div className={`${s.input_btn} ${'btn'}`} >
					<button><span>send</span> </button>
				</div>
			</form>

		</div>
	)
}

export const DialogesReduxForm = reduxForm({
	form: 'dialoges' //уникальное строковое имя
})(DialogesForm)

export default DialogesForm