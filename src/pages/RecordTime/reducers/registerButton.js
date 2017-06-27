function registerButton(state = {
    value: false
}, action) {
    switch(action.type) {
    case 'PUSH_REGISTER_BUTTON':
        return Object.assign({}, state, {value: !state.value})
    default:
        return state;
    }
}
export default registerButton
