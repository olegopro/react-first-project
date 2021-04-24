import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = props => {
	let postsElements = props.posts.map(post => {
		return <Post message={post.message} />
	})

	let newPostElement = React.createRef()

	let onAddPost = () => {
		props.addPost()
	}

	let onPostChange = () => {
		let text = newPostElement.current.value
		props.updateNewPostText(text)
	}

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
				</div>

				<div>
					<button onClick={onAddPost}>Add post</button>
					<button>Remove</button>
				</div>
			</div>
			<div className={classes.posts}>{postsElements}</div>
		</div>
	)
}

export default MyPosts
