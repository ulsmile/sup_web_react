import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combinedReducers from './reducers'
import AppComponents from './components/AppComponents'

//let store = createStore(todoApp)
let store = createStore(combinedReducers , window.__data);
render(
  <Provider store={store}>
    <AppComponents />
  </Provider>,

  document.getElementById('root')
)


// storeを参照できるように、windowに追加
window.getState = ()=>(JSON.stringify(store.getState()));
