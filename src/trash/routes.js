import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddInfo from './pages/Add';
import MypageInfo from './pages/Mypage';
import ChartInfo from './pages/Chart';
import RecordingTimeInfo from './pages/RecordingTime';
import RankingInfo from './pages/Ranking';


const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={MypageInfo}/>
      <Route path="/add" component={AddInfo}/>
      <Route path="/chart" component={ChartInfo}/>
      <Route path="/recording_time" component={RecordingTimeInfo}/>
      <Route path="/ranking" component={RankingInfo}/>
    </div>
  </Router>
);
export default Routes;
