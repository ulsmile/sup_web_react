import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import SimpleCheckbox from '../components/Checkbox';
import SimpleRadioButton from '../components/RadioButton';
import SimpleTextField from '../components/Text';
//import AutoCompleteExampleSimple from '../components/AutoComplete';

const RankingInfo = () => (
  <MuiThemeProvider>
    <div>
      <h1>Ranking</h1>

      <hr/>

      <SimpleCheckbox />
      <SimpleRadioButton />
    </div>
  </MuiThemeProvider>
);


export default RankingInfo;
