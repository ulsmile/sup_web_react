function maleChecked(state = {
    check: true
}, action) {
    switch(action.type) {
    case 'CHANGE_MALE_CHECKED':
        return Object.assign({}, state, {check: !state.check})
    default:
        return state;
    }
}
export default maleChecked
