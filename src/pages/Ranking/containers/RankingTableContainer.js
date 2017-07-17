import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import RankingTable from '../components/RankingTable'

const mapStateToProps = (state) => {
  return {
    Records: state.commonsReducers.records,
    Name: state.commonsReducers.name,
    Distance: state.chartReducers.distanceSelect,
    HardChecked: state.chartReducers.hardChecked,
    InflatableChecked: state.chartReducers.inflatableChecked,
    RaceChecked: state.chartReducers.raceChecked,
    Term: state.chartReducers.termSelect,
    Names: state.chartReducers.name,
  }
}

const RankingTableContainer = connect(
  mapStateToProps,
)(RankingTable)

export default RankingTableContainer
