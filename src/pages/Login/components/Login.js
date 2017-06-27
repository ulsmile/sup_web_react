import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const style = {
  margin: 12,
};

const Login  = ({onClick}) => (
   <div>
     <RaisedButton label="ログイン" style={style} onTouchTap={onClick} containerElement={<Link to='/'/>} />
   </div>
);

Login.propTypes = {
  onClick: PropTypes.func
}


export default Login
