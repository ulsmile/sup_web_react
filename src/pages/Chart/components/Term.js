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

const Term = () => (
  <div>
    <RadioButtonGroup name="term" defaultSelected="one_month">
      <RadioButton
        value="one_month"
        label="月間"
        style={styles.radioButton}
      />
      <RadioButton
        value="three_months"
        label="3ヶ月"
        style={styles.radioButton}
      />
      <RadioButton
        value="year"
        label="年間"
        style={styles.radioButton}
      />
      <RadioButton
        value="all"
        label="すべて"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);

export default Term;
