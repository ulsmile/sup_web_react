import React, { PropTypes } from 'react'

const RegisterButton  = ({onClick}) => (
   <div>
     <input type="button" value="登録" onClick={onClick} />
   </div>
);

RegisterButton.propTypes = {
  onClick: PropTypes.func
}


export default RegisterButton
