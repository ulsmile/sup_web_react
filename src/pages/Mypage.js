
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import SimpleCheckbox from '../components/Checkbox';
import SimpleTextField from '../components/Text';
//import AutoCompleteExampleSimple from '../components/AutoComplete';a
import ListExampleSimple from '../components/List'; 
import {actions} from '../actions/mypage_actions';


import FlatButton from 'material-ui/FlatButton';
const MypageInfo = () => (
  <MuiThemeProvider>
    <div>
      <h1>マイページ</h1>
      <Avatar src="http://res.cloudinary.com/dvudu2gsj/image/upload/v1493364948/DSC_0178_p3j1vm.jpg" />
      <h2>名前</h2>
      <SimpleTextField />
      <SimpleCheckbox />
      <ListExampleSimple />
			<FlatButton label="Default" onTouchTap={actions.mypageRegister} />
    </div>
  </MuiThemeProvider>
);

const send = () => {
	console.log("yeah")
};
    //<AutoCompleteExampleSimple />
    //<ListExampleSimple />

export default MypageInfo;
