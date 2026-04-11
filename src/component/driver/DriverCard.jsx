import { Pencil, Trash2, Bell, Star, Clock, Phone, Bus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DriverCard = ({ driver, onEdit, onDelete, onNotify }) => {
  const navigate = useNavigate();
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Online':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Offline':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-white/5 text-white/30 border-white/10';
    }
  };

  return (
    <div 
      onClick={() => navigate(`/dashboard/drivers/${driver.id}`)}
      className="bg-card_bg border border-white/5 rounded-3xl p-6 transition-all duration-300 hover:border-primary/20 group relative shadow-2xl cursor-pointer"
    >
      {/* Action Buttons */}
      <div className="flex items-center justify-end mb-4 gap-1 opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNotify(driver);
          }}
          className="p-2 text-primary/40 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
          title="Send Notification"
        >
          <Bell size={18} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(driver);
          }}
          className="p-2 text-white/30 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          title="Edit Driver"
        >
          <Pencil size={18} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(driver.id);
          }}
          className="p-2 text-red-500/40 hover:text-red-500 hover:bg-red-500/5 rounded-lg transition-colors"
          title="Delete Driver"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Header Info */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center text-primary font-bold text-sm shadow-lg shadow-primary/5">
            {getInitials(driver.fullName)}
          </div>
          <div className="space-y-1">
            <h4 className="text-xl font-semibold text-white tracking-tight leading-none">{driver.fullName}</h4>
            <div className="flex flex-col gap-0.5">
              <p className="text-white/30 text-[10px] font-medium uppercase tracking-widest leading-none mt-1">{driver.displayId || 'Driver-01'}</p>
              <p className="text-white/20 text-[11px] font-medium leading-none mt-1">{driver.email}</p>
            </div>
          </div>
        </div>
        <span className={`px-4 py-1.5 rounded-full text-[10px] font-semibold border flex items-center gap-2 ${getStatusStyles(driver.status)}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${driver.status === 'Online' ? 'bg-green-500' : 'bg-red-500'}`} />
          {driver.status}
        </span>
      </div>

      {/* Metrics & Details */}
      <div className="space-y-4 pt-2 border-t border-white/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-amber-500">
            <Star size={14} fill="currentColor" />
            <p className="text-xs font-semibold tracking-tighter">4.7 <span className="text-white/20 ml-1 font-medium italic">- 1102 rides</span></p>
          </div>
          <div className="flex items-center gap-1.5 text-white/40 group-hover:text-primary transition-colors">
            <Phone size={14} />
            <p className="text-[11px] font-medium">{driver.phone}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-white/40 group-hover:text-primary transition-colors">
            <Clock size={14} />
            <p className="text-[11px] font-medium">{driver.shiftStarts} – {driver.shiftEnds}</p>
          </div>
          <div className="flex items-center gap-1.5 text-white/40 group-hover:text-primary transition-colors">
            <Bus size={14} />
            <p className="text-[11px] font-medium">{driver.assignedShuttle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
