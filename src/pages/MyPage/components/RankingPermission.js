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
//var check = true;
//console.dir(check)
//console.dir(state)

//const Propsss = (check=true) => {
//  return {
//    <div>
//      document.write(check);
//    </div>
//  }
//}
const RankingPermission = ({ check,onChange }) => {
//const RankingPermission = ({ onChange,state }) => (
  console.dir(check)
  return(
    <div style={styles.block}>
      <Checkbox
        label="ランキング掲載許可"
        style={styles.checkbox}
        checked={check}
  //      checked={this.state.check}
  //      onCheck={this.setRankingPermission.bind(this)}
        onCheck={() => (onChange)}
      />
    </div>
  )
}

RankingPermission.propTypes = {
  onChange: PropTypes.func,
  check: PropTypes.bool.isRequired
}
export default RankingPermission;

