import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Oct', rides: 140 },
  { name: 'Nov', rides: 120 },
  { name: 'Dec', rides: 220 },
  { name: 'Jan', rides: 180 },
  { name: 'Feb', rides: 250 },
  { name: 'Mar', rides: 190 },
];

const RidesAnalyticsChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorRides" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
        <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }}
            dy={10}
        />
        <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }}
            tickFormatter={(value) => `${value}`}
        />
        <Tooltip 
            contentStyle={{ backgroundColor: '#1c1f26', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
            itemStyle={{ color: '#3b82f6' }}
        />
        <Area 
            type="monotone" 
            dataKey="rides" 
            stroke="#3b82f6" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorRides)" 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RidesAnalyticsChart;
