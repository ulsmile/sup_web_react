import { combineReducers } from 'redux'
import todosReducer from './todosReducer'
import visibilityFilterReducer from './visibilityFilterReducer'
import playersReducer from './playersReducer'

const combinedReducers = combineReducers({
  todosReducer,
  visibilityFilterReducer,
	playersReducer
})

export default combinedReducers
