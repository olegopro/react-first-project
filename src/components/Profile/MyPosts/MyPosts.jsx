import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					name="newPostTexts"
					component={Textarea}
					validate={[required, maxLength10]}
					placeholder="Post message"
				/>
			</div>

			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

const MyPosts = props => {
	let postsElements = props.posts.map(post => {
		return <Post key={post.id} message={post.message} />
	})

	// let newPostElement = React.createRef()

	let onAddPost = values => {
		props.addPost(values.newPostTexts)
	}

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<AddNewPostFormRedux onSubmit={onAddPost} />
			<div className={classes.posts}>{postsElements}</div>
		</div>
	)
}

export default MyPosts
