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

const RankingTerm  = ({ Selected, handleSelect }) => {
        return (
          <div>
            <RadioButtonGroup  name="rankingTerm" defaultSelected={Selected} onChange={handleSelect} style={styles.radioButton}>
              <RadioButton
                value="one_month"
                label="月間"
              />
              <RadioButton
                value="three_months"
                label="3ヶ月"
              />
              <RadioButton
                value="year"
                label="年間"
              />
              <RadioButton
                value="all"
                label="すべて"
              />
            </RadioButtonGroup>
          </div>
        );
}
RankingTerm.propTypes = {
  Selected: PropTypes.string,
  handleSelect: PropTypes.func
}
export default RankingTerm
