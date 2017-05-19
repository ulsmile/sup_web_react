const pushButton = (state = {}, action) => {
  switch (action.type) {
    case 'PUSH_BUTTON':
      return {
        key: action.key
      }
    default:
      return state
  }
}

export default pushButton

