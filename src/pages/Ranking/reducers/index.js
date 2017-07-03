function rankingReducers(state = {
    femaleChecked: false,
    maleChecked: true,
    distanceSelect: "3",
    hardChecked: true,
    inflatableChecked: false,
    raceChecked: false,
    termSelect: "one_month"
}, action) {
    switch(action.type) {
    case 'CHANGE_FEMALE_CHECKED':
        return Object.assign({}, state, {femaleChecked: !state.femaleChecked})
    case 'CHANGE_MALE_CHECKED':
        return Object.assign({}, state, {maleChecked: !state.maleChecked})
    case 'CHANGE_RANKING_DISTANCE_SELECT':
        return Object.assign({}, state, {distanceSelect: action.distanceSelect})
    case 'CHANGE_RANKING_HARD_CHECKED':
        return Object.assign({}, state, {hardChecked: !state.hardChecked})
    case 'CHANGE_RANKING_INFLATABLE_CHECKED':
        return Object.assign({}, state, {inflatableChecked: !state.inflatableChecked})
    case 'CHANGE_RANKING_RACE_CHECKED':
        return Object.assign({}, state, {raceChecked: !state.raceChecked})
    case 'CHANGE_RANKING_TERM_SELECT':
        return Object.assign({}, state, {termSelect: action.termSelect})
    default:
        return state;
    }
}
export default rankingReducers
