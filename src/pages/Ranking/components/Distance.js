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

const Distance = () => (
  <div>
    <RadioButtonGroup name="distance" defaultSelected="3">
      <RadioButton
        value="3"
        label="3km"
        style={styles.radioButton}
      />
      <RadioButton
        value="6"
        label="6km"
        style={styles.radioButton}
      />
      <RadioButton
        value="9"
        label="9km"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);

export default Distance;
