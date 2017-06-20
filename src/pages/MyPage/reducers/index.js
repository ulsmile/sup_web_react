const check = (state = false, action) => {
  const url = 'https://api.github.com/users'
  switch (action.type) {
    case 'CHANGE_CHECK':
           return !state
     //    return action.check
    default:
      return state
  }
}

export default check

