import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import TabsExampleSimple from '../components/Tabs';
import {Tabs, Tab} from 'material-ui/Tabs';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import AddInfo from './Add';
import MypageInfo from './Mypage';
import ChartInfo from './Chart';
import RecordingTimeInfo from './RecordingTime';
import RankingInfo from './Ranking';
import injectTapEventPlugin from "react-tap-event-plugin"

injectTapEventPlugin();

const HeaderInfo = () => (
  <MuiThemeProvider>
    <div>
      <img src="src/images/wasepa_logo.jpg" width="120" height="120" />
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
    </div>
  </MuiThemeProvider>
);

      //<TabsExampleControlled />

export default HeaderInfo;
