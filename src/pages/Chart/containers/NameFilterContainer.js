import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { changeName, deleteName } from '../actions'
import NameFilter from '../components/NameFilter'

const mapStateToProps = (state) => {
  return {
    Records: state.commonsReducers.records,
    Names: state.chartReducers.name,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onChange(searchText){
           console.dir(searchText)
           dispatch(changeName(searchText));
    },
    handleRequestDelete(Text){
           console.dir(Text)
           dispatch(deleteName(Text));
    }
 }
}

const NameFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameFilter)

export default NameFilterContainer
