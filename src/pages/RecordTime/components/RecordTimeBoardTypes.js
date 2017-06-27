import React, { PropTypes } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

const RecordTimeBoardTypes  = ({ Selected, handleSelect }) => {
        return (
          <div>
            <RadioButtonGroup  name="recordTimeBoardTypes" defaultSelected={Selected} onChange={handleSelect} style={styles.radioButton}>
              <RadioButton
                value="hard"
                label="ハードボード"
              />
              <RadioButton
                value="race"
                label="レースボード"
              />
              <RadioButton
                value="inflatable"
                label="インフレータブル"
              />
            </RadioButtonGroup>
          </div>
        );
}
RecordTimeBoardTypes.propTypes = {
  Selected: PropTypes.string,
  handleSelect: PropTypes.func
}
export default RecordTimeBoardTypes
