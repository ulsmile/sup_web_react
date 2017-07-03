export const changeTime = (time) => {
  return {
    type: 'CHANGE_TIME',
    time
  }
}
export const changeRecordTimeDistanceSelect = (distanceSelect) => {
  return {
    type: 'CHANGE_RECORD_TIME_DISTANCE_SELECT',
    distanceSelect
  }
}
export const changeRecordTimeBoardTypesSelect = (boardTypeSelect) => {
  return {
    type: 'CHANGE_RECORD_TIME_BOARD_TYPES_SELECT',
    boardTypeSelect
  }
}
export const pushRegisterButton = (registerValue) => {
  return {
    type: 'PUSH_REGISTER_BUTTON',
    registerValue
  }
}
