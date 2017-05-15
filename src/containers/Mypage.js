import { connect } from 'react-redux'
import { setMypageCheck } from '../actions'
import Mypage from '../components/Mypage'

const getMypgeCheck = (filter) => {
  switch (filter) {
    case 'TRUE':
      return true
    case 'FALSE':
      return false
//    case 'FALSE':
//      return check.filter(t => t.completed)
//    case 'SHOW_ACTIVE':
//      return todos.filter(t => !t.completed)

const mapStateToProps = (state) => {
  return {
    mypage: getMypgeCheck(state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(setMypageCheck(check))
    }
  }
}

const MypageCheck = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mypage)

export default MypageCheck
