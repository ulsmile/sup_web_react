import React, { PropTypes } from 'react'

const PlayerComponent = ({ name, rankPermission, selfIntro }) => (
  <li>
    {name},
		{rankPermission},
		{selfIntro}
  </li>
)

PlayerComponent.propTypes = {
  name : PropTypes.string.isRequired,
  rankPermission: PropTypes.bool.isRequired,
  selfIntro: PropTypes.string.isRequired
}

export default PlayerComponent
