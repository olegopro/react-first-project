const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
	messages: [
		{
			id: 1,
			message: 'Hello my name is'
		},
		{
			id: 2,
			message: 'How is your it kamasutra'
		},
		{
			id: 3,
			message: 'Yo'
		},
		{
			id: 4,
			message: 'Bye bye'
		}
	],
	dialogs: [
		{
			id: 1,
			name: 'Oleg'
		},
		{
			id: 2,
			name: 'Dima'
		},
		{
			id: 3,
			name: 'Olga'
		},
		{
			id: 4,
			name: 'Valentina'
		}
	],
	newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.body
			}

		case SEND_MESSAGE:
			let body = state.newMessageBody
			return {
				...state,
				newMessageBody: '',
				messages: [...state.messages, { id: 5, message: body }]
			}

		default:
			return state
	}
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = body => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body: body
})

export default dialogsReducer
