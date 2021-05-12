import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import appReducer from './app-reducer'
import authReducer from './auth-reducer'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: FormReducer,
	app: appReducer
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
// window.store = store

export default store
