import { createStore } from 'redux'
import todoApp from '../reducers'
import { loadState, saveState } from '../api/localStorage'
import _ from 'underscore'

const throttle = _.throttle


const configureStore = ( reducers ) => {
	const persistedState = loadState()
	const store = createStore(reducers, persistedState)

	// Listen state change and save it to localStorage
	store.subscribe( throttle(() => {
		saveState(store.getState())
	}, 1000))

	return store
}

export default configureStore
