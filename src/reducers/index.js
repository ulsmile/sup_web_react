import { combineReducers } from 'redux'
import myPageReducers from '../pages/MyPage/reducers'
import loginReducers from '../pages/Login/reducers'
import chartReducers from '../pages/Chart/reducers'
import recordTimeReducers from '../pages/RecordTime/reducers'
import rankingReducers from '../pages/Ranking/reducers'
import postsBySubreddit from '../commons/reducers/postsBySubreddit'
//import selectedSubreddit from '../commons/reducers/selectedSubreddit'

const reducers = combineReducers({
  myPageReducers,
  loginReducers,
  chartReducers,
  rankingReducers,
  recordTimeReducers,
//  selectedSubreddit,
  postsBySubreddit
})

export default reducers
