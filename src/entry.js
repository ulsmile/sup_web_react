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
import { selectSubreddit,invalidateSubreddit, requestPosts, receivePosts, fetchPosts, changeRankingPermissionCheck } from './commons/actions'
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
store.dispatch(fetchPosts('reactjs')).then(() =>
  console.log(store.getState())
)
ReactDOM.render(
  <Provider store={store}>
    <AppComponents />
  </Provider>,

  document.getElementById('root')
)
