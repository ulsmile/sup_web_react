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

const view  = ({ Selected, handleSelect, action }) => {
        return (
          <div>
            <RadioButtonGroup  name="distance" defaultSelected={Selected} onChange={handleSelect} style={styles.radioButton}>
              <RadioButton
                value="3"
                label="3km"
              />
              <RadioButton
                value="6"
                label="6km"
              />
              <RadioButton
                value="9"
                label="9km"
              />
            </RadioButtonGroup>
          </div>
        );
}
view.propTypes = {
  Selected: PropTypes.string,
  handleSelect: PropTypes.func,
  action: PropTypes.func
}
export default view
