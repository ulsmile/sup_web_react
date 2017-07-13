export const changeHardChecked = (hardChecked) => {
  return {
    type: 'CHANGE_HARD_CHECKED',
    hardChecked
  }
}
export const changeRaceChecked = (raceChecked) => {
  return {
    type: 'CHANGE_RACE_CHECKED',
    raceChecked
  }
}
export const changeInflatableChecked = (inflatableChecked) => {
  return {
    type: 'CHANGE_INFLATABLE_CHECKED',
    inflatableChecked
  }
}
export const changeDistanceSelect = (distanceSelect) => {
  return {
    type: 'CHANGE_DISTANCE_SELECT',
    distanceSelect
  }
}
export const changeTermSelect = (termSelect) => {
  return {
    type: 'CHANGE_TERM_SELECT',
    termSelect
  }
}
export const changeName = (searchText) => {
  return {
    type: 'CHANGE_FILTER_NAME',
    searchText
  }
}
export const deleteName = (Text) => {
  return {
    type: 'DELETE_FILTER_NAME',
    Text
  }
}
