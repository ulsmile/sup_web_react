function hpPermissionCheck(state = {
    check: false
}, action) {
    switch(action.type) {
    case 'CHANGE_HP_PERMISSION_CHECK':
        return Object.assign({}, state, {check: !state.check})
    default:
        return state;
    }
}
export default hpPermissionCheck
