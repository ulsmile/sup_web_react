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

const BoardTypes = () => (
  <div style={styles.block}>
    <Checkbox
      label="ハードボード"
      style={styles.checkbox}
    />
    <Checkbox
      label="レースボード"
      style={styles.checkbox}
    />
    <Checkbox
      label="インフレ-タブルボード"
      style={styles.checkbox}
    />
  </div>
);

export default BoardTypes;

