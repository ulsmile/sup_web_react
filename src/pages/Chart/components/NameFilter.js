import React, { PropTypes } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';

var value = ""
const NameFilter = ({Names, Records, onChange, handleRequestDelete}) => {
     var nameListAll = []
     for(var i=0 ; i<{Records}.Records.length ; i++){
       nameListAll.push({Records}.Records[i].name)
     }
     console.dir(nameList)
     //delete duplication
     var nameList = nameListAll.filter(function (x, i, self) {
            return self.indexOf(x) === i;
     });
     //console.dir(nameList)

     const styles = {
       chip: {
         margin: 4,
       },
       wrapper: {
         display: 'flex',
         flexWrap: 'wrap',
       },
     };
     var key = ""
     var list=[]
     console.dir({Names}.Names.length)
     for(var i=0; i < {Names}.Names.length; i++){
       key = Object.keys({Names}.Names[i])
       //value = Object.values({Names}.Names[i])
       value = {Names}.Names[i]
       //console.dir(value)
       list.push(
       //<Chip key={key} onRequestDelete={() => handleRequestDelete(value)} style={styles.chip}>
       <Chip style={styles.chip} >
          {{Names}.Names[i]}
       </Chip>
       );
       }
//     console.log(Object.keys({Names}.Names))
//     console.log(Object.values({Names}.Names))
     return(
       <div>
         <AutoComplete
           floatingLabelText="serch name"
           filter={AutoComplete.caseInsensitiveFilter}
           dataSource={nameList}
           onNewRequest={onChange}
         />
         {/*<Chip key={key} onRequestDelete={() => handleRequestDelete(key)} style={styles.chip} >
          {value}
         </Chip>*/}
         {list}
       </div>
     );
}

NameFilter.propTypes = {
  Names: PropTypes.array,
  Records: PropTypes.array,
  onChange: PropTypes.func,
  handleRequestDelete: PropTypes.func,
}
export default NameFilter;
