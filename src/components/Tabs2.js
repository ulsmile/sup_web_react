import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Mypage" value="a">
          <div>
            <h2 style={styles.headline}>Mypage</h2>
          </div>
        </Tab>
        <Tab label="Chart" value="b">
          <div>
            <h2 style={styles.headline}>Chart</h2>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
