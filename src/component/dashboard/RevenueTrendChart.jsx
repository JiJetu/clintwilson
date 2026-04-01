import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Oct', revenue: 1400 },
  { name: 'Nov', revenue: 1300 },
  { name: 'Dec', revenue: 2100 },
  { name: 'Jan', revenue: 1900 },
  { name: 'Feb', revenue: 2600 },
  { name: 'Mar', revenue: 2300 },
];

const RevenueTrendChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1FA75B" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#1FA75B" stopOpacity={0}/>
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
            tickFormatter={(value) => `$${value}k`}
        />
        <Tooltip 
            contentStyle={{ backgroundColor: '#1A1F2B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
            itemStyle={{ color: '#1FA75B' }}
        />
        <Area 
            type="monotone" 
            dataKey="revenue" 
            stroke="#1FA75B" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorRevenue)" 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RevenueTrendChart;
