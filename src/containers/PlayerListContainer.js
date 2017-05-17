//import { connect } from 'react-redux'
//import PlayerListComponent from '../components/PlayerListComponent'

//const getVisibleTodos = (todos, filter) => {
//  switch (filter) {
//    case 'SHOW_ALL':
//      return todos
//    case 'SHOW_COMPLETED':
//      return todos.filter(t => t.completed)
//    case 'SHOW_ACTIVE':
//      return todos.filter(t => !t.completed)
//  }
//}

const mapStateToProps = (state, props) => {
  return state
  
}

const PlayerListContainer = connect(
  mapStateToProps,
)(PlayerListComponent)

//export default PlayerListContainer
