import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

const url = 'https://api.github.com/users'
const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

var loading = true;
//export default class RankingPermission extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        isMounted: false
      };
    }
  
  
    componentDidMount() {
      this.setState({ isMounted: true });
      if (this.state.isMounted = true) {
      //  this.props.fetchData();
        fetch(url)
          .then(function(response) {
            return response.json();
          })
          .then(function(json) {
            var Checked = json[1]["site_admin"]
            console.dir(Checked)
          })
      }
    }
  
    componentWillUnmount() {
      this.setState({ isMounted: false });
    }
    render(Checked,handleCheck) {
/*      fetch(url)
        .then(function(response) {
          return response.json();
          loading = false;
        })
        .then(function(json) {
          var Checked = json[1]["site_admin"]
          console.dir(Checked)
        })
        .then(function(Checked,handleCheck) {*/
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
        //})
    }
}
//RankingPermission.propTypes = {
//  Checked: PropTypes.bool,
//  handleCheck: PropTypes.func
//}
//export default RankingPermission
//  })


