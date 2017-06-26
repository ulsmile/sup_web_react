import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const Name = ({Value,onChange}) => (
  <div>
    <TextField
      defaultValue={Value}
      onChange={onChange}
    />
  </div>
);
Name.propTypes = {
  Value: PropTypes.string,
  onChange: PropTypes.func
}

export default Name;
