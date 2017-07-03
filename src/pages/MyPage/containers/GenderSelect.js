import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeGenderSelect } from '../actions'
import Gender from '../components/Gender'

const mapStateToProps = (state) => {
  return {
    Selected: state.myPageReducers.genderSelect
  }
}

const mapDispatchToProps = (dispatch,Select) => {
  return {

    handleSelect(e){
           dispatch(changeGenderSelect(e.target.value));
    }
 }
}

const GenderSelect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gender)

export default GenderSelect
