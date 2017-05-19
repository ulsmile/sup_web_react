import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
//import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combinedReducers from './reducers'
import AppComponents from './AppComponents'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//let store = createStore(todoApp)
const store = createStore(combinedReducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		);
ReactDOM.render(
	<Provider store={store}>
    <AppComponents />
  </Provider>,

  document.getElementById('root')
)

