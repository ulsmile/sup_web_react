import React from 'react'
import FooterComponent from './FooterComponent'
import AddTodoContainer from '../containers/AddTodoContainer'
import VisibleTodoListContainer from '../containers/VisibleTodoListContainer'
import AddPlayerContainer from '../containers/AddPlayerContainer'
//import PlayerListContainer from '../containers/PlayerListContainer'

const AppComponents = () => (
  <div>
    <AddTodoContainer />
    <VisibleTodoListContainer />
    <FooterComponent />
    <AddPlayerContainer />
	</div>

)

export default AppComponents
