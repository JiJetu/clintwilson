import { Pencil, Trash2, MapPin } from 'lucide-react';

const ShuttleCard = ({ shuttle, onEdit, onDelete }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Idle':
        return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Maintenance':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-white/10 text-white/50 border-white/10';
    }
  };

  const capacityPercentage = (shuttle.capacityCurrent / shuttle.capacityMax) * 100;

  return (
    <div className="bg-[#1A1F2B] border border-white/5 rounded-3xl p-6 transition-all duration-300 hover:border-primary/20 group shadow-2xl">
      {/* Action Buttons */}
      <div className="flex items-center justify-end mb-3 gap-1 opacity-100 transition-opacity">
        <button
          onClick={() => onEdit(shuttle)}
          className="p-2 text-white/30 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          title="Edit Shuttle"
        >
          <Pencil size={18} />
        </button>
        <button
          onClick={() => onDelete(shuttle.id)}
          className="p-2 text-red-500/40 hover:text-red-500 hover:bg-red-500/5 rounded-lg transition-colors"
          title="Delete Shuttle"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Header Info */}
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-1">
          <h4 className="text-xl font-semibold text-white tracking-tight leading-none">{shuttle.name}</h4>
          <p className="text-white/30 text-[10px] font-medium uppercase tracking-widest leading-none mt-1">{shuttle.plate || 'ECO-1234'}</p>
        </div>
        <span className={`px-4 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-2 ${getStatusStyles(shuttle.status)}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${shuttle.status === 'Active' ? 'bg-green-500' :
            shuttle.status === 'Idle' ? 'bg-amber-500' : 'bg-red-500'
            }`} />
          {shuttle.status}
        </span>
      </div>

      {/* Details List */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-1 text-white/40 group-hover:text-white/60 transition-colors">
          <MapPin size={14} />
          <p className="text-sm font-medium">{shuttle.route}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-white/40 text-sm font-medium leading-none">Driver: <span className="text-white/80">{shuttle.driver}</span></p>
          <span className="text-primary font-medium text-sm uppercase tracking-tighter">ID: {shuttle.displayId || '001'}</span>
        </div>
      </div>

      {/* Capacity Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-end">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Capacity</p>
          <p className="text-white/40 text-[10px] font-bold tracking-widest">{shuttle.capacityCurrent}/{shuttle.capacityMax}</p>
        </div>
        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-primary rounded-full transition-all duration-1000 shadow-lg shadow-primary/20"
            style={{ width: `${capacityPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ShuttleCard;
