import { combineReducers } from 'redux'
import todosReducer from './todosReducer'
import visibilityFilterReducer from './visibilityFilterReducer'
import playersReducer from './playersReducer'
import rankingPermissionCheck from '../pages/MyPage/reducers/rankingPermissionCheck'
import hpPermissionCheck from '../pages/MyPage/reducers/hpPermissionCheck'
import genderSelect from '../pages/MyPage/reducers/genderSelect'
import changeNameText from '../pages/MyPage/reducers/changeNameText'
import loginButton from '../pages/Login/reducers/loginButton'
import hardChecked from '../pages/Chart/reducers/hardChecked'
import raceChecked from '../pages/Chart/reducers/raceChecked'
import inflatableChecked from '../pages/Chart/reducers/inflatableChecked'
import distanceSelect from '../pages/Chart/reducers/distanceSelect'
import termSelect from '../pages/Chart/reducers/termSelect'
import timeRecord from '../pages/RecordTime/reducers/timeRecord'
import recordTimeDistanceSelect from '../pages/RecordTime/reducers/recordTimeDistanceSelect'
import recordTimeBoardTypesSelect from '../pages/RecordTime/reducers/recordTimeBoardTypesSelect'
import registerButton from '../pages/RecordTime/reducers/registerButton'
import rankingDistanceSelect from '../pages/Ranking/reducers/rankingDistanceSelect'
import rankingTermSelect from '../pages/Ranking/reducers/rankingTermSelect'
import maleChecked from '../pages/Ranking/reducers/maleChecked'
import femaleChecked from '../pages/Ranking/reducers/femaleChecked'
import rankingHardChecked from '../pages/Ranking/reducers/rankingHardChecked'
import rankingRaceChecked from '../pages/Ranking/reducers/rankingRaceChecked'
import rankingInflatableChecked from '../pages/Ranking/reducers/rankingInflatableChecked'

const reducers = combineReducers({
  todosReducer,
  visibilityFilterReducer,
  playersReducer,
  rankingPermissionCheck,
  hpPermissionCheck,
  genderSelect,
  changeNameText,
  loginButton,
  hardChecked,
  raceChecked,
  inflatableChecked,
  distanceSelect,
  termSelect,
  timeRecord,
  recordTimeDistanceSelect,
  recordTimeBoardTypesSelect,
  registerButton,
  rankingDistanceSelect,
  rankingTermSelect,
  maleChecked,
  femaleChecked,
  rankingHardChecked,
  rankingRaceChecked,
  rankingInflatableChecked
})

export default reducers
