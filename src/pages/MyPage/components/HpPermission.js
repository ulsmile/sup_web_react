import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

export default class HpPermission extends React.Component {

      constructor(props) {
        super(props);
        this.state = {Checked: false};
      }

      handleCheck() {
        this.setState({Checked: !this.state.Checked});
        console.log(this.state.Checked)
      }

      render() {
        return (
          <div>
            <Checkbox
                label="メンバー紹介掲載許可"
                style={styles.checkbox}
                defaultChecked={this.state.Checked}
                onCheck={this.handleCheck.bind(this)}
              />

          </div>
        );
      }
    }
