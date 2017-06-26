import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import RankingPermissionCheck from './containers/RankingPermissionCheck';
import HpPermissionCheck from './containers/HpPermissionCheck';
import NameText from './containers/NameText';
import LinkList from './components/LinkList'; 
import GenderSelect from './containers/GenderSelect'; 


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
          <NameText />
          <RankingPermissionCheck />
          <HpPermissionCheck />
          <GenderSelect />
          <LinkList />
        </div>
      </MuiThemeProvider>
    )
  }
  
  export default Mypage;
