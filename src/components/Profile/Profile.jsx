import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts"

function Profile() {
	return (
		<div>
			<div>
				<img src="https://placeimg.com/640/480/any" alt="main bg" />
			</div>
			<div>
				ava + desk
			</div>

			<MyPosts />

		</div>
	)
}

export default Profile
