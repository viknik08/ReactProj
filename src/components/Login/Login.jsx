import React from 'react'
import { Redirect } from 'react-router-dom';
import { LoginReduxForm } from './LoginForm';


const Login = () => {
	// if (props.isAuth) {
	// 	return <Redirect to={'/profile'} />
	// } 
	const onSubmit = (formData) => {

	}
	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>



}

export default Login

