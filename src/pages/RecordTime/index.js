import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import TimeRecord from './containers/TimeRecord';
import RecordTimeDistanceSelect from './containers/RecordTimeDistanceSelect';
import RecordTimeBoardTypesSelect from './containers/RecordTimeBoardTypesSelect';
import RegisterButton from './containers/RegisterButton';

const RecordingTime = () => (
  <MuiThemeProvider>
    <div>
      <h1>記録入力フォーム</h1>
      <h3>名前</h3>
      <h3>記録タイム</h3>
      <TimeRecord />
      <h3>コース距離</h3>
      <RecordTimeDistanceSelect />
      <h3>ボードの種類</h3>
      <RecordTimeBoardTypesSelect />
      <h3>天気情報</h3>
      <RegisterButton />
    </div>
  </MuiThemeProvider>
);


export default RecordingTime;
