import React from 'react'
import { Redirect } from 'react-router-dom';
import { LoginReduxForm } from './LoginForm';
import { connect } from 'react-redux';
import { loginThunkCreator } from '../../Redux/authReducer'
import s from './Login.module.css'
import { getAuth } from '../../Redux/Selectors/authSelector'


const Login = (props) => {

	const onSubmit = (formData) => {
		props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
	}

	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	}
	return <div className={s.contaner_log}>
		<div className={s.login_block}>
			<div className={s.title}>
				<span> Login</span>
			</div>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	</div>
}
const mapStateToProps = (state) => ({
	isAuth: getAuth(state),
})

export default connect(mapStateToProps, { loginThunkCreator })(Login)

