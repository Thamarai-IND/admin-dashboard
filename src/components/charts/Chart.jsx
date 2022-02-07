import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./Chart.css";
const Chart = ({title, data, dataKey, grid}) => {
  
  return (
    <div className='chart'>
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke='#2596be'/>
          <YAxis stroke='#2596be'/>
          <Line type="monotone" dataKey={dataKey} stroke='#2596be'/>
          <Tooltip />
          {grid && <CartesianGrid stroke='#856' strokeDasharray="5 5"/>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
