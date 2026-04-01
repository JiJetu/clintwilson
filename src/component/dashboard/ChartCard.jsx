import { useState } from 'react';

const ChartCard = ({ title, children, filters = ["Daily", "Weekly", "Monthly"], defaultFilter = "Daily" }) => {
  const [activeFilter, setActiveFilter] = useState(defaultFilter);

  return (
    <div className="bg-[#1A1F2B] border border-white/5 rounded-2xl p-6 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h3 className="text-white text-xl font-semibold tracking-tight">{title}</h3>
        <div className="flex items-center gap-2 bg-black/20 p-1 rounded-xl">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-2 
                ${activeFilter === filter
                  ? "bg-white/10 text-white shadow-lg"
                  : "text-white/40 hover:text-white/60 hover:bg-white/5"}`}
            >
              <span className={`w-2 h-2 rounded-full ${activeFilter === filter ? (title.includes('Revenue') ? 'bg-green-500' : 'bg-blue-500') : 'bg-white/10'}`}></span>
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full h-[300px]">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;
