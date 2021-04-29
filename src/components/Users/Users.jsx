import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/avatar.png'
import styles from './Users.module.css'

let Users = props => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return (
		<div>
			<div>
				{pages.map(p => {
					return (
						<span
							className={props.currentPage === p && styles.selectedPage}
							onClick={() => props.onPageChanged(p)}
						>
							{p}
						</span>
					)
				})}
			</div>

			{props.users.map(user => (
				<div key={user.id}>
					<span>
						<div>
							<NavLink to={'/profile/' + user.id}>
								<img
									src={user.photos.small != null ? user.photos.small : userPhoto}
									className={styles.userPhoto}
									alt=""
								/>
							</NavLink>
						</div>
					</span>
					<span>
						<div>
							{user.followed ? (
								<button
									onClick={() => {
										axios
											.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
												withCredentials: true,
												headers: {
													'API-KEY': 'ad0f84c1-3da2-4456-a57c-22a1731f6aba'
												}
											})
											.then(response => {
												if (response.data.resultCode == 0) {
													props.unfollow(user.id)
												}
											})
									}}
								>
									unfollow
								</button>
							) : (
								<button
									onClick={() => {
										axios
											.post(
												`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
												{},
												{
													withCredentials: true,
													headers: {
														'API-KEY': 'ad0f84c1-3da2-4456-a57c-22a1731f6aba'
													}
												}
											)
											.then(response => {
												if (response.data.resultCode == 0) {
													props.follow(user.id)
												}
											})
									}}
								>
									follow
								</button>
							)}
						</div>
					</span>
					<span>
						<span>
							<div>{user.name}</div>

							<div>{user.status}</div>
						</span>
						<span>
							<div>{'user.location.city'}</div>
							<div>{'user.location.country'}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	)
}

export default Users
