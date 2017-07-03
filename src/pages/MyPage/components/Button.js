import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const style = {
  margin: 12,
};
const Button  = ({onClick}) => (
   <div>
     <RaisedButton label="登録" style={style} onTouchTap={onClick} />
   </div>
);

Button.propTypes = {
  onClick: PropTypes.func
}


export default Button
