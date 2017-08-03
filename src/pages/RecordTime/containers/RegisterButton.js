import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { updateData, uploadData } from '../../../commons/actions'
import Button from '../components/Button'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick(){
           dispatch(uploadData());
    }
 }
}

const RegisterButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default RegisterButton
