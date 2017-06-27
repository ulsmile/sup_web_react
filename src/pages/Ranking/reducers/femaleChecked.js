function femaleChecked(state = {
    check: false
}, action) {
    switch(action.type) {
    case 'CHANGE_FEMALE_CHECKED':
        return Object.assign({}, state, {check: !state.check})
    default:
        return state;
    }
}
export default femaleChecked
