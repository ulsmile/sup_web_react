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

const BoardTypes  = ({ HardChecked, hardHandleCheck, RaceChecked, raceHandleCheck, InflatableChecked, inflatableHandleCheck}) => {
        return (
          <div style={styles.block}>
            <Checkbox
              label="ハードボード"
              style={styles.checkbox}
              defaultChecked={HardChecked}
              onCheck={hardHandleCheck}
            />
            <Checkbox
              label="レースボード"
              style={styles.checkbox}
              defaultChecked={RaceChecked}
              onCheck={raceHandleCheck}
            />
            <Checkbox
              label="インフレ-タブルボード"
              style={styles.checkbox}
              defaultChecked={InflatableChecked}
              onCheck={inflatableHandleCheck}
            />
          </div>
        );
}

BoardTypes.propTypes = {
  HardChecked: PropTypes.bool,
  RaceChecked: PropTypes.bool,
  InflatableChecked: PropTypes.bool,
  hardHandleCheck: PropTypes.func,
  raceHandleCheck: PropTypes.func,
  inflatableHandleCheck: PropTypes.func
}
export default BoardTypes;
