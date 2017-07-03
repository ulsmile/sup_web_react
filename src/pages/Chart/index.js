import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Name from './components/Name';
import BoardTypesCheck from './containers/BoardTypesCheck';
import DistanceSelect from './containers/DistanceSelect';
import TermSelect from './containers/TermSelect';
import SimpleLineChart from './components/SimpleLineChart';
//import DistanceRadioButton from './DistanceRadioButton';
//import changeDistanceSelect from './actions';

const Chart = (action) => {
    return(
  <MuiThemeProvider>
    <div>
      <h1>グラフチャート</h1>
      <Name />
      <BoardTypesCheck />
      <DistanceSelect />
      <TermSelect />
      <SimpleLineChart />
    </div>
  </MuiThemeProvider>
  )
}

export default Chart;
/*const action = (changeDistanceSelect) => {
    return{
    action(e){
           dispatch(changeDistanceSelect(e.target.value));
    }
  }
}*/
      //<DistanceRadioButton action={changeDistanceSelect} />
      //<DistanceRadioButton handleSelect={action} />
