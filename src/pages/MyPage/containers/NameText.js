import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeName } from '../actions'
import Name from '../components/Name'

const mapStateToProps = (state) => {
  return {
    Value: state.commonsReducers.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    onChange(e){
           dispatch(changeName(e.target.value));
    }
 }
}

const NameText = connect(
  mapStateToProps,
  mapDispatchToProps
)(Name)

export default NameText
