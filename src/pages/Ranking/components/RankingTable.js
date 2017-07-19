import React, { PropTypes } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

//table function
function get_obj_by_key_value(dataAry, key, value) {
            var result = $.grep(dataAry, function (e) {
                return e[key] == value;
            });
            return result;
        }

const RankingTable = ({ Records, Distance, RaceChecked, HardChecked, InflatableChecked, FemaleChecked, MaleChecked, Term}) => {
  //sort data
  var list1 = []
  var list2 = []
  var list3 = []
  /*for (var i = 0; i < {Names}.Names.length; i++) {
    var list = get_obj_by_key_value({Records}.Records, 'name', {Names}.Names[i]); 
    for (var j = 0; j < list.length; j++) {
      list1.push(list[j]) 
    }
  }*/
  if({MaleChecked}.MaleChecked && {FemaleChecked}.FemaleChecked){
    var array1 = get_obj_by_key_value({Records}.Records, 'gender', "男性");
    var array2 = get_obj_by_key_value({Records}.Records, 'gender', "女性");
    var list1 = array1.concat(array2);
  }
  else if({MaleChecked}.MaleChecked && !{FemaleChecked}.FemaleChecked){
    var list1 = get_obj_by_key_value({Records}.Records, 'gender', "男性");
  }
  else if(!{MaleChecked}.MaleChecked && {FemaleChecked}.FemaleChecked){
    var list1 = get_obj_by_key_value({Records}.Records, 'gender', "女性");
  }
  else{
    var list1 = []
    console.dir("Please check anything")
  }
  var list2 = get_obj_by_key_value(list1, 'distance', Number({Distance}.Distance));  
  if({RaceChecked}.RaceChecked && {HardChecked}.HardChecked && {InflatableChecked}.InflatableChecked){
    var array1 = get_obj_by_key_value(list2, 'board', "0~10");
    var array2 = get_obj_by_key_value(list2, 'board', "11~20");
    var array3 = get_obj_by_key_value(list2, 'board', "21~30");
    var array4 = array1.concat(array2);
    var list3 = array3.concat(array4);
  }
  else if({RaceChecked}.RaceChecked && {HardChecked}.HardChecked && !{InflatableChecked}.InflatableChecked){
    var array1 = get_obj_by_key_value(list2, 'board', "0~10");
    var array2 = get_obj_by_key_value(list2, 'board', "11~20");
    var list3 = array1.concat(array2);
  }
  else if({RaceChecked}.RaceChecked && !{HardChecked}.HardChecked && {InflatableChecked}.InflatableChecked){
    var array1 = get_obj_by_key_value(list2, 'board', "0~10");
    var array2 = get_obj_by_key_value(list2, 'board', "21~30");
    var list3 = array1.concat(array2);
  }
  else if(!{RaceChecked}.RaceChecked && {HardChecked}.HardChecked && {InflatableChecked}.InflatableChecked){
    var array1 = get_obj_by_key_value(list2, 'board', "11~20");
    var array2 = get_obj_by_key_value(list2, 'board', "21~30");
    var list3 = array1.concat(array2);
  }
  else if({RaceChecked}.RaceChecked && !{HardChecked}.HardChecked && !{InflatableChecked}.InflatableChecked){
    var list3 = get_obj_by_key_value(list2, 'board', "0~10");
  }
  else if(!{RaceChecked}.RaceChecked && {HardChecked}.HardChecked && !{InflatableChecked}.InflatableChecked){
    var list3 = get_obj_by_key_value(list2, 'board', "11~20");
  }
  else if(!{RaceChecked}.RaceChecked && !{HardChecked}.HardChecked && {InflatableChecked}.InflatableChecked){
    var list3 = get_obj_by_key_value(list2, 'board', "21~30");
  }
  else {
    var list3 = []
    console.dir("Please check anything")
  }

/*  for (var j = 0; j < {Names}.Names.length; j++) {
    for (var i = 0; i < list3.length; i++) {
      if(list3[i]["name"] == {Names}.Names[j]){
        list3[i][{Names}.Names[j]] =  list3[i]["record_second_time"];
      }
    }
  }*/

  var names = []
  for (var i = 0; i < list3.length; i++) {
    names.push(list3[i]["name"])
  }
  var namesList = names.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
  //each person records
  var min_records = []
  for (var i = 0; i < namesList.length; i++) {
    var each1 = get_obj_by_key_value(list3, 'name', namesList[i]);
    var each2 = []
    for (var j = 0; j < each1.length; j++) {
      each2.push(each1[j]["record_second_time"])
    }
    console.dir(Math.min.apply(null, each2))
    var each3 = get_obj_by_key_value(each1, 'record_second_time', Math.min.apply(null, each2) );
    console.dir(each1)
    console.dir(each3)
    for (var k = 0; k < each3.length; k++) {
      min_records.push(each3[k])
    }
  }
  console.dir(min_records)

  var rankingList = []
  for (var i = 0; i < min_records.length; i++) {
      rankingList.push(min_records[i]["record_second_time"])
  }
  rankingList =rankingList.sort(function(a,b){
          if( a < b ) return -1;
          if( a > b ) return 1;
          return 0;
          });
  var rankingList = rankingList.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
  var rankingAllList = []
  for (var i = 0; i < rankingList.length; i++) {
      rankingAllList.push(get_obj_by_key_value(min_records, 'record_second_time', rankingList[i]));
  }
  var rankingListTable = []
  for (var i = 0; i < rankingAllList.length; i++) {
     rankingListTable.push(rankingAllList[i][0])
  }
  console.dir(rankingListTable)
  var top3 = rankingListTable.slice(0,3)
  return (
  <div>
     <GridList style={styles.gridList} cols={2.2}>
      {top3.map((tile, index) => (
        <GridTile
          key={tile.name}
          title={index+1+'位'+tile.name}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
        </GridTile>
      ))}
    </GridList>
    <Table>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>順位</TableHeaderColumn>
          <TableHeaderColumn>日付</TableHeaderColumn>
          <TableHeaderColumn>名前</TableHeaderColumn>
          <TableHeaderColumn>ボード種類</TableHeaderColumn>
          <TableHeaderColumn>場所</TableHeaderColumn>
          <TableHeaderColumn>距離</TableHeaderColumn>
          <TableHeaderColumn>タイム</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
         {rankingListTable.map( (row, index) => (
           <TableRow key={index}>
             <TableRowColumn>{index+1}</TableRowColumn>
             <TableRowColumn>{row.datetime}</TableRowColumn>
             <TableRowColumn>{row.name}</TableRowColumn>
             <TableRowColumn>{row.board}</TableRowColumn>
             <TableRowColumn>{row.place}</TableRowColumn>
             <TableRowColumn>{row.distance}</TableRowColumn>
             <TableRowColumn>{row.record_time}</TableRowColumn>
           </TableRow>
           ))}
      </TableBody>
    </Table>
  </div>
  );
}
RankingTable.propTypes = {
  Records: PropTypes.array,
  Distance: PropTypes.string,
  HardChecked: PropTypes.bool,
  InflatableChecked: PropTypes.bool,
  RaceChecked: PropTypes.bool,
  FemaleChecked: PropTypes.bool,
  MaleChecked: PropTypes.bool,
  Term: PropTypes.string,
}
export default RankingTable;