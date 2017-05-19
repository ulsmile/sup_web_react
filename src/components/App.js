import React from 'react'
import HeaderInfo from './Header'
import Footer from './Footer'
import ListPlayers from '../containers/ListPlayers'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import MypageCheck from '../containers/Mypage'
import PushButton from '../containers/PushButton'

const App = () => (
  <div>
    <HeaderInfo />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <ListPlayers />
    <PushButton />
  </div>
)

export default App
