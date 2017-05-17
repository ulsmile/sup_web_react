const ADD_TODO = 'ADD_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_PLAYER = 'ADD_PLAYER'
const TOGGLE_PLAYER = 'TOGGLE_PLAYER'

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}
let nextPlayerId = 0;
export const addPlayer = (name) => {
	return {
		id : nextPlayerId ++ ,
		type : ADD_PLAYER,
		name,
		rankPermission : 'false',
		selfIntro : "sample. please write your self introduction."
	}
}
