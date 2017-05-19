import React, { PropTypes } from 'react'
//import FlatButton from 'material-ui/FlatButton';

const Button  = ({onClick}) => (
   <div>
     <input type="button" value="PUSH HERE!" onClick={onClick} />
   </div>
);

Button.propTypes = {
  onClick: PropTypes.func
}

//Players.proptypes = {
//	players: Proptypes.object.isRequired,
//	onClick: PropTypes.func.isRequired,
//}

export default Button
