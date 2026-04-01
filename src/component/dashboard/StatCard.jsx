import React from 'react';

const StatCard = ({ title, value, subValue, trend, icon: Icon, trendColor = "text-green-500" }) => {
  return (
    <div className="bg-[#1A1F2B] border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-white/10 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-white/50 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-white text-2xl font-bold tracking-tight">{value}</h3>
        </div>
        <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      
      <div className="flex items-center gap-2 mt-auto">
        {trend && (
          <span className={`text-xs font-semibold ${trendColor}`}>
            {trend}
          </span>
        )}
        {subValue && (
          <span className="text-white/30 text-xs">
            {subValue}
          </span>
        )}
      </div>
    </div>
  );
};

export default StatCard;
