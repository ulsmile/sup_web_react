function hpPermissionCheck(state = {
    isFetching: false,
    check: false
}, action) {
    switch(action.type) {
    case 'CHANGE_HP_PERMISSION_CHECK':
        return Object.assign({}, state, {check: !state.check})
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        isFetching: true,
      })
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        isFetching: false,
        check: action.hpPermissionCheck
      })
    default:
        return state;
    }
}
export default hpPermissionCheck
