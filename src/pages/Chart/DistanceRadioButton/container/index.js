import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import view from '../view'

const mapStateToProps = (state) => {
  return {
    Selected: state.chartReducers.distanceSelect
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect
   }
}

const DistanceRadioButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(view)

export default DistanceRadioButton
/*    handleSelect(e){
           dispatch(changeDistanceSelect(e.target.value));
    }*/
