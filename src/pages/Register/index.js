import React from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Name from './components/Name';
import Gender from './components/Gender';
import RankingPermission from './components/RankingPermission';
import HpPermission from './components/HpPermission';
import RegisterButton from './components/RegisterButton';

const Register = () => (
  <MuiThemeProvider>
    <div>
      <h1>個人情報入力</h1>
      <Avatar src="src/images/ktomi.JPG" />
      <h2>名前</h2>
      <Name />
      <h2>性別</h2>
      <Gender />
      <RankingPermission />
      <HpPermission />
      <RegisterButton />
    </div>
  </MuiThemeProvider>
);


export default Register;
