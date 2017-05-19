import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Time from './components/Time';
import Distance from './components/Distance';
import BoardTypes from './components/BoardTypes';
import RegisterButton from './components/RegisterButton';
//import AutoCompleteExampleSimple from '../components/AutoComplete';

const RecordingTime = () => (
  <MuiThemeProvider>
    <div>
      <h1>記録入力フォーム</h1>
      <h3>名前</h3>
      <h3>記録タイム</h3>
      <Time />
      <h3>コース距離</h3>
      <Distance />
      <h3>ボードの種類</h3>
      <BoardTypes />
      <h3>天気情報</h3>
      <RegisterButton />
    </div>
  </MuiThemeProvider>
);


export default RecordingTime;