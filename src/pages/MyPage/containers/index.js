import { connect } from 'react-redux'
import { setRankingPermission } from '../actions'
import RankingPermission from '../components/RankingPermission'

const getRankingPermission = (check,filter) => {
  switch (check) {
    case true:
      return false
    case false:
      return true
  }
}
//const getMypgeCheck = (check) => {
//  switch (check) {
//    case 'TRUE':
//      return check(t => a)
//    case 'FALSE':
//      return check(t => b)

const mapStateToProps = (state) => {
  console.dir(state.check)
  return {
    check: getRankingPermission(state.check)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: () => {
      console.dir("aaa")

      dispatch(setRankingPermission())
    }
  }
}

const RankingPermissionCheck = connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingPermission)

export default RankingPermissionCheck
