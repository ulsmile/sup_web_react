function genderSelect(state = {
    select: "male"
}, action) {
    switch(action.type) {
    case 'CHANGE_GENDER_SELECT':
        return Object.assign({}, state, {select: action.select})
    default:
        return state;
    }
}
export default genderSelect
