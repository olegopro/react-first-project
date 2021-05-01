import React from 'react'
import { connect } from 'react-redux'
import { userAPI } from '../../api/api'
import {
	follow,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toggleIsFetching,
	unfollow
} from '../../Redux/users-reducer'
import Preloader from '../common/Preloader/Preloader'
import Users from './Users'

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)

		userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
			this.props.setTotalUsersCount(data.totalCount)
		})
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)

		userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
		})
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
				/>
			</>
		)
	}
}

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching
})(UsersContainer)
