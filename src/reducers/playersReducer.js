const playerReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
				id : action.id,
        name: action.name,
        rankPermission: action.rankPermission,
				selfIntro: action.selfIntro
      }

    default:
      return state
  }
}

const playersReducer = (state = [], action) => {
	
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        playerReducer(undefined, action)
      ]
    default:
      return state
  }
}

export default playersReducer
