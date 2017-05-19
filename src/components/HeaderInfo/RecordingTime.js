import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import SimpleCheckbox from '../components/Checkbox';
import SimpleRadioButton from '../components/RadioButton';
import SimpleTextField from '../components/Text';

const RecordingTimeInfo = () => (
  <MuiThemeProvider>
    <div>
      <h1>記録入力フォーム</h1>
      <h3>名前</h3>
      <SimpleTextField />
      <h3>記録タイム</h3>
      <h3>コース距離</h3>
      <SimpleRadioButton />
      <h3>ボードの種類</h3>
      <SimpleRadioButton />
      <h3>天気情報</h3>
    </div>
  </MuiThemeProvider>
);


export default RecordingTimeInfo;
