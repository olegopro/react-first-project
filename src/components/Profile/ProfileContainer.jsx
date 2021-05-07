import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { getUserProfile } from '../../Redux/profile-reducer'
import Profile from './Profile'

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) userId = 2
		this.props.getUserProfile(userId)
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile} />
	}
}

let mapStateToProps = state => ({
	profile: state.profilePage.profile
})

export default compose(connect(mapStateToProps, { getUserProfile }), withRouter)(ProfileContainer)
