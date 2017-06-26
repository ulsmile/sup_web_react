function changeNameText(state = {
    name: "富澤慧哉"
}, action) {
    switch(action.type) {
    case 'CHANGE_NAME':
        return Object.assign({}, state, {name: action.name})
    default:
        return state;
    }
}
export default changeNameText
