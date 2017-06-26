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

const Gender  = ({ Selected, handleSelect }) => {
        return (
          <div>
            <RadioButtonGroup name="gender" defaultSelected={Selected} onChange={handleSelect} style={styles.radioButton}>
              <RadioButton
                value="male"
                label="男"
              />
              <RadioButton
                value="female"
                label="女"
              />
            </RadioButtonGroup>
          </div>
        );
}
Gender.propTypes = {
  Selected: PropTypes.string,
  handleSelect: PropTypes.func
}
export default Gender
