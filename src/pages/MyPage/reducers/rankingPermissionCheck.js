/*const check = (state = false, action) => {
  const url = 'https://api.github.com/users'
  switch (action.type) {
    case 'CHANGE_CHECK':
           return !state
     //    return action.check
    default:
      return state
  }
}

export default check*/

function rankingPermissionCheck(state = {
    isFetching: false,
    check: false
}, action) {
    switch(action.type) {
    case 'CHANGE_RANKING_PERMISSION_CHECK':
           //return !state
        return Object.assign({}, state, {isFetching: false, check: !state.check});
           //return state={isFetching:false,check:action.check}
/*    case 'FETCH_RANKING_PERMISSION':
        return Object.assign({}, state, {isFetching: true});
    case 'RECEIVE_RANKING_PERMISSION':
        return Object.assign({}, state, {isFetching: false, check: action.check});*/
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        isFetching: true,
//        didInvalidate: false
      })
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        isFetching: false,
 //       didInvalidate: false,
        check: action.rankingPermissionCheck,
        lastUpdated: action.receivedAt
      })
    default:
        return state;
    }
}
export default rankingPermissionCheck


