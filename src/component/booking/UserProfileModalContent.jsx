import Button from '../ui/Button';
import { Mail, Phone, Calendar, Bus, UserMinus, Ban, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const UserProfileModalContent = ({ user }) => {
  const handleAction = (action) => {
    toast.success(`${action} successful for ${user.passenger}`);
  };

  return (
    <div className="px-4 md:px-8 py-6 md:py-8 space-y-6 md:space-y-8 animate-in slide-in-from-bottom-2 duration-500 inter text-left">
      {/* Header Profile */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/20 border-4 border-primary/40 flex items-center justify-center text-primary font-bold text-lg shadow-xl shadow-primary/10">
            JW
          </div>
          <div className="space-y-0.5 md:space-y-1.5">
            <h4 className="text-lg md:text-xl font-semibold text-white tracking-tight">{user.passenger}</h4>
            <div className="flex items-center gap-3">
              <span className="text-white/40 text-xs md:text-sm font-medium leading-none">User-01</span>
            </div>
          </div>
        </div>
        <div className="self-start sm:self-center text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-lg shadow-primary" />
          Active
        </div>
      </div>

      {/* Grid Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6 bg-white/5 p-4 md:p-6 rounded-3xl border border-white/5">
        <div className="flex items-center gap-4 group">
          <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors">
            <Mail size={18} className="text-primary" />
          </div>
          <div className="space-y-0.5">
            <p className="text-white/20 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Email Address</p>
            <p className="text-white/80 font-semibold text-xs md:text-sm group-hover:text-white transition-colors">emily.j@email.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4 group">
          <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors">
            <Phone size={18} className="text-primary" />
          </div>
          <div className="space-y-0.5">
            <p className="text-white/20 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Phone Number</p>
            <p className="text-white/80 font-semibold text-xs md:text-sm group-hover:text-white transition-colors">+1 (555) 2001</p>
          </div>
        </div>

        <div className="flex items-center gap-4 group">
          <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors">
            <Calendar size={18} className="text-primary" />
          </div>
          <div className="space-y-0.5">
            <p className="text-white/20 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Joined Date</p>
            <p className="text-white/80 font-semibold text-xs md:text-sm group-hover:text-white transition-colors">Jan 15, 2026</p>
          </div>
        </div>

        <div className="flex items-center gap-4 group">
          <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors">
            <Bus size={18} className="text-primary" />
          </div>
          <div className="space-y-0.5">
            <p className="text-white/20 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Last Ride</p>
            <p className="text-white/80 font-semibold text-xs md:text-sm group-hover:text-white transition-colors">Today</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-card_bg border border-white/5 rounded-3xl p-5 md:p-6 hover:border-primary/20 transition-all group relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={14} className="text-primary" />
          </div>
          <p className="text-white/30 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 md:mb-3">Total Rides</p>
          <h5 className="text-2xl md:text-3xl font-bold text-white tracking-tighter">48</h5>
        </div>

        <div className="bg-card_bg border border-white/5 rounded-3xl p-5 md:p-6 hover:border-primary/20 transition-all group relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={14} className="text-primary" />
          </div>
          <p className="text-white/30 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 md:mb-3">Total Spent</p>
          <h5 className="text-2xl md:text-3xl font-semibold text-white tracking-tighter">$312.50</h5>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-2">
        <Button
          variant="warning"
          onClick={() => handleAction('Deactivation')}
          icon={UserMinus}
          fullWidth
        >
          Deactivate Account
        </Button>
        <Button
          variant="danger"
          onClick={() => handleAction('Ban')}
          icon={Ban}
          fullWidth
        >
          Ban User Record
        </Button>
      </div>
    </div>
  );
};

export default UserProfileModalContent;
