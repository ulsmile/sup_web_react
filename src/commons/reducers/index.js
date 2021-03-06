function commonsReducers(state = {
    isFetching: false,
    name: "富澤慧哉",
    genderSelect: "male",
    hpPermissionCheck: false,
    rankingPermissionCheck: false,
}, action) {
    switch(action.type) {
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        isFetching: false,
        name: action.name,
        genderSelect: action.select,
        hpPermissionCheck: action.hpPermissionCheck,
        rankingPermissionCheck: action.rankingPermissionCheck,
        records: action.records,
      });
    case 'CHANGE_NAME':
        return Object.assign({}, state, {name: action.name});
    case 'CHANGE_GENDER_SELECT':
        return Object.assign({}, state, {genderSelect: action.genderSelect})
    case 'CHANGE_HP_PERMISSION_CHECK':
        return Object.assign({}, state, {hpPermissionCheck: !state.hpPermissionCheck})
    case 'CHANGE_RANKING_PERMISSION_CHECK':
        return Object.assign({}, state, {rankingPermissionCheck: !state.rankingPermissionCheck});
    default:
        return state;
    }
}
export default commonsReducers
