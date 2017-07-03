import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeRecordTimeDistanceSelect } from '../actions'
import RecordTimeDistance from '../components/RecordTimeDistance'

const mapStateToProps = (state) => {
  return {
    Selected: state.recordTimeReducers.distanceSelect
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    handleSelect(e){
           dispatch(changeRecordTimeDistanceSelect(e.target.value));
    }
 }
}

const RecordTimeDistanceSelect = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordTimeDistance)

export default RecordTimeDistanceSelect
