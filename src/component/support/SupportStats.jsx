import { AlertTriangle, MessageSquare, CheckCircle2, Trash2 } from 'lucide-react';

const SupportStats = ({ stats }) => {
  const statItems = [
    { label: 'Open', value: stats.open, color: 'text-[#FF8D21]', icon: AlertTriangle, bgColor: 'bg-[#FF8D21]/10' },
    { label: 'In-Progress', value: stats.inProgress, color: 'text-[#2196F3]', icon: MessageSquare, bgColor: 'bg-[#2196F3]/10' },
    { label: 'Resolved', value: stats.resolved, color: 'text-[#1FA75B]', icon: CheckCircle2, bgColor: 'bg-[#1FA75B]/10' },
    { label: 'Deleted', value: stats.deleted, color: 'text-[#AF2E33]', icon: Trash2, bgColor: 'bg-[#AF2E33]/10' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="bg-[#1A1F2B]/50 border border-white/5 rounded-2xl p-6 flex items-center justify-between group hover:border-white/10 transition-all duration-300 backdrop-blur-sm">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{item.label}</p>
              <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bgColor} border border-white/5`}>
              <Icon size={20} className={item.color} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SupportStats;
