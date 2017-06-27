function hardChecked(state = {
    check: true
}, action) {
    switch(action.type) {
    case 'CHANGE_HARD_CHECKED':
        return Object.assign({}, state, {check: !state.check})
    default:
        return state;
    }
}
export default hardChecked
