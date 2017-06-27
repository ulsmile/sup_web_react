function rankingRaceChecked(state = {
    check: false
}, action) {
    switch(action.type) {
    case 'CHANGE_RANKING_RACE_CHECKED':
        return Object.assign({}, state, {check: !state.check})
    default:
        return state;
    }
}
export default rankingRaceChecked
