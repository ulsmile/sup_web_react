import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import RankingGenderCheck from './containers/RankingGenderCheck';
import RankingBoardTypesCheck from './containers/RankingBoardTypesCheck';
import RankingDistanceSelect from './containers/RankingDistanceSelect';
import RankingTermSelect from './containers/RankingTermSelect';

const Ranking = () => (
  <MuiThemeProvider>
    <div>
      <h1>Ranking</h1>

      <hr/>

      <RankingGenderCheck />
      <RankingBoardTypesCheck />
      <RankingDistanceSelect />
      <RankingTermSelect />
    </div>
  </MuiThemeProvider>
);


export default Ranking;
