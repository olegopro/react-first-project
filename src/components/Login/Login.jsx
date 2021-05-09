import { React } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../Redux/auth-reducer'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'
import style from '../common/FormsControls/FormControl.module.css'

const LoginForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder="Email" name="email" validate={[required]} component={Input} />
			</div>
			<div>
				<Field placeholder="Password" validate={[required]} name="password" type="password" component={Input} />
			</div>
			<div>
				<Field type="checkbox" component={Input} name="remeberMe" />
				remember me
			</div>
			{props.error && <div className={style.formSummaryError}>{props.error}</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = props => {
	const onSubmit = formData => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}

	if (props.isAuth) return <Redirect to="/profile" />

	return (
		<div>
			<h1>LOGIN</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}
const mapStateToProps = state => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)
