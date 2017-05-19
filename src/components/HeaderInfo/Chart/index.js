import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import SimpleCheckbox from '../components/Checkbox';
import SimpleRadioButton from '../components/RadioButton';

const ChartInfo = () => (
  <MuiThemeProvider>
    <div>
      <h1>グラフチャート</h1>
      <SimpleRadioButton />
      <SimpleCheckbox />
    </div>
  </MuiThemeProvider>
);


export default ChartInfo;
