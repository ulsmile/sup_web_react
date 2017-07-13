import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import NameFilterContainer from './containers/NameFilterContainer';
import BoardTypesCheck from './containers/BoardTypesCheck';
import DistanceSelect from './containers/DistanceSelect';
import TermSelect from './containers/TermSelect';
import ChartTableContainer from './containers/ChartTableContainer';
//import AutoCompleteExampleControlled from './components/example';
//import DistanceRadioButton from './DistanceRadioButton';
//import changeDistanceSelect from './actions';

const Chart = (action) => {
    return(
  <MuiThemeProvider>
    <div>
      <h1>グラフチャート</h1>
      <NameFilterContainer />
      <BoardTypesCheck />
      <DistanceSelect />
      <TermSelect />
      <ChartTableContainer />
    </div>
  </MuiThemeProvider>
  )
}

export default Chart;
