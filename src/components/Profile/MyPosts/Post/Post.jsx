import classes from "./Post.module.css"

function Post(props) {
    return (
        <div className={classes.item}>
            <img src="https://placeimg.com/640/480/people" alt="avatar" />
			
            {props.message}
            <div>
                <span>like</span>
                <span>dislike</span>
            </div>
        </div>
    )
}

export default Post
