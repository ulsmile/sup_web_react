import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { pushRegisterButton } from '../actions'
import Button from '../components/Button'

const mapStateToProps = (state) => {
  return {
    Selected: state.registerButton.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    onClick(){
           dispatch(pushRegisterButton());
    }
 }
}

const RegisterButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default RegisterButton
