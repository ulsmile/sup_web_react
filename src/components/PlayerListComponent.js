import React, { PropTypes } from 'react'
import PlayerComponent from './PlayerComponent'

const PlayerListComponent = ({ players }) => (
  <ul>
    {players.map(player =>
      <PlayerComponent
        key={player.id}
        {...player}
      />
    )}
  </ul>
)

PlayerListComponent.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default PlayerListComponent
