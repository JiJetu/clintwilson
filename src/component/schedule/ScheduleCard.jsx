import { Pencil, Trash2, MapPin, Clock, Bus } from 'lucide-react';

const ScheduleCard = ({ route, onEdit, onDelete }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Inactive':
        return 'bg-white/5 text-white/30 border-white/10';
      default:
        return 'bg-white/5 text-white/30 border-white/10';
    }
  };

  return (
    <div className="bg-card_bg border border-white/5 rounded-3xl p-6 transition-all duration-300 hover:border-primary/20 group relative shadow-2xl">
      {/* Action Buttons */}
      <div className="flex items-center justify-end mb-3 gap-1 opacity-100 transition-opacity">
        <button
          onClick={() => onEdit(route)}
          className="p-2 text-white/30 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          title="Edit Route"
        >
          <Pencil size={18} />
        </button>
        <button
          onClick={() => onDelete(route.id)}
          className="p-2 text-red-500/40 hover:text-red-500 hover:bg-red-500/5 rounded-lg transition-colors"
          title="Delete Route"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Header Info */}
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-2">
          <h4 className="text-xl font-semibold text-white tracking-tight leading-none">{route.name}</h4>
          <p className="text-white/30 text-[10px] font-medium uppercase tracking-widest leading-none mt-1">{route.displayId || 'RT-01'}</p>
        </div>
        <span className={`px-4 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-2 ${getStatusStyles(route.status)}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${route.status === 'Active' ? 'bg-green-500' : 'bg-white/20'}`} />
          {route.status}
        </span>
      </div>

      {/* Details List */}
      <div className="grid grid-cols-3 gap-4 items-center pt-2">
        <div className="flex items-center gap-1.5 text-white/40 group-hover:text-primary transition-colors">
          <MapPin size={14} />
          <p className="text-sm font-medium">{route.distance}</p>
        </div>
        <div className="flex items-center gap-1.5 text-white/40 group-hover:text-primary transition-colors">
          <Clock size={14} />
          <p className="text-sm font-medium">{route.duration}</p>
        </div>
        <div className="flex items-center gap-1.5 text-white/40 group-hover:text-primary transition-colors">
          <Bus size={14} />
          <p className="text-sm font-medium">{route.shuttlesAssigned} Shuttles</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
