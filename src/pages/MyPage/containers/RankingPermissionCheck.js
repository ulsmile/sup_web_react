import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeRankingPermissionCheck } from '../actions'
import RankingPermission from '../components/RankingPermission'

const mapStateToProps = (state) => {
  return {
    Checked: state.myPageReducers.rankingPermissionCheck,
  }
}

const mapDispatchToProps = (dispatch,Fetching) => {
  return {
    handleCheck(){
           dispatch(changeRankingPermissionCheck());
    }
 }
}

const RankingPermissionCheck = connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingPermission)

export default RankingPermissionCheck
