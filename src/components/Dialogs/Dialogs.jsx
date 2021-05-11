import React from 'react'
import { Redirect } from 'react-router'
import AddMessageForm from './AddMessageForm/AddMessageForm'
import DialogItem from './DialogItem/DialogsItem'
import classes from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = props => {
	let state = props.dialogsPage

	let dialogsElements = state.dialogs.map(dialog => {
		return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
	})

	let messagesElements = state.messages.map(message => {
		return <Message message={message.message} id={message.id} key={message.id} />
	})

	// let newMessageBody = state.newMessageBody

	let addNewsMessage = values => {
		props.sendMessage(values.newMessageBody)
	}

	if (!props.isAuth) return <Redirect to={'/login'} />

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogsElements}</div>
			<div className={classes.messages}>
				<div>{messagesElements}</div>
			</div>
			<AddMessageForm onSubmit={addNewsMessage} />
		</div>
	)
}

export default Dialogs
