import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
//import { changeDistanceSelect } from '../actions'
import TimeChart from '../components/TimeChart'

const mapStateToProps = (state) => {
  return {
    Records: state.commonsReducers.records,
  }
}

/*const mapDispatchToProps = (dispatch) => {
  return {

    handleSelect(e){
           dispatch(changeDistanceSelect(e.target.value));
    }
 }
}*/

const TimeChartContainer = connect(
  mapStateToProps,
 // mapDispatchToProps
)(TimeChart)

export default TimeChartContainer
