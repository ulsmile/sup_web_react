import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import players from './players'
//import mypage from './mypage'
import mypageCheck from './mypageCheck'

const todoApp = combineReducers({
   todos,
   visibilityFilter,
   players,
   mypageCheck
})

export default todoApp
