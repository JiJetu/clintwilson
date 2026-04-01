import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Oct', users: 1200 },
  { name: 'Nov', users: 1000 },
  { name: 'Dec', users: 1900 },
  { name: 'Jan', users: 1900 },
  { name: 'Feb', users: 2600 },
  { name: 'Mar', users: 2900 },
];

const UserGrowthChart = () => {
  return (
    <div className="bg-[#1A1F2B] border border-white/5 rounded-2xl p-6 h-[400px]">
      <h3 className="text-white text-xl font-semibold mb-6 tracking-tight">User Growth</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
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
            />
            <Tooltip 
                contentStyle={{ backgroundColor: '#1A1F2B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                itemStyle={{ color: '#1FA75B' }}
            />
            <Line 
                type="monotone" 
                dataKey="users" 
                stroke="#1FA75B" 
                strokeWidth={3}
                dot={{ r: 4, fill: '#1FA75B', strokeWidth: 0 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserGrowthChart;
