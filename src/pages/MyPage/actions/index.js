export const changeRankingPermissionCheck = (rankingPermissionCheck) => {
  return {
    type: 'CHANGE_RANKING_PERMISSION_CHECK',
    rankingPermissionCheck
  }
}

export const changeHpPermissionCheck = (hpPermissionCheck) => {
  return {
    type: 'CHANGE_HP_PERMISSION_CHECK',
    hpPermissionCheck
  }
}
export const changeGenderSelect = (genderSelect) => {
  return {
    type: 'CHANGE_GENDER_SELECT',
    genderSelect
  }
}
export const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
}
export const pushRegisterButton = (registerValue) => {
  return {
    type: 'PUSH_MYPAGE_REGISTER_BUTTON',
    registerValue
  }
}

