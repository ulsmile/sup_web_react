var React = require('react');
var ReactDOM = require('react-dom');
//import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderInfo from './pages/Header';
import AddInfo from './pages/Add';
import MypageInfo from './pages/Mypage';
import ChartInfo from './pages/Chart';
import RecordingTimeInfo from './pages/RecordingTime';
import RankingInfo from './pages/Ranking';
import injectTapEventPlugin from "react-tap-event-plugin"

injectTapEventPlugin();

ReactDOM.render(
  <Router>
    <div>
      <HeaderInfo />
      <Route path="/add" component={AddInfo}/>
      <Route path="/chart" component={ChartInfo}/>
      <Route path="/recording_time" component={RecordingTimeInfo}/>
      <Route path="/ranking" component={RankingInfo}/>
    </div>
  </Router>,
  document.getElementById('app')
);

