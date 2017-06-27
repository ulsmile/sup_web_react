function timeRecord(state = {
    time: ""
}, action) {
    switch(action.type) {
    case 'CHANGE_TIME':
        return Object.assign({}, state, {time: action.time})
    default:
        return state;
    }
}
export default timeRecord
