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

export default class RankingDistance extends React.Component {

      constructor(props) {
        super(props);
        this.state = {Selected: "3"};
      }

      handleSelect(e) {
        this.setState({Selected: e.target.value});
        console.log(this.state.Selected)
      }

      render() {
        return (
          <div>
            <RadioButtonGroup  name="rankingDistance" defaultSelected={this.state.Selected} onChange={this.handleSelect.bind(this)} style={styles.radioButton}>
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
    }
