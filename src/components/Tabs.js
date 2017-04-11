import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddInfo from '../pages/Add';
import MypageInfo from '../pages/Mypage';
import ChartInfo from '../pages/Chart';
import RecordingTimeInfo from '../pages/RecordingTime';
import RankingInfo from '../pages/Ranking';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};


const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="Mypage" value="0">
      <div>
        <MypageInfo />
      </div>
    </Tab>
    <Tab label="Chart" value="1">
      <div>
        <ChartInfo />
      </div>
    </Tab>
    <Tab label="RecordingTime" value="2">
      <div>
        <RecordingTimeInfo />
      </div>
    </Tab>
    <Tab label="RankingInfo" value="3">
      <div>
        <RankingInfo />
      </div>
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;
//const TabsExampleSimple = () => (
//  <Tabs>
//    <Tab label="Mypage" value="0">
//      <div>
//        <ul>
//          <li>
//            <Link to="/">
//              Mypage
//            </Link>
//          </li>
//          <li>
//            <Link to="/add">
//              Add
//            </Link>
//          </li>
//        </ul>
//      </div>
//    </Tab>
//    <Tab label="Chart" value="1">
//      <div>
//        <li>
//          <Link to="/chart">
//            Chart
//          </Link>
//        </li>
//      </div>
//    </Tab>
//    <Tab label="RecordingTime" value="2">
//      <div>
//        <li>
//          <Link to="/recording_time">
//            RecordingTime
//          </Link>
//        </li>
//      </div>
//    </Tab>
//    <Tab label="Ranking" value="3">
//      <div>
//        <li>
//          <Link to="/ranking">
//            Ranking
//          </Link>
//        </li>
//      </div>
//    </Tab>
//  </Tabs>
//);
