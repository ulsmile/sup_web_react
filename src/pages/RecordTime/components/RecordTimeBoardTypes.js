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

export default class RecordTimeBoardTypes extends React.Component {

      constructor(props) {
        super(props);
        this.state = {Selected: "hard"};
      }

      handleSelect(e) {
        this.setState({Selected: e.target.value});
        console.log(this.state.Selected)
      }

      render() {
        return (
          <div>
            <RadioButtonGroup  name="recordTimeBoardTypes" defaultSelected={this.state.Selected} onChange={this.handleSelect.bind(this)} style={styles.radioButton}>
              <RadioButton
                value="hard"
                label="ハードボード"
              />
              <RadioButton
                value="race"
                label="レースボード"
              />
              <RadioButton
                value="inflatable"
                label="インフレータブル"
              />
            </RadioButtonGroup>
          </div>
        );
      }
    }
