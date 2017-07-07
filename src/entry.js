import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
//import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
import AppComponents from './AppComponents'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { fetchPosts, fetchWeatherPosts} from './commons/actions'
injectTapEventPlugin();

//let store = createStore(todoApp)
//const store = createStore(reducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//		);
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//console.dir(store.getState())
window.getState = ()=>(JSON.stringify(store.getState()));
//store.dispatch(selectSubreddit('reactjs'))

const url1 = 'https://api.github.com/users'
const weatherUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Hiratsuka-shi%2C%20Japan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
store.dispatch(fetchPosts('url1', url1)).then(() =>
  console.log(store.getState())
)
store.dispatch(fetchWeatherPosts('weather', weatherUrl)).then(() =>
  console.log(store.getState())
)
ReactDOM.render(
  <Provider store={store}>
    <AppComponents />
  </Provider>,

  document.getElementById('root')
)
