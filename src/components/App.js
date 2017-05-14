import React from 'react'
import Footer from './Footer'
import ListPlayers from '../containers/ListPlayers'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
		<ListPlayers />
  </div>
)

export default App
