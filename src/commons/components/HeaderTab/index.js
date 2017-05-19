import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Home from '../../../pages/Home'

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
          </div>
        </Tab>
        <Tab label="Chart" value="1">
          <div>
            <Home />
          </div>
        </Tab>
        <Tab label="RecordingTime" value="2">
          <div>
          </div>
        </Tab>
        <Tab label="RankingInfo" value="3">
          <div>
          </div>
        </Tab>
      </Tabs>
    </div>
  </MuiThemeProvider>
);


export default HeaderTab
