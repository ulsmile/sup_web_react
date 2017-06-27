import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeDistanceSelect } from '../actions'
import Distance from '../components/Distance'

const mapStateToProps = (state) => {
  return {
    Selected: state.distanceSelect.select
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    handleSelect(e){
           dispatch(changeDistanceSelect(e.target.value));
    }
 }
}

const DistanceSelect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Distance)

export default DistanceSelect
