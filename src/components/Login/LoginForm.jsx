import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../common/FormsControl/FormsControl'
import { required } from '../../utils/validators/validators'
import s from './Login.module.css'

const LoginForm = (props) => {

	return (
		<form onSubmit={props.handleSubmit} >
			<div className={s.input_form}>
				<Field className={s.input} component={Input} type='text' name='email' placeholder='введите email' validate={[required]} />
			</div>
			<div className={s.input_form}>
				<Field className={s.input} component={Input} type='password' name='password' placeholder='введите password' validate={[required]} />
			</div>
			<div className={s.input_form_box}>
				<Field className={s.input} component={Input} type='checkbox' name='rememberMe' /> <span>Запомнить меня</span>
			</div>
			<div className={`${s.btninput} ${'btn'}`}>
				<button>
					{!props.error ? <span>Войти</span> : props.error}
				</button>
			</div>

		</form>
	)
}

export const LoginReduxForm = reduxForm({
	form: 'login' //уникальное строковое имя
})(LoginForm)

export default LoginForm


