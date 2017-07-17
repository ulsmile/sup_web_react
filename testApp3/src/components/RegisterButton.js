import React, { PropTypes, Component } from 'react';
import { Button } from 'react-native-material-ui';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class RegisterButton extends Component {
  render() {
    return (
      <View>
          <Button primary  /> // flat button with primary color
      </View>
    );
  }
}
const propTypes = {
    /**
    * If true button will be disabled
    */
    disabled: PropTypes.bool,
    /**
    * If true button will be raised
    */
    raised: PropTypes.bool,
    /**
    * Called when button is pressed. Text is passed as param
    */
    onPress: PropTypes.func,
    /**
    * Called when button is long pressed. Text is passed as param
    */
    onLongPress: PropTypes.func,
    /**
    * Text will be shown on button
    */
    text: PropTypes.string.isRequired,
    /**
    * Button text will be in uppercase letters
    */
    upperCase: PropTypes.bool,
    /**
    * If specified it'll be shown before text
    */
    icon: PropTypes.string,
    /**
    * You can overide any style for this button
    */
    style: PropTypes.shape({
        container: View.propTypes.style,
        text: Text.propTypes.style,
    }),
};

const defaultProps = {
    primary: false,
    accent: false,
    disabled: false,
    raised: false,
    upperCase: true,
    style: {},
};
