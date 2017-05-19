import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
function myFunc() {
	console.log("asas")
}
const AppBarComponent = () => (
	<MuiThemeProvider>
	 <AppBar
    title="WasepApp"
		onLeftIconButtonTouchTap={myFunc}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
	</MuiThemeProvider>
);
export default AppBarComponent;
