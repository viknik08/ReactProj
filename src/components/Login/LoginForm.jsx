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
<<<<<<< HEAD
			<div className={s.btninput}>
				<button className={s.input_btn}>
					{!props.error ? <span>Войти</span> : props.error}
				</button>
=======
			<div>
				<button>Войти</button>
>>>>>>> parent of 4c2a6d9... 77+78 stage form login
			</div>

		</form>
	)
}

export const LoginReduxForm = reduxForm({
	form: 'login' //уникальное строковое имя
})(LoginForm)

export default LoginForm


