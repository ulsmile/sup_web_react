import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
//import data from '../fetch';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

//var fs = require('fs');
const url = 'https://api.github.com/users'
/*fetch(url).then(function(response) {
  return response.json();
}).then(function(json) {
  var check = json[0]["site_admin"]
  console.dir(check)
});*/

/*var asyncFunc = async function() {
  try {
    let response = await fetch(url);
    let data = response.json();
    console.log(data);
    var check = data[0]["site_admin"]
    console.log(check);
  } catch(e) {
    console.log("Error!");
  }
}*/

//export default class RankingPermission extends React.Component {

   fetch(url)
       .then(function(response) {
       if(response.ok) { // ステータスがokならば
         return response.json();
         .then(function(json) {
         var check = json[0]["site_admin"]
         console.dir(check)
         });
         constructor(props) {
           /*fetch(url)
             .then(function(response) {
             if(response.ok) { // ステータスがokならば
               return response.json();
             }
             else {
               pass
             }
             })
             .then(function(json) {
             var check = json[0]["site_admin"]
             console.dir(check)
           });*/
           super(props);
           /*console.dir(data[0])
           var check = data[0]["site_admin"]
           asyncFunc();*/
           var check = true
           this.state = {Checked: check};
         }
       }
      })

         handleCheck() {
           this.setState({Checked: !this.state.Checked});
 //          fs.writeFile('hoge.json', JSON.stringify(this.state.Checked, null, '    '));
           console.log(this.state.Checked)
         }

         render() {
           return (
             <div>
               <Checkbox
                   label="ランキング掲載許可"
                   style={styles.checkbox}
                   defaultChecked={this.state.Checked}
                   onCheck={this.handleCheck.bind(this)}
                 />

             </div>
           );
         }
       }
       else {
         pass
       }
      }
     })
    }

