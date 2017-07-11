import React, { PropTypes } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


/*const data = ({ Datetime, Time}) =>[
  {datetime: {Datetime}, time: {Time}},
]
console.dir(data)*/
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

const TimeChart = ({ Records }) =>{
    console.dir(Records)
    return (
      <LineChart width={600} height={300} data={Records}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="datetime" / >
         <YAxis dataKey="record_second_time" domain={['dataMin', 'dataMax']} tick={<CustomizedAxisTick/>} />
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip content={<CustomTooltip/>}/>
         <Legend payload={[{ value: 'record_time', type: 'line', id: 'ID01' }]} />
         <Line type="monotone" dataKey="record_second_time" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
    )
}
TimeChart.propTypes = {
  Records: PropTypes.array,
}
export default TimeChart;


         //<Tooltip content={<CustomTooltip/>}/>
         //<Tooltip payload={[{ value: 'record_time', distance:"distance"}]} content={<CustomTooltip/>}/>
