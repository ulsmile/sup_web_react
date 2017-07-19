import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import RankingTable from '../components/RankingTable'

const mapStateToProps = (state) => {
  return {
    Records: state.commonsReducers.records,
  //  Name: state.commonsReducers.name,
    Distance: state.rankingReducers.distanceSelect,
    HardChecked: state.rankingReducers.hardChecked,
    InflatableChecked: state.rankingReducers.inflatableChecked,
    RaceChecked: state.rankingReducers.raceChecked,
    FemaleChecked: state.rankingReducers.femaleChecked,
    MaleChecked: state.rankingReducers.maleChecked,
    Term: state.rankingReducers.termSelect,
  }
}

const RankingTableContainer = connect(
  mapStateToProps,
)(RankingTable)

export default RankingTableContainer
