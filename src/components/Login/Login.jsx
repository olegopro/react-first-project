import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { reduxForm } from 'redux-form'
import { login } from '../../Redux/auth-reducer'
import { required } from '../../utils/validators/validators'
import style from '../common/FormsControls/FormControl.module.css'
import { createField, Input } from '../common/FormsControls/FormsControls'

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField('Email', 'email', [required], Input)}
			{createField('Password', 'password', [required], Input, { type: 'password' })}
			{createField(null, 'remeberMe', [], Input, { type: 'checkbox' }, 'Remember me')}
			{captchaUrl && <img src={captchaUrl} alt="" />}
			{captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {})}

			{error && <div className={style.formSummaryError}>{error}</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = props => {
	const onSubmit = formData => {
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}

	if (props.isAuth) return <Redirect to="/profile" />

	return (
		<div>
			<h1>LOGIN</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
		</div>
	)
}
const mapStateToProps = state => ({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)
