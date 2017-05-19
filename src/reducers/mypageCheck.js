const check = (state = true, action) => {
	  switch (action.type) {
	    case 'SET_MYPAGE_CHECK':
		    return action.check
	    default:
	      return state
	  }
}

export default check

