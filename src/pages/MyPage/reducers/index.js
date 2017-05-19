const check = (state = true, action) => {
	  switch (action.type) {
	    case 'SET_RANKING_PERMISSION':
		    return action.check
	    default:
	      return state
	  }
}

export default check

