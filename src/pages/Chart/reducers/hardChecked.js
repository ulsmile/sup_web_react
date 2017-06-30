function hardChecked(state = {
    isFetching: false,
    check: true
}, action) {
    switch(action.type) {
    case 'CHANGE_HARD_CHECKED':
        return Object.assign({}, state, {check: !state.check})
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        isFetching: true,
      })
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        isFetching: false,
        check: action.check
      })
    default:
        return state;
    }
}
export default hardChecked
