import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

function MyPosts() {
	return (
		<div>
			my posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
				<button>Remove</button>
			</div>
			<div className={classes.posts}>
				<Post message="Hi " />
				<Post message="Goodbye" />
			</div>
		</div>
	)
}

export default MyPosts
