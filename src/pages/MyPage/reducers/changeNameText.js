function changeNameText(state = {
    isFetching: false,
    name: "富澤慧哉"
}, action) {
    switch(action.type) {
    case 'CHANGE_NAME':
        return Object.assign({}, state, {name: action.name})
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        isFetching: true,
      })
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        isFetching: false,
        name: action.name
      })
    default:
        return state;
    }
}
export default changeNameText
