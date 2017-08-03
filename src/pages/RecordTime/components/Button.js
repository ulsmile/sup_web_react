import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const style = {
  margin: 12,
};
const Button  = ({onClick}) => {
  return(
   <div>
     <RaisedButton label="登録" style={style} onTouchTap={onClick} containerElement={<Link to='/mypage'/>} />
   </div>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
}


export default Button
