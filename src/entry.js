import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import { setVisibilityFilter } from './actions'
import { setMypageCheck } from './actions'
import { Addtodo } from './containers/AddTodo'

//console.log(store.getState()) // => Object {todos: Array[0], visibilityFilter: "SHOW_ALL"}
//let store = createStore(todoApp)
//window.__data = JSON.parse('{"todos":[{"id":0,"text":"aaa","completed":false}],"visibilityFilter":"SHOW_ALL","players":{}}');

let store = createStore(todoApp,window._data)
//store.dispatch(setVisibilityFilter('SHOW_B'))
//store.dispatch(setMypageCheck('FALSE'))
window.getState = ()=>(JSON.stringify(store.getState()));
//store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))
//console.log(store.getState()) // => Object {todos: Array[0], visibilityFilter: "SHOW_COMPLETED"}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
