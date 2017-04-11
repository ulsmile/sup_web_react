import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const SimpleCheckbox = () => (
  <div style={styles.block}>
    <Checkbox
      label="ランキング掲載許可"
      style={styles.checkbox}
    />
  </div>
);

export default SimpleCheckbox;

