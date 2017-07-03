import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeHpPermissionCheck } from '../actions'
import HpPermission from '../components/HpPermission'

const mapStateToProps = (state) => {
  return {
    Checked: state.myPageReducers.hpPermissionCheck,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCheck(){
           dispatch(changeHpPermissionCheck());
    }
 }
}

const HpPermissionCheck = connect(
  mapStateToProps,
  mapDispatchToProps
)(HpPermission)

export default HpPermissionCheck
