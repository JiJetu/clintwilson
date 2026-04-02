import { Mail, ShieldAlert, UserMinus, UserPlus, Clock, Phone, CalendarDays } from 'lucide-react';
import Button from '../ui/Button';

const UserProfileModal = ({ user, onSendMail, onToggleStatus, onToggleBan }) => {
  if (!user) return null;

  return (
    <div className="px-6 md:px-10 py-6 space-y-10 animate-in slide-in-from-bottom-5 duration-500 inter text-left overflow-hidden">
      {/* Profile Header */}
      <div className="flex flex-col gap-4 border-b border-white/5 pb-10">
        <div className="flex-1 space-y-4 text-center md:text-left flex items-center justify-between gap-4">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-medium ring-4 ring-white/5 shadow-2xl ${user.avatarColor || 'bg-primary text-secondary'}`}>
              {user.avatarText || user.fullName.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">{user.fullName}</h2>
              <p className="text-[10px] font-bold tracking-widest text-white/20 uppercase mt-1">{user.displayId}</p>
            </div>

          </div>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full self-center md:self-start ${user.status === 'Active' ? 'bg-green-500/10 text-green-500' :
            user.status === 'Banned' ? 'bg-red-500/10 text-red-500' :
              'bg-white/5 text-white/30'
            }`}>
            <div className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-green-500' :
              user.status === 'Banned' ? 'bg-red-500' :
                'bg-white/20'
              }`} />
            <span className="text-xs font-bold uppercase tracking-wider">{user.status}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
          <div className="flex items-center gap-3 text-white/40">
            <Mail size={16} className="text-primary/40" />
            <span className="text-sm font-medium">{user.email}</span>
          </div>
          <div className="flex items-center gap-3 text-white/40">
            <Phone size={16} className="text-primary/40" />
            <span className="text-sm font-medium">{user.phone || '+1 (555) 2001'}</span>
          </div>
          <div className="flex items-center gap-3 text-white/40">
            <CalendarDays size={16} className="text-primary/40" />
            <span className="text-sm font-medium">Joined {user.joinedDate}</span>
          </div>
          <div className="flex items-center gap-3 text-white/40">
            <Clock size={16} className="text-primary/40" />
            <span className="text-sm font-medium">Last ride: {user.lastRide || 'Today'}</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-[#111622] border border-white/5 rounded-3xl p-8 space-y-2 group hover:border-primary/20 transition-all duration-500">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest pl-1">Total Rides</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold text-white tracking-tighter group-hover:text-primary transition-colors">{user.ridesCount}</span>
          </div>
        </div>
        <div className="bg-[#111622] border border-white/5 rounded-3xl p-8 space-y-2 group hover:border-primary/20 transition-all duration-500">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest pl-1">Total Spent</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold text-white tracking-tighter group-hover:text-primary transition-colors">${user.totalSpent.toFixed(2)} </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button
          onClick={() => onSendMail(user)}
          icon={Mail}
          className="flex-1 bg-[#1FA75B] text-white hover:bg-[#1FA75B]/90 h-14 rounded-2xl text-base font-bold shadow-xl shadow-green-500/10"
        >
          Send mail
        </Button>
        <Button
          onClick={() => onToggleStatus(user)}
          variant="outline"
          icon={user.status === 'Active' ? UserMinus : UserPlus}
          className={`flex-1 border-[#FF8D21]/30 h-14 rounded-2xl text-base font-bold ${user.status === 'Active' ? 'bg-[#FF8D21]/5 hover:bg-[#FF8D21]/10 text-[#FF8D21]' : 'bg-primary hover:bg-primary/90 text-secondary'}`}
        >
          {user.status === 'Active' ? 'Deactivate' : 'Activate User'}
        </Button>
        <Button
          onClick={() => onToggleBan(user)}
          icon={ShieldAlert}
          className="flex-1 bg-[#AF2E33] text-white hover:bg-[#AF2E33]/90 h-14 rounded-2xl text-base font-bold shadow-xl shadow-red-500/10"
        >
          {user.status === 'Banned' ? 'Unban User' : 'Ban User'}
        </Button>
      </div>
    </div>
  );
};

export default UserProfileModal;
