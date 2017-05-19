import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Mypage from '../../../pages/Mypage'
import Chart from '../../../pages/Chart'
import RecordTime from '../../../pages/RecordTime'
import Ranking from '../../../pages/Ranking'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const HeaderTab = () => (
  <MuiThemeProvider>
    <div>
      <Tabs>
        <Tab label="Mypage" value="0">
          <div>
            <Mypage />
          </div>
        </Tab>
        <Tab label="Chart" value="1">
          <div>
            <Chart />
          </div>
        </Tab>
        <Tab label="RecordTime" value="2">
          <div>
            <RecordTime />
          </div>
        </Tab>
        <Tab label="Ranking" value="3">
          <div>
            <Ranking />
          </div>
        </Tab>
      </Tabs>
    </div>
  </MuiThemeProvider>
);


export default HeaderTab
