const mypage = (state = {}, action) => {
	  switch (action.type) {
    case 'MYPAGE_CHECK':
      return Object.assign({}, state, {
        mypage: action.mypage
      })
    default:
      return state
	  }
}

export default mypage

