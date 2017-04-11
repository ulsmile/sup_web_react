var React = require('react');
var ReactDOM = require('react-dom');
//import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderInfo from './pages/Header';
import Routes from './routes';
import injectTapEventPlugin from "react-tap-event-plugin"

injectTapEventPlugin();

ReactDOM.render(
  <div>
    <HeaderInfo />
    <Routes />
  </div>,
//  document.getElementById('app')
);
  //<div>
  //  <HeaderInfo />
  //  <AddInfo />
  //  <MypageInfo />
  //</div>,

