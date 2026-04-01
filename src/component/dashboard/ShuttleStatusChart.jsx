import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Active', value: 12, color: '#1FA75B' },
  { name: 'Idle', value: 4, color: '#f59e0b' },
  { name: 'Maintenance', value: 2, color: '#ef4444' },
];

const ShuttleStatusChart = () => {
  return (
    <div className="bg-[#1A1F2B] border border-white/5 rounded-2xl p-6 h-[400px] flex flex-col transition-all duration-300">
      <h3 className="text-white text-xl font-semibold mb-6 tracking-tight">Shuttle status</h3>
      <div className="flex-1 min-h-0 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={8}
              dataKey="value"
              stroke="none"
              cornerRadius={8}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
                contentStyle={{ backgroundColor: '#1A1F2B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/5 text-center">
        {data.map((item) => (
          <div key={item.name} className="flex flex-col items-center gap-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
              <span className="text-[10px] sm:text-xs text-white/50 font-medium whitespace-nowrap">{item.name} ({item.value})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShuttleStatusChart;
