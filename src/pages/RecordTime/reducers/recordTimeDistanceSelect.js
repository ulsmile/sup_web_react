function recordTimeDistanceSelect(state = {
    select: "3"
}, action) {
    switch(action.type) {
    case 'CHANGE_RECORD_TIME_DISTANCE_SELECT':
        return Object.assign({}, state, {select: action.select})
    default:
        return state;
    }
}
export default recordTimeDistanceSelect
