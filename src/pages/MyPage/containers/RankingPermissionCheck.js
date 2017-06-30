import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeRankingPermissionCheck } from '../actions'
import RankingPermission from '../components/RankingPermission'

/*dispatch(selectSubreddit('reactjs'))
dispatch(fetchPosts('reactjs')).then(() =>
  console.log(store.getState())
)*/
const mapStateToProps = (state) => {
  //console.dir(state.checks.check)
//  var getRankingPermissionState = getRankingPermissionIfNeeded(state)
  return {
    //Checked: true
    Checked: state.rankingPermissionCheck.check,
    Fetching: state.rankingPermissionCheck.isFetching
  }
}

/*var abc =() =>{
           dispatch(getRankingPermissionIfNeeded());
    }*/
/*const abc = (dispatch) => {
  return {
    handle(){
    dispatch(getRankingPermissionIfNeeded());
      }
    console.dir(handle)
    }
 }*/
//console.dir(store.getState())
const mapDispatchToProps = (dispatch,Fetching) => {
//  console.dir(state.checks.check)
//  console.dir(Checked)
//  console.dir(Fetching)
//  console.dir(dispatch(getRankingPermissionIfNeeded()))
//  console.dir(dispatch(getRankingPermissionState()))
  return {
//    Checked : dispatch(getRankingPermissionIfNeeded()),
/*    Checked:() =>{
           dispatch(getRankingPermissionIfNeeded());
    },*/
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
