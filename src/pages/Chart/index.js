import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Name from './components/Name';
import BoardTypes from './components/BoardTypes';
import Distance from './components/Distance';
import Term from './components/Term';

const Chart = () => (
  <MuiThemeProvider>
    <div>
      <h1>グラフチャート</h1>
      <Name />
      <BoardTypes />
      <Distance />
      <Term />
    </div>
  </MuiThemeProvider>
);


export default Chart;
