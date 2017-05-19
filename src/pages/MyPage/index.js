import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import RankingPermission from './components/RankingPermission';
import HpPermission from './components/HpPermission';
import Name from './components/Name';
import LinkList from './components/LinkList'; 


const Mypage = () => {
  return(
    <MuiThemeProvider>
      <div>
        <h1>マイページ</h1>
        <Avatar src="http://res.cloudinary.com/dvudu2gsj/image/upload/v1493364948/DSC_0178_p3j1vm.jpg" />
        <h2>名前</h2>
        <Name />
        <RankingPermission />
        <HpPermission />
        <LinkList />
      </div>
    </MuiThemeProvider>
  )
}

export default Mypage;
