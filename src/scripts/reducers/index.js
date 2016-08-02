import { combineReducers } from 'redux'
import todos from './todos'
import input from './input'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
	todos,
	input,
	visibilityFilter
})

export default todoApp