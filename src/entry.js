import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

//let store = createStore(todoApp)
//window.__data = JSON.parse('{"todos":[{"id":0,"text":"aaa","completed":false}],"visibilityFilter":"SHOW_ALL","players":{}}');

let store = createStore(todoApp,window._data)
window.getState = ()=>(JSON.stringify(store.getState()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
