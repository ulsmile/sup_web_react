import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeMaleChecked, changeFemaleChecked} from '../actions'
import RankingGender from '../components/RankingGender'

const mapStateToProps = (state) => {
  return {
    MaleChecked: state.maleChecked.check,
    FemaleChecked: state.femaleChecked.check,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    maleHandleCheck(){
           dispatch(changeMaleChecked());
    },
    femaleHandleCheck(){
           dispatch(changeFemaleChecked());
    }
 }
}

const RankingGenderCheck = connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingGender)

export default RankingGenderCheck
