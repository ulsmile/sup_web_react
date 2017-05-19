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

const Gender = () => (
  <div style={styles.block}>
    <Checkbox
      label="男"
      style={styles.checkbox}
    />
    <Checkbox
      label="女"
      style={styles.checkbox}
    />
  </div>
);

export default Gender;

