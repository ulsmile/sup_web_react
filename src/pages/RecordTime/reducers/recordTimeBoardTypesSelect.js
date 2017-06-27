function recordTimeBoardTypesSelect(state = {
    select: "hard"
}, action) {
    switch(action.type) {
    case 'CHANGE_RECORD_TIME_BOARD_TYPES_SELECT':
        return Object.assign({}, state, {select: action.select})
    default:
        return state;
    }
}
export default recordTimeBoardTypesSelect
