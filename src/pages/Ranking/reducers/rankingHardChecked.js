function rankingHardChecked(state = {
    check: true
}, action) {
    switch(action.type) {
    case 'CHANGE_RANKING_HARD_CHECKED':
        return Object.assign({}, state, {check: !state.check})
    default:
        return state;
    }
}
export default rankingHardChecked
