import { connect } from 'react-redux'
import { setMypageCheck } from '../actions'
import MypageInfo from '../components/Mypage'

const getMypageCheck = (check,filter) => {
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
  return {
    mypage: getMypageCheck(state.check)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: () => {
      console.dir("aaa")
      dispatch(setMypageCheck(check))
    }
  }
}

const MypageCheck = connect(
  mapStateToProps,
  mapDispatchToProps
)(MypageInfo)

export default MypageCheck
