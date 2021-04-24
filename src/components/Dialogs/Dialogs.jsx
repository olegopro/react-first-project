import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = props => {
	let state = props.dialogsPage

	let dialogsElements = state.dialogs.map(dialog => {
		return <DialogItem name={dialog.name} id={dialog.id} />
	})

	let messagesElements = state.messages.map(message => {
		return <Message message={message.message} id={message.id} />
	})

	let newMessageBody = state.newMessageBody

	let onSendMessageClick = () => {
		props.sendMessage()
	}

	let onNewMessageChange = e => {
		let body = e.target.value
		props.updateNewMessageBody(body)
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogsElements}</div>
			<div className={classes.messages}>
				<div>{messagesElements}</div>
				<div>
					<div>
						<textarea
							placeholder="Enter your message"
							value={newMessageBody}
							onChange={onNewMessageChange}
						></textarea>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
