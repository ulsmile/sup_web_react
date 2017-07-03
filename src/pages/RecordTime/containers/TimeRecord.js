import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeTime } from '../actions'
import Time from '../components/Time'

const mapStateToProps = (state) => {
  return {
    Value: state.recordTimeReducers.time
  }
}

const mapDispatchToProps = (dispatch,Select) => {
  return {

    onChange(e){
           dispatch(changeTime(e.target.value));
    }
 }
}

const TimeRecord = connect(
  mapStateToProps,
  mapDispatchToProps
)(Time)

export default TimeRecord
