import './App.css'

import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import { Route } from 'react-router'

const App = props => {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />

			<div className="app-wrapper-content">
				<Route path="/dialogs" render={() => <Dialogs store={props.store} />} />

				<Route
					path="/profile"
					render={() => {
						return <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />
					}}
				/>
			</div>
		</div>
	)
}

export default App
