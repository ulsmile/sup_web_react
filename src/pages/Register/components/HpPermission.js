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

const HpPermission = () => (
  <div style={styles.block}>
    <Checkbox
      label="メンバー紹介掲載許可"
      style={styles.checkbox}
    />
  </div>
);

export default HpPermission;

