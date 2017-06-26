import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import {getRankingPermissionIfNeeded, changeCheck } from '../actions'

const url = 'https://api.github.com/users'
const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

/*fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    var Checked = json[1]["site_admin"]
    console.dir(Checked)
  })
  .then(function(func) {*/
const RankingPermission  = ({ Checked, handleCheck,state,dispatch,getRankingPermissionIfNeeded }) => {
//           console.dir(dispatch(getRankingPermissionIfNeeded(state)))
//           console.dir(Fetching)
           return (
             <div>
               <Checkbox
                   label="ランキング掲載許可"
                   style={styles.checkbox}
                   defaultChecked={Checked}
                   onCheck={handleCheck}
                 />

             </div>
           );
}
RankingPermission.propTypes = {
  Checked: PropTypes.bool,
  Fetching: PropTypes.bool,
  handleCheck: PropTypes.func
}
export default RankingPermission
//  })


