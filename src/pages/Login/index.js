import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginButton from './containers/LoginButton'; 


const Login = () => {
  return(
    <MuiThemeProvider>
      <div>
        <h1>ログインページ</h1>
        <LoginButton />
      </div>
    </MuiThemeProvider>
  )
}

export default Login;
