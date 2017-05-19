import { connect } from 'react-redux'
import { listPlayers } from '../actions'
import Players from '../components/Players'

const mapStateToProps = (state) => {
	console.dir(state)
  return {
    players: state.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
			console.dir("aaa")
      dispatch(listPlayers())
    }
  }
}

const ListPlayers = connect(
  mapStateToProps,
  mapDispatchToProps
)(Players)

export default ListPlayers
