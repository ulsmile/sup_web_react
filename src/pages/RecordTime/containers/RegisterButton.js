import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { updateData, uploadData } from '../../../commons/actions'
import Button from '../components/Button'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  const url = 'http://localhost:3001/register'
  return {

    onClick(){
           dispatch(uploadData('update', url));
    }
 }
}

const RegisterButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default RegisterButton
