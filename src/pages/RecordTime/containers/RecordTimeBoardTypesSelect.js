import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeRecordTimeBoardTypesSelect } from '../actions'
import RecordTimeBoardTypes from '../components/RecordTimeBoardTypes'

const mapStateToProps = (state) => {
  return {
    Selected: state.recordTimeReducers.boardTypesSelect
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    handleSelect(e){
           dispatch(changeRecordTimeBoardTypesSelect(e.target.value));
    }
 }
}

const RecordTimeBoardTypesSelect = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordTimeBoardTypes)

export default RecordTimeBoardTypesSelect
