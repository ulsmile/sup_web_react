import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Gender from './components/Gender';
import BoardTypes from './components/BoardTypes';
import Distance from './components/Distance';
import Term from './components/Term';

const Ranking = () => (
  <MuiThemeProvider>
    <div>
      <h1>Ranking</h1>

      <hr/>

      <Gender />
      <BoardTypes />
      <Distance />
      <Term />
    </div>
  </MuiThemeProvider>
);


export default Ranking;
