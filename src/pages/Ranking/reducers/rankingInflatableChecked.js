function rankingInflatableChecked(state = {
    check: false
}, action) {
    switch(action.type) {
    case 'CHANGE_RANKING_INFLATABLE_CHECKED':
        return Object.assign({}, state, {check: !state.check})
    default:
        return state;
    }
}
export default rankingInflatableChecked
