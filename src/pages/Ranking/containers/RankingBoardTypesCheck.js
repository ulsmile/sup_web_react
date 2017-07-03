import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeRankingHardChecked, changeRankingRaceChecked, changeRankingInflatableChecked} from '../actions'
import RankingBoardTypes from '../components/RankingBoardTypes'

const mapStateToProps = (state) => {
  return {
    HardChecked: state.rankingReducers.hardChecked,
    RaceChecked: state.rankingReducers.raceChecked,
    InflatableChecked: state.rankingReducers.inflatableChecked,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hardHandleCheck(){
           dispatch(changeRankingHardChecked());
    },
    raceHandleCheck(){
           dispatch(changeRankingRaceChecked());
    },
    inflatableHandleCheck(){
           dispatch(changeRankingInflatableChecked());
    }
 }
}

const RankingBoardTypesCheck = connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingBoardTypes)

export default RankingBoardTypesCheck
