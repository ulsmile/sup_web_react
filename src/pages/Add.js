import React from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import SimpleCheckbox from '../components/Checkbox';
import SimpleRadioButton from '../components/RadioButton';
import SimpleTextField from '../components/Text';

const AddInfo = () => (
  <MuiThemeProvider>
    <div>
      <h1>個人情報入力</h1>
      <Avatar src="src/images/ktomi.JPG" />
      <SimpleTextField />
      <SimpleRadioButton />
      <SimpleCheckbox />
    </div>
  </MuiThemeProvider>
);


export default AddInfo;
