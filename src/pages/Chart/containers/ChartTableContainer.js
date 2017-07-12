import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import ChartTable from '../components/ChartTable'

const mapStateToProps = (state) => {
  return {
    Records: state.commonsReducers.records,
    Name: state.commonsReducers.name,
    Distance: state.chartReducers.distanceSelect,
    HardChecked: state.chartReducers.hardChecked,
    InflatableChecked: state.chartReducers.inflatableChecked,
    RaceChecked: state.chartReducers.raceChecked,
    Term: state.chartReducers.termSelect,
  }
}

const ChartTableContainer = connect(
  mapStateToProps,
)(ChartTable)

export default ChartTableContainer
