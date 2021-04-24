import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
	_state: {
		profilePage: {
			posts: [
				{
					id: 1,
					message: 'Hello my name is',
					likesCount: 12
				},
				{
					id: 2,
					message: 'How is your it kamasutra',
					likesCount: 15
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
			newPostText: 'it-kamasutra.com'
		},
		dialogsPage: {
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
		},
		sidebar: {}
	},

	_callSubscriber() {
		console.log('State changed')
	},

	getState() {
		return this._state
	},

	subscribe(observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._callSubscriber(this._state)
	}
}

export default store
window.store = store
