import React, { PropTypes } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


/*const data = ({ Datetime, Time}) =>[
  {datetime: {Datetime}, time: {Time}},
]
console.dir(data)*/
const TimeChart = ({ Records }) =>{
    console.dir(Records)
    return (
      <LineChart width={600} height={300} data={Records}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="datetime"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="record_time" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
    )
}
TimeChart.propTypes = {
  Records: PropTypes.array,
}
export default TimeChart;


