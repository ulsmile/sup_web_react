import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const HpPermission  = ({ Checked, handleCheck }) => {
           return (
             <div>
               <Checkbox
                   label="メンバー紹介掲載許可"
                   style={styles.checkbox}
                   defaultChecked={Checked}
                   onCheck={handleCheck}
                 />

             </div>
           );
}
HpPermission.propTypes = {
  Checked: PropTypes.bool,
  handleCheck: PropTypes.func
}
export default HpPermission
