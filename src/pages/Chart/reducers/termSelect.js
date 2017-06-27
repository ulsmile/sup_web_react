function termSelect(state = {
    select: "one_month"
}, action) {
    switch(action.type) {
    case 'CHANGE_TERM_SELECT':
        return Object.assign({}, state, {select: action.select})
    default:
        return state;
    }
}
export default termSelect
