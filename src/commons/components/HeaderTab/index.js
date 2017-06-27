import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
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
        <Tab label="Mypage" value="0" containerElement={<Link to='/mypage'/>} />
        <Tab label="Chart" value="1" containerElement={<Link to='/chart'/>} />
        <Tab label="RecordTime" value="2" containerElement={<Link to='/record_time'/>} />
        <Tab label="Ranking" value="3" containerElement={<Link to='/ranking'/>} />
      </Tabs>
    </div>
  </MuiThemeProvider>
);


export default HeaderTab
