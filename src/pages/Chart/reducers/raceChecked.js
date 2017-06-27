function raceChecked(state = {
    check: false
}, action) {
    switch(action.type) {
    case 'CHANGE_RACE_CHECKED':
        return Object.assign({}, state, {check: !state.check})
    default:
        return state;
    }
}
export default raceChecked
