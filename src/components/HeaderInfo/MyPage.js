import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import ListExampleSimple from '../components/List'; 
import {actions} from '../actions/mypage_actions';
import FlatButton from 'material-ui/FlatButton';
import MobileTearSheet from './MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import {ImageTimer,ActionAccountCircle,EditorShowChart,EditorFormatListNumbered} from 'material-ui/svg-icons';


const ListExampleSimple = () => (
  <MobileTearSheet>
    <List>
      <ListItem primaryText="Chart" leftIcon={<EditorShowChart />} />
      <ListItem primaryText="RecordTime" leftIcon={<ImageTimer />} />
      <ListItem primaryText="Mypage" leftIcon={<ActionAccountCircle />} />
      <ListItem primaryText="Ranking" leftIcon={<EditorFormatListNumbered />} />
    </List>
  </MobileTearSheet>
);
const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const SimpleTextField = () => (
  <div>
    <TextField
      defaultValue="富澤 慧哉"
    />
  </div>
);
const SimpleCheckbox = () => (
  <div style={styles.block}>
    <Checkbox
      label="ランキング掲載許可"
      style={styles.checkbox}
    />
  </div>
);
const MypageInfo = (onClick,check) => (
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
          onCheck={onClick,check}
        />
      </div>
      <ListExampleSimple />
			<FlatButton label="Default" onTouchTap={actions.mypageRegister} />
    </div>
  </MuiThemeProvider>
);

MypageInfo.propTypes = {
  onClick: PropTypes.func.isRequired,
  check: PropTypes.bool.isRequired
}

const send = () => {
	console.log("yeah")
};
    //<AutoCompleteExampleSimple />
    //<ListExampleSimple />

export default MypageInfo;
