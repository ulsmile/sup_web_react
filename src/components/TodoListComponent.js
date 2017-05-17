import React, { PropTypes } from 'react'
import TodoComponent from './TodoComponent'

const TodoListComponent = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <TodoComponent
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

TodoListComponent.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoListComponent
