function genderSelect(state = {
    isFetching: false,
    select: "male"
}, action) {
    switch(action.type) {
    case 'CHANGE_GENDER_SELECT':
        return Object.assign({}, state, {select: action.select})
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        isFetching: true,
      })
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        isFetching: false,
        select: action.select
      })
    default:
        return state;
    }
}
export default genderSelect
