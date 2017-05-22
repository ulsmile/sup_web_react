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

export default class Gender extends React.Component {

      constructor(props) {
        super(props);
        this.state = {Selected: "not_light"};
      }

      handleSelect(e) {
        this.setState({Selected: e.target.value});
        console.log(this.state.Selected)
      }

      render() {
        return (
          <div>
            <RadioButtonGroup  name="gender" defaultSelected={this.state.Selected} onChange={this.handleSelect.bind(this)} style={styles.radioButton}>
              <RadioButton
                value="not_light"
                label="男"
              />
              <RadioButton
                value="light"
                label="女"
              />
            </RadioButtonGroup>
          </div>
        );
      }
    }
