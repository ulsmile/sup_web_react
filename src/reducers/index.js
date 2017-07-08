import { combineReducers } from 'redux'
import myPageReducers from '../pages/MyPage/reducers'
import loginReducers from '../pages/Login/reducers'
import chartReducers from '../pages/Chart/reducers'
import recordTimeReducers from '../pages/RecordTime/reducers'
import rankingReducers from '../pages/Ranking/reducers'
import commonsReducers from '../commons/reducers'
import postSubreddit from '../commons/reducers/postSubreddit'

const reducers = combineReducers({
  myPageReducers,
  loginReducers,
  chartReducers,
  rankingReducers,
  recordTimeReducers,
  commonsReducers,
  postSubreddit
})

export default reducers
