import { combineReducers } from 'redux'
import todosReducer from './todosReducer'
import visibilityFilterReducer from './visibilityFilterReducer'
import playersReducer from './playersReducer'
import rankingPermissionCheck from '../pages/MyPage/reducers/rankingPermissionCheck'
import hpPermissionCheck from '../pages/MyPage/reducers/hpPermissionCheck'
import genderSelect from '../pages/MyPage/reducers/genderSelect'
import changeNameText from '../pages/MyPage/reducers/changeNameText'

const reducers = combineReducers({
  todosReducer,
  visibilityFilterReducer,
  playersReducer,
  rankingPermissionCheck,
  hpPermissionCheck,
  genderSelect,
  changeNameText

})

export default reducers
