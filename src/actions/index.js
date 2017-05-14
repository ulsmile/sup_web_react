//const ADD_TODO = 'ADD_TODO'

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }

}
export const listPlayers = () => {
	//const url = 'http://localhost:3001/players/'
	const url = 'https://api.github.com/users'
	const players = []
	fetch(url).then(function(response) {
		  return response.json();
	}).then(function(json) {
		  // jsonにJSONオブジェクトで結果が渡される
		console.dir(json)
			let i = 0
		for (let player of json) {
			  players[i] = player.login
			  console.log(player.login);
				i = i + 1
		}
	});
 return {
    type: 'LIST_PLAYERS',
		players 
	} 

}
