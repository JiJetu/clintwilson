import React from 'react';
import { Bus, Compass } from 'lucide-react';

const MonitorMap = () => {
  const shuttles = [
    { name: 'Alpha', top: '25%', left: '15%' },
    { name: 'Zeta', top: '15%', left: '65%' },
    { name: 'Beta', top: '65%', left: '20%' },
    { name: 'Eta', top: '35%', left: '85%' },
    { name: 'Delta', top: '65%', left: '85%' },
  ];

  return (
    <div className="relative w-full h-[600px] bg-[#111622] rounded-3xl overflow-hidden border border-white/5 shadow-2xl group">
      {/* Grid Pattern */}
      <div className="absolute inset-x-0 inset-y-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-x-0 inset-y-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Central Placeholder Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-20">
        <Compass size={80} className="text-primary mb-4 animate-pulse" />
        <h3 className="text-2xl font-bold text-white tracking-widest uppercase">Interactive Map View</h3>
      </div>

      {/* Shuttle Markers */}
      {shuttles.map((shuttle) => (
        <div 
          key={shuttle.name}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 hover:scale-110 cursor-pointer group/marker"
          style={{ top: shuttle.top, left: shuttle.left }}
        >
          {/* Label */}
          <div className="mb-2 bg-[#1A1F2B]/90 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap shadow-xl">
             <div className="flex flex-col items-center">
               <span className="text-white font-bold text-xs">{shuttle.name}</span>
               <div className="w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-primary border-r-[6px] border-r-transparent mt-1" />
             </div>
          </div>
          
          {/* Icon */}
          <div className="w-12 h-12 bg-primary/20 border-2 border-primary/40 rounded-2xl flex items-center justify-center text-primary shadow-2xl group-hover/marker:bg-primary/30 group-hover/marker:border-primary transition-all">
            <Bus size={20} />
          </div>
        </div>
      ))}

      {/* Map Controls Mockup */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-2">
        <button className="w-10 h-10 bg-[#1A1F2B] border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/5 transition-colors">+</button>
        <button className="w-10 h-10 bg-[#1A1F2B] border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/5 transition-colors">-</button>
      </div>
    </div>
  );
};

export default MonitorMap;
