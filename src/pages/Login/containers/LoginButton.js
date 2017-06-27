import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { pushLoginButton } from '../actions'
import Login from '../components/Login'

const mapStateToProps = (state) => {
  return {
    Selected: state.loginButton.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    onClick(){
           dispatch(pushLoginButton());
    }
 }
}

const LoginButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginButton
