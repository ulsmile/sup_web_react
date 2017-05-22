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

export default class RankingTerm extends React.Component {

      constructor(props) {
        super(props);
        this.state = {Selected: "one_month"};
      }

      handleSelect(e) {
        this.setState({Selected: e.target.value});
        console.log(this.state.Selected)
      }

      render() {
        return (
          <div>
            <RadioButtonGroup  name="rankingTerm" defaultSelected={this.state.Selected} onChange={this.handleSelect.bind(this)} style={styles.radioButton}>
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
    }
