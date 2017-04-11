import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabsExampleSimple from '../components/Tabs';
//import TabsExampleControlled from '../components/Tabs2';

const HeaderInfo = () => (
  <MuiThemeProvider>
    <div>
      <img src="src/images/wasepa_logo.jpg" width="120" height="120" />
      <TabsExampleSimple />
    </div>
  </MuiThemeProvider>
);

      //<TabsExampleControlled />

export default HeaderInfo;
