export const changeRankingDistanceSelect = (select) => {
  return {
    type: 'CHANGE_RANKING_DISTANCE_SELECT',
    select
  }
}
export const changeRankingTermSelect = (select) => {
  return {
    type: 'CHANGE_RANKING_TERM_SELECT',
    select
  }
}
export const changeMaleChecked = (check) => {
  return {
    type: 'CHANGE_MALE_CHECKED',
    check:check
  }
}
export const changeFemaleChecked = (check) => {
  return {
    type: 'CHANGE_FEMALE_CHECKED',
    check:check
  }
}
export const changeRankingHardChecked = (check) => {
  return {
    type: 'CHANGE_RANKING_HARD_CHECKED',
    check:check
  }
}
export const changeRankingRaceChecked = (check) => {
  return {
    type: 'CHANGE_RANKING_RACE_CHECKED',
    check:check
  }
}
export const changeRankingInflatableChecked = (check) => {
  return {
    type: 'CHANGE_RANKING_INFLATABLE_CHECKED',
    check:check
  }
}
