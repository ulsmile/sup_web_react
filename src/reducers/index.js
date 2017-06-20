import { combineReducers } from 'redux'
import todosReducer from './todosReducer'
import visibilityFilterReducer from './visibilityFilterReducer'
import playersReducer from './playersReducer'
import check from '../pages/MyPage/reducers'

const reducers = combineReducers({
  todosReducer,
  visibilityFilterReducer,
  playersReducer,
  check
})

export default reducers
