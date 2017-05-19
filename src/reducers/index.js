import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import players from './players'
//import mypage from './mypage'
import check from './mypageCheck'
import pushButton from './pushButton'

const todoApp = combineReducers({
   todos,
   visibilityFilter,
   players,
   check,
   pushButton
})

export default todoApp
