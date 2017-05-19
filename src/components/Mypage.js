import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
//import BaseCheckbox from './BaseCheckbox';
//import SimpleCheckbox from '../components/Checkbox';
import SimpleTextField from '../components/Text';
//import AutoCompleteExampleSimple from '../components/AutoComplete';a
import ListExampleSimple from '../components/List'; 
import {actions} from '../actions/mypage_actions';
import FlatButton from 'material-ui/FlatButton';
//import { bindActionCreators } from 'redux';
import { setMypageCheck} from '../actions/index';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const SimpleCheckbox = () => (
  <div style={styles.block}>
    <Checkbox
      label="ランキング掲載許可"
      style={styles.checkbox}
    />
  </div>
);

//const Checkbox = () => (
//  <form name="form1" action="">
//    <input id="Checkbox1" type="checkbox" /><label for="Checkbox1">チェック項目1</label><br />
//    <input id="Checkbox2" type="checkbox" /><label for="Checkbox2">チェック項目2</label><br />
//    <input type="button" value="Exec" onclick="onButtonClick();" />
//  </form>
//);

//const handleCheck = (event, checked) => (
//  this.setState = {
//
//      box1: checked ,
//      someState: true 
//
//  });

const MypageInfo = ({onChange,check}) => {
  console.dir(check)
  return(
    <MuiThemeProvider>
      <div>
        <h1>マイページ</h1>
        <Avatar src="http://res.cloudinary.com/dvudu2gsj/image/upload/v1493364948/DSC_0178_p3j1vm.jpg" />
        <h2>名前</h2>
        <SimpleTextField />
        <div style={styles.block}>
          <Checkbox
            label="ランキング掲載許可"
            style={styles.checkbox}
//            checked= {check ? true : false}
/*            onCheck= {event, isInputChecked => {
               onChange(isInputChecked)
               if (onCheck) {
                 onCheck(isInputChecked)
               }
             }}*/
            onCheck= {
              onChange}
          />
        </div>
{/*        <div>
           <input type="button" value="button" onClick={onClick} />
        </div>*/}
        <ListExampleSimple />
        <FlatButton label="Default" onTouchTap={actions.mypageRegister} />
      </div>
    </MuiThemeProvider>
  )
}


MypageInfo.propTypes = {
  onChange: PropTypes.func,
  check: PropTypes.bool.isRequired
}
export default MypageInfo;

//const send = () => {
//	console.log("yeah")
//};
    //<AutoCompleteExampleSimple />
    //<ListExampleSimple />

//      <div style={styles.block}>
//        <Checkbox
//          label="ランキング掲載許可"
//          style={styles.checkbox}
//          onCheck={onClick,check}
//        />
//      </div>
//          onCheck={this.handleCheck.bind(this)}
//          checked={this.state.box1} 
//            onClick={e => {
//               e.target.value = ""}}
//
//            onCheck: (event, isInputChecked) => {
//              onChange(isInputChecked)
//              if (onCheck) {
//                onCheck(isInputChecked)
//
//            checked: check ? true : false,
//            onCheck: (event, isInputChecked) => {
//              onClick}
