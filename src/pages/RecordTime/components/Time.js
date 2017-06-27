import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const Time = ({Value, onChange}) => (
  <div>
    <TextField
      hintText="00:00:00"
      defaultValue={Value}
      onChange={onChange}
    />
  </div>
);
Time.propTypes = {
  Value: PropTypes.string,
  onChange: PropTypes.func
}

export default Time;
