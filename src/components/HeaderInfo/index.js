import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Mypage from '../../pages/Mypage';
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
            <Mypage />
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


export default HeaderInfo;
