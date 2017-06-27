import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeHardChecked, changeRaceChecked, changeInflatableChecked} from '../actions'
import BoardTypes from '../components/BoardTypes'

const mapStateToProps = (state) => {
  return {
    HardChecked: state.hardChecked.check,
    RaceChecked: state.raceChecked.check,
    InflatableChecked: state.inflatableChecked.check,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hardHandleCheck(){
           dispatch(changeHardChecked());
    },
    raceHandleCheck(){
           dispatch(changeRaceChecked());
    },
    inflatableHandleCheck(){
           dispatch(changeInflatableChecked());
    }
 }
}

const BoardTypesCheck = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardTypes)

export default BoardTypesCheck
