import { WithSuspense } from 'hoc/WithSuspense'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import './App.css'
import Preloader from './components/common/Preloader/Preloader'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import UsersContainer from './components/Users/UsersContainer'
import { initializeApp } from './Redux/app-reducer'

// import DialogsContainer from './components/Dialogs/DialogsContainer'
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

// import ProfileContainer from './components/Profile/ProfileContainer'
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends Component {
	componentDidMount() {
		this.props.initializeApp()
	}

	render() {
		if (!this.props.initialized) return <Preloader />

		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar />

				<div className="app-wrapper-content">
					<Route path="/dialogs" render={WithSuspense(DialogsContainer)} />
					<Route path="/profile/:userId?" render={WithSuspense(ProfileContainer)} />
					<Route path="/users" render={() => <UsersContainer />} />
					<Route path="/login" render={() => <Login />} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App)
