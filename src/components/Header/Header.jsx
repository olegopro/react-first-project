import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

function Header(props) {
	return (
		<header className={classes.header}>
			<img src="https://bit.ly/3cul3r8" alt="" />
			<div className={classes.loginBlock}>
				{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	)
}

export default Header
