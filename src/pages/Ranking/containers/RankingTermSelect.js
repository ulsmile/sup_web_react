import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeRankingTermSelect } from '../actions'
import RankingTerm from '../components/RankingTerm'

const mapStateToProps = (state) => {
  return {
    Selected: state.rankingReducers.termSelect
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    handleSelect(e){
           dispatch(changeRankingTermSelect(e.target.value));
    }
 }
}

const RankingTermSelect = connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingTerm)

export default RankingTermSelect
