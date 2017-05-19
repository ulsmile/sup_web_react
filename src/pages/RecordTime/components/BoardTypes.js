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

const BoardTypes = () => (
  <div>
    <RadioButtonGroup name="boardTypes" defaultSelected="hard">
      <RadioButton
        value="hard"
        label="ハードボード"
        style={styles.radioButton}
      />
      <RadioButton
        value="race"
        label="レースボード"
        style={styles.radioButton}
      />
      <RadioButton
        value="inflatable"
        label="インフレータブル"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);

export default BoardTypes;
