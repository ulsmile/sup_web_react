function recordTimeReducers(state = {
    boardTypeSelect: "hard",
    distanceSelect: "3",
    registerValue: false,
    time: ""
}, action) {
    switch(action.type) {
    case 'CHANGE_RECORD_TIME_BOARD_TYPES_SELECT':
        return Object.assign({}, state, {boardTypeSelect: action.boardTypeSelect})
    case 'CHANGE_RECORD_TIME_DISTANCE_SELECT':
        return Object.assign({}, state, {distanceSelect: action.distanceSelect})
    case 'PUSH_REGISTER_BUTTON':
        return Object.assign({}, state, {registerValue: !state.registerValue})
    case 'CHANGE_TIME':
        return Object.assign({}, state, {time: action.time})
    default:
        return state;
    }
}
export default recordTimeReducers
