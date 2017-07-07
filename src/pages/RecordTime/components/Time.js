import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
/*import { TimePicker } from 'antd';
import moment from 'moment';
function onChanges(time, timeString) {
  console.log(time, timeString);
}*/
    //<TimePicker onChange={onChanges} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />,

const Time = ({Value, onChange}) => (
  <div>
    <form>
      <input type="time" name="example" min="00:00:00" max="99:59:59" step="1" />
      <input type="text" name="text1" size="20" value="00:00:00" />
    </form>
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
