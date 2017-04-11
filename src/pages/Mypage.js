import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import SimpleCheckbox from '../components/Checkbox';
import SimpleTextField from '../components/Text';
//import AutoCompleteExampleSimple from '../components/AutoComplete';
import ListExampleSimple from '../components/List';

const MypageInfo = () => (
  <MuiThemeProvider>
    <div>
      <h1>マイページ</h1>
      <Avatar src="src/images/ktomi.JPG" />
      <h2>名前</h2>
      <SimpleTextField />
      <SimpleCheckbox />
      <ListExampleSimple />
    </div>
  </MuiThemeProvider>
);
    //<AutoCompleteExampleSimple />
    //<ListExampleSimple />

export default MypageInfo;
