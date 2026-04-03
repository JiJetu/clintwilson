import React from 'react';
import { AlertCircle, MessageSquare, CheckCircle2, Clock } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'alert',
    message: 'Shuttle SH-005 Status Changed to maintenance',
    time: '2 min ago',
    color: 'text-[#AF2E33]',
    bgColor: 'bg-[#AF2E33]/10',
    borderColor: 'border-[#AF2E33]/20',
    icon: AlertCircle
  },
  {
    id: 2,
    type: 'warning',
    message: 'Shuttle SH-005 Status Changed to idle',
    time: '10 min ago',
    color: 'text-[#FF8D21]',
    bgColor: 'bg-[#FF8D21]/10',
    borderColor: 'border-[#FF8D21]/20',
    icon: AlertCircle
  },
  {
    id: 3,
    type: 'message',
    message: 'A new support message has been submitted',
    time: '10 min ago',
    color: 'text-[#2196F3]',
    bgColor: 'bg-[#2196F3]/10',
    borderColor: 'border-[#2196F3]/20',
    icon: MessageSquare
  },
  {
    id: 4,
    type: 'success',
    message: 'New driver Patricia Hayes (DR-08 onboarded',
    time: '10 min ago',
    color: 'text-[#1FA75B]',
    bgColor: 'bg-[#1FA75B]/10',
    borderColor: 'border-[#1FA75B]/20',
    icon: CheckCircle2
  }
];

const NotificationDropdown = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full right-0 mt-4 w-80 md:w-[380px] bg-[#111622] border border-white/10 rounded-2xl shadow-2xl shadow-black/80 z-[70] animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200 overflow-hidden">
      <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/5 backdrop-blur-xl">
        <h3 className="text-sm font-bold text-white uppercase tracking-widest pl-1">Notifications</h3>
        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">4 New</span>
      </div>

      <div className="max-h-[420px] overflow-y-auto p-3 space-y-2 no-scrollbar bg-white/[0.02]">
        {notifications.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`p-4 rounded-xl border ${item.borderColor} ${item.bgColor} flex gap-4 hover:brightness-110 transition-all cursor-pointer group relative overflow-hidden`}
            >
              {/* Highlight bar */}
              <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full ${item.color.replace('text-', 'bg-')} opacity-40`} />

              <div className="pt-0.5">
                <Icon size={18} className={item.color} />
              </div>

              <div className="flex-1 space-y-1">
                <p className={`text-sm font-medium leading-tight ${item.color} group-hover:text-white transition-colors duration-300`}>
                  {item.message}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-white/20 uppercase tracking-tight flex items-center gap-1.5">
                    <Clock size={10} />
                    {item.time}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full py-4 text-center text-xs font-bold text-white/40 hover:text-primary hover:bg-white/5 transition-all border-t border-white/5 uppercase tracking-widest bg-white/[0.01]">
        View all notifications
      </button>
    </div>
  );
};

export default NotificationDropdown;
