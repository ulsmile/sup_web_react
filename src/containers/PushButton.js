import { connect } from 'react-redux'
import { push } from '../actions'
import Button from '../components/Button'

const mapStateToProps = (state) => {
  return {
    key: state.key
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      console.dir("aaa")
      dispatch(push())
    }
  }
}

const PushButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default PushButton
