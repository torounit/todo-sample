import { createStore, applyMiddleware } from 'redux'
import { loadState, saveState } from '../api/localStorage'
import _ from 'underscore'
import createLogger from 'redux-logger';
const logger = createLogger();

const throttle = _.throttle;


const configureStore = ( reducers ) => {
	const persistedState = loadState()
	const store = createStore(reducers, persistedState, applyMiddleware(logger))

	// Listen state change and save it to localStorage
	store.subscribe( throttle(() => {
		saveState(store.getState())
	}, 1000))

	return store
}

export default configureStore
