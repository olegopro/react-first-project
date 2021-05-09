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
	]
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody
			return {
				...state,
				messages: [...state.messages, { id: 5, message: body }]
			}

		default:
			return state
	}
}

export const sendMessageCreator = newMessageBody => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer
