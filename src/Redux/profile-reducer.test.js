// @ts-nocheck
const { default: profileReducer, addPostActionCreator } = require("./profile-reducer")

it('render without crashing', ()=>{
	let action = addPostActionCreator('kamasutra')

	let state = {
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
	]
}

	let newState = profileReducer(state ,action)

	expect(newState.posts.length).toBe(5)
})