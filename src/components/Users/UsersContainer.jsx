import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow } from '../../Redux/users-reducer'
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount,
	getUsers
} from '../../Redux/users-selectors'
import Preloader from '../common/Preloader/Preloader'
import Users from './Users'

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = pageNumber => {
		this.props.getUsers(pageNumber, this.props.pageSize)
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}

				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					users={this.props.users}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		)
	}
}

let mapStateToProps = state => {
	return {
		users: getUsers(state),
		// users: getUsersSuperSelector(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default compose(
	connect(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPage,
		toggleFollowingProgress,
		getUsers: requestUsers
	})
)(UsersContainer)
