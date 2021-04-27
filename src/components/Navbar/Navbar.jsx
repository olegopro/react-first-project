import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

function Navbar() {
	return (
		<nav className={classes.nav}>
			<div className={classes.item}>
				<NavLink to="/profile" activeClassName={classes.active}>
					Profiles
				</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/dialogs" activeClassName={classes.active}>
					Dialogs
				</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/users" activeClassName={classes.active}>
					Users
				</NavLink>
			</div>
			<div className={classes.item}>
				<a>News</a>
			</div>
			<div className={classes.item}>
				<a>Music</a>
			</div>
			<div className={classes.item}>
				<a>Settings</a>
			</div>
		</nav>
	)
}

export default Navbar
