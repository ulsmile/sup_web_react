function inflatableChecked(state = {
    check: false
}, action) {
    switch(action.type) {
    case 'CHANGE_INFLATABLE_CHECKED':
        return Object.assign({}, state, {check: !state.check})
    default:
        return state;
    }
}
export default inflatableChecked
