import classes from './../Dialogs.module.css'

const Message = props => {
    console.log(props)
    return <div className={classes.dialog}>{props.message}</div>
}

export default Message
