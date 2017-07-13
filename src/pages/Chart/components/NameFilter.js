import React, { PropTypes } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';

var value = ""
const NameFilter = ({Name, Records, onChange, handleRequestDelete}) => {
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
     console.dir({Name}.Name.length)
     for(var i=0; i < {Name}.Name.length; i++){
       key = Object.keys({Name}.Name[i])
       //value = Object.values({Name}.Name[i])
       value = {Name}.Name[i]
       //console.dir(value)
       list.push(
       //<Chip key={key} onRequestDelete={() => handleRequestDelete(value)} style={styles.chip}>
       <Chip style={styles.chip} >
          {{Name}.Name[i]}
       </Chip>
       );
       }
//     console.log(Object.keys({Name}.Name))
//     console.log(Object.values({Name}.Name))
     return(
       <div>
         <AutoComplete
           floatingLabelText="serch name"
           filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
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
  Name: PropTypes.array,
  Records: PropTypes.array,
  onChange: PropTypes.func,
  handleRequestDelete: PropTypes.func,
}
export default NameFilter;
