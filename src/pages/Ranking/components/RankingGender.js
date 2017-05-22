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

export default class RankingGender extends React.Component {

      constructor(props) {
        super(props);
        this.state = {MaleChecked: false,FemaleChecked: false};
      }

      maleHandleCheck() {
        this.setState({MaleChecked: !this.state.MaleChecked});
        console.log(this.state.MaleChecked)
      }
      femaleHandleCheck() {
        this.setState({FemaleChecked: !this.state.FemaleChecked});
        console.log(this.state.FemaleChecked)
      }

      render() {
        return (
          <div style={styles.block}>
            <Checkbox
              label="男性"
              style={styles.checkbox}
              defaultChecked={this.state.MaleChecked}
              onCheck={this.maleHandleCheck.bind(this)}
            />
            <Checkbox
              label="女性"
              style={styles.checkbox}
              defaultChecked={this.state.FemaleChecked}
              onCheck={this.femaleHandleCheck.bind(this)}
            />
          </div>
        );
      }
    }

