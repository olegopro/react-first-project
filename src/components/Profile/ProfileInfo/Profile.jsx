import React from 'react'
import MyPostsContainer from '../MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo'

const Profile = props => {
	return (
		<div>
			<ProfileInfo
				isOwner={props.isOwner}
				profile={props.profile}
				status={props.status}
				saveProfile={props.saveProfile}
				savePhoto={props.savePhoto}
				updateStatus={props.updateStatus}
			/>
			<MyPostsContainer />
		</div>
	)
}

export default Profile
