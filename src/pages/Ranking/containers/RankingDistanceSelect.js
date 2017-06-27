import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeRankingDistanceSelect } from '../actions'
import RankingDistance from '../components/RankingDistance'

const mapStateToProps = (state) => {
  return {
    Selected: state.rankingDistanceSelect.select
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    handleSelect(e){
           dispatch(changeRankingDistanceSelect(e.target.value));
    }
 }
}

const RankingDistanceSelect = connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingDistance)

export default RankingDistanceSelect
