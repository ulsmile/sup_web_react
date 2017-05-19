import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

const Gender = () => (
  <div>
    <RadioButtonGroup name="gender" defaultSelected="not_light">
      <RadioButton
        value="not_light"
        label="男"
        style={styles.radioButton}
      />
      <RadioButton
        value="light"
        label="女"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);

export default Gender;
