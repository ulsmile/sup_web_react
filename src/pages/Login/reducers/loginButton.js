function loginButton(state = {
    value: false
}, action) {
    switch(action.type) {
    case 'PUSH_LOGIN_BUTTON':
        return Object.assign({}, state, {value: !state.value})
    default:
        return state;
    }
}
export default loginButton
