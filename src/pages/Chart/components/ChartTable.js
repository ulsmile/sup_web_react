import React, { PropTypes } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

//chart function
const CustomizedAxisTick = React.createClass({
  render () {
    function toHms(t) {
    var hms = "";
    var h = t / 3600 | 0;
    var m = t % 3600 / 60 | 0;
    var s = t % 60;
    if (h != 0) {
        hms = h + ":" + padZero(m) + ":" + padZero(s) ;
    } else if (m != 0) {
        hms = m + ":" + padZero(s);
    } else {
        hms = s;
    }
    return hms;
    function padZero(v) {
        if (v < 10) {
            return "0" + v;
        } else {
            return v;
        }
      }
    }
    const {x, y, stroke, payload} = this.props;
        
       return (
        <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(0)">{toHms(payload.value)}</text>
      </g>
    );
  }
});

const CustomTooltip  = React.createClass({
  propTypes: {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.string,
  },
  render() {
     const { active } = this.props;
 
     if (active) {
       const { payload, label } = this.props;
       return (
         <div className="custom-tooltip">
           <p className="date">記録日 : {payload[0].payload.datetime}</p>
           <p className="time">タイム : {payload[0].payload.record_time}</p>
           <p>距離 : {payload[0].payload.distance}</p>
           <p>ボード種類 : {payload[0].payload.board}</p>
           <p>場所 : {payload[0].payload.place}</p>
         </div>
       );
     }
 
     return null;
   }
 });

//table function
function get_obj_by_key_value(dataAry, key, value) {
            var result = $.grep(dataAry, function (e) {
                return e[key] == value;
            });
            return result;
        }

const ChartTable = ({ Records, Name ,Distance, RaceChecked, HardChecked, InflatableChecked}) => {
  //sort data
  var list1 = get_obj_by_key_value({Records}.Records, 'name', {Name}.Name);  
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
  return (
  <div>
    <LineChart width={600} height={300} data={list3}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="datetime" / >
       <YAxis dataKey="record_second_time" domain={['dataMin', 'dataMax']} tick={<CustomizedAxisTick/>} />
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip content={<CustomTooltip/>}/>
       <Legend payload={[{ value: 'record_time', type: 'line', id: 'ID01' }]} />
       <Line type="monotone" dataKey="record_second_time" stroke="#8884d8" activeDot={{r: 8}}/>
    </LineChart>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>日付</TableHeaderColumn>
          <TableHeaderColumn>名前</TableHeaderColumn>
          <TableHeaderColumn>ボード種類</TableHeaderColumn>
          <TableHeaderColumn>場所</TableHeaderColumn>
          <TableHeaderColumn>距離</TableHeaderColumn>
          <TableHeaderColumn>タイム</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
         {list3.map( (row, index) => (
           <TableRow key={index}>
             <TableRowColumn>{row.datetime}</TableRowColumn>
             <TableRowColumn>{Name}</TableRowColumn>
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
ChartTable.propTypes = {
  Records: PropTypes.array,
  Name: PropTypes.string,
  Distance: PropTypes.string,
  HardChecked: PropTypes.bool,
  InflatableChecked: PropTypes.bool,
  RaceChecked: PropTypes.bool,
  Term: PropTypes.string,
}

export default ChartTable;
