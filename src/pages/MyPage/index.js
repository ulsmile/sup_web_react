import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
//import RankingPermission from './components/RankingPermission';
import RankingPermissionCheck from './containers';
import HpPermission from './components/HpPermission';
import Name from './components/Name';
import LinkList from './components/LinkList'; 
import Gender from './components/Gender'; 


//const url = 'https://api.github.com/users'
//fetch(url)
//  .then(function(response) {
//  while(!response.ok) {
//  //nothing
//  }
//  return response.json();
//  })

  const Mypage = () => {
    return(
      <MuiThemeProvider>
        <div>
          <h1>マイページ</h1>
          <Avatar src="http://res.cloudinary.com/dvudu2gsj/image/upload/v1493364948/DSC_0178_p3j1vm.jpg" />
          <h2>名前</h2>
          <Name />
          <RankingPermissionCheck />
          <HpPermission />
          <Gender />
          <LinkList />
        </div>
      </MuiThemeProvider>
    )
  }
  
  export default Mypage;
