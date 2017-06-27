import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeRankingHardChecked, changeRankingRaceChecked, changeRankingInflatableChecked} from '../actions'
import RankingBoardTypes from '../components/RankingBoardTypes'

const mapStateToProps = (state) => {
  return {
    HardChecked: state.rankingHardChecked.check,
    RaceChecked: state.rankingRaceChecked.check,
    InflatableChecked: state.rankingInflatableChecked.check,
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
