import React from 'react'
import { reduxForm, Field } from 'redux-form'

const LoginForm = (props) => {

	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={'input'} type='text' name='login' placeholder='введите логин' />
			</div>
			<div>
				<Field component={'input'} type='password' name='password' placeholder='введите пароль' />
			</div>
			<div>
				<Field component={'input'} type='checkbox' name='Remember me' /> <span>Запомнить меня</span>
			</div>
			<div>
				<button>Войти</button>
			</div>

		</form>
	)
}

export const LoginReduxForm = reduxForm({
	form: 'login' //уникальное строковое имя
})(LoginForm)

export default LoginForm


