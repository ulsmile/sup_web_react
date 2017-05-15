const mypageCheck = (state = 'TRUE', action) => {
	  switch (action.type) {
	    case 'FALSE':
		    return action.filter
	    default:
	      return state
	  }
}

export default mypageCheck

