import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeCheck } from '../actions'
import RankingPermission from '../components/RankingPermission'

const mapStateToProps = (state) => {
  return {
    Checked: state.check
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCheck() {
           dispatch(changeCheck());
  }
 }
}

const RankingPermissionCheck = connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingPermission)

export default RankingPermissionCheck
