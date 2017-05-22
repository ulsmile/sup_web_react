import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import RankingGender from './components/RankingGender';
import RankingBoardTypes from './components/RankingBoardTypes';
import RankingDistance from './components/RankingDistance';
import RankingTerm from './components/RankingTerm';

const Ranking = () => (
  <MuiThemeProvider>
    <div>
      <h1>Ranking</h1>

      <hr/>

      <RankingGender />
      <RankingBoardTypes />
      <RankingDistance />
      <RankingTerm />
    </div>
  </MuiThemeProvider>
);


export default Ranking;
