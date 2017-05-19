import React, { Component, PropTypes } from 'react';
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Checkbox from 'material-ui/Checkbox';
 
const BaseCheckbox = (input,label,meta:{ touched, error }) => (
   <Checkbox
     name={input.name}
     label={label}
     checked={custom.checked}
     onCheck={input.onChange}
     value={custom.id}
   />
);
 
BaseCheckbox.propTypes = {
  input: React.PropTypes.shape().isRequired,
  label: React.PropTypes.string.isRequired,
  meta: React.PropTypes.shape().isRequired,
};
 
export default BaseCheckbox;
