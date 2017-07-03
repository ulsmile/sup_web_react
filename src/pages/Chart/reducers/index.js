function chartReducers(state = {
    distanceSelect: "3",
    hardChecked: true,
    inflatableChecked: false,
    raceChecked: false,
    termSelect: "one_month"
}, action) {
    switch(action.type) {
    case 'CHANGE_DISTANCE_SELECT':
        return Object.assign({}, state, {distanceSelect: action.distanceSelect})
    case 'CHANGE_HARD_CHECKED':
        return Object.assign({}, state, {hardChecked: !state.hardChecked})
    case 'CHANGE_INFLATABLE_CHECKED':
        return Object.assign({}, state, {inflatableChecked: !state.inflatableChecked})
    case 'CHANGE_RACE_CHECKED':
        return Object.assign({}, state, {raceChecked: !state.raceChecked})
    case 'CHANGE_TERM_SELECT':
        return Object.assign({}, state, {termSelect: action.termSelect})
    default:
        return state;
    }
}
export default chartReducers
