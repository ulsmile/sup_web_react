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

export default class RankingBoardTypes extends React.Component {

      constructor(props) {
        super(props);
        this.state = {HardChecked: false,RaceChecked: false,InflatableChecked: false,};
      }

      hardHandleCheck() {
        this.setState({HardChecked: !this.state.HardChecked});
        console.log(this.state.HardChecked)
      }
      raceHandleCheck() {
        this.setState({RaceChecked: !this.state.RaceChecked});
        console.log(this.state.RaceChecked)
      }
      inflatableHandleCheck() {
        this.setState({InflatableChecked: !this.state.InflatableChecked});
        console.log(this.state.InflatableChecked)
      }

      render() {
        return (
          <div style={styles.block}>
            <Checkbox
              label="ハードボード"
              style={styles.checkbox}
              defaultChecked={this.state.HardChecked}
              onCheck={this.hardHandleCheck.bind(this)}
            />
            <Checkbox
              label="レースボード"
              style={styles.checkbox}
              defaultChecked={this.state.RaceChecked}
              onCheck={this.raceHandleCheck.bind(this)}
            />
            <Checkbox
              label="インフレ-タブルボード"
              style={styles.checkbox}
              defaultChecked={this.state.InflatableChecked}
              onCheck={this.inflatableHandleCheck.bind(this)}
            />
          </div>
        );
      }
    }

