import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeTermSelect } from '../actions'
import Term from '../components/Term'

const mapStateToProps = (state) => {
  return {
    Selected: state.termSelect.select
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    handleSelect(e){
           dispatch(changeTermSelect(e.target.value));
    }
 }
}

const TermSelect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Term)

export default TermSelect
