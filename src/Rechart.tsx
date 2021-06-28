import React from 'react'
import { DateTime } from 'luxon'
import {Legend,
    ReferenceLine,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Brush,
    ResponsiveContainer
  } from 'recharts'

  const now = DateTime.local()
  const MAX_DATA = 100
  const TimeData = [...Array(MAX_DATA)].map((_,index) => {
      return {
          timestamp:now.plus({second:index}).toFormat('y/MM/dd HH:mm:ss'),
          value: Math.random()
      }
  })


  const TimeLineChart = () => {
      return(
        //   <ResponsiveContainer width="95%">
              <LineChart
          width={1200}
          height={600}
          data={TimeData}
          margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
          >
              <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
              <XAxis dataKey="timestamp" tick={{ fontSize: '.7rem' }} />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
      <ReferenceLine y={0} stroke="#000" />
      <Brush
        className="TimeLineChart-brush"
        dataKey="timestamp"
        stroke="#8884d8"
        startIndex={70}
        endIndex={99}
      />
      <Line dataKey="value" fill="#8884d8" />

          </LineChart>
        //   </ResponsiveContainer>
          
      )
  }

  export default TimeLineChart
