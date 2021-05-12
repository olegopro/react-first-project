import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/avatar.png'
import styles from './Users.module.css'

let User = ({ user, followingInProgress, unfollow, follow }) => {
	return (
		<div>
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
							disabled={followingInProgress.some(id => id === user.id)}
							onClick={() => {
								unfollow(user.id)
							}}
						>
							unfollow
						</button>
					) : (
						<button
							disabled={followingInProgress.some(id => id === user.id)}
							onClick={() => {
								follow(user.id)
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
	)
}

export default User
