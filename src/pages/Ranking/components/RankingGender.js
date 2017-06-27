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

const RankingGender  = ({ MaleChecked, maleHandleCheck, FemaleChecked, femaleHandleCheck}) => {
        return (
          <div style={styles.block}>
            <Checkbox
              label="男性"
              style={styles.checkbox}
              defaultChecked={MaleChecked}
              onCheck={maleHandleCheck}
            />
            <Checkbox
              label="女性"
              style={styles.checkbox}
              defaultChecked={FemaleChecked}
              onCheck={femaleHandleCheck}
            />
          </div>
        );
}
RankingGender.propTypes = {
  MaleChecked: PropTypes.bool,
  FemaleChecked: PropTypes.bool,
  maleHandleCheck: PropTypes.func,
  femaleHandleCheck: PropTypes.func
}
export default RankingGender
