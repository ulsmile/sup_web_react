const players = (state = {}, action) => {
	  switch (action.type) {
    case 'LIST_PLAYERS':
      return Object.assign({}, state, {
        players: action.players
      })
    default:
      return state
	  }
}

export default players

