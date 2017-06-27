import React, { PropTypes } from 'react'
//import FlatButton from 'material-ui/FlatButton';

const Players  = ({ players, onClick }) => {
	console.dir(players)
 	return (
		<div>
  		<input type="button" value="button" onClick={onClick} />
			<div>
			  {players[0]}
			</div>
		</div>
  )
}

Players.propTypes = {
  players: PropTypes.array,
  onClick: PropTypes.func
}

//Players.proptypes = {
//	players: Proptypes.object.isRequired,
//	onClick: PropTypes.func.isRequired,
//}

export default Players
