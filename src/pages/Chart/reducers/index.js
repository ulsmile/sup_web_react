function addItem(array, item) {
  return Array.from(new Set([...array, item]));//重複データが入らないようにするための対応
}
function removeItem(array, item) {
  return array.filter((v, i) => v !== item);
}

function chartReducers(state = {
    distanceSelect: "3",
    hardChecked: true,
    inflatableChecked: false,
    raceChecked: false,
    termSelect: "one_month",
    name:[]
}, action) {
    switch(action.type) {
    case 'CHANGE_DISTANCE_SELECT':
        return Object.assign({}, state, {distanceSelect: action.distanceSelect})
    case 'CHANGE_HARD_CHECKED':
        return Object.assign({}, state, {hardChecked: !state.hardChecked})
    case 'CHANGE_INFLATABLE_CHECKED':
        return Object.assign({}, state, {inflatableChecked: !state.inflatableChecked})
    case 'CHANGE_RACE_CHECKED':
        return Object.assign({}, state, {raceChecked: !state.raceChecked})
    case 'CHANGE_TERM_SELECT':
        return Object.assign({}, state, {termSelect: action.termSelect})
    case 'CHANGE_FILTER_NAME':
        return Object.assign({}, state, {name: addItem(state.name, action.searchText)});
    case 'CHANGE_DELETE_NAME':
        return Object.assign({}, state, {name: removeItem(state.name, action.Text)});
    case 'RECEIVE_POSTS':
        return Object.assign({}, state, {name: addItem(state.name, action.name)});
/*    case 'CHANGE_DELETE_NAME':
/*    case 'CHANGE_DELETE_NAME':
      nameList = state.name;
      const chipToDelete = nameList.map((chip) => chip.key).indexOf(key);
      nameList.splice(chipToDelete, 1);
      return Object.assign({}, state, {name: nameList});*/
    default:
        return state;
    }
}
export default chartReducers
