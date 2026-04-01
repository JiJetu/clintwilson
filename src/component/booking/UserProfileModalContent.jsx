import { Mail, Phone, Calendar, Bus, UserMinus, Ban, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const UserProfileModalContent = ({ user }) => {
  const handleAction = (action) => {
    toast.success(`${action} successful for ${user.passenger}`);
  };

  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-bottom-2 duration-500 inter">
      {/* Header Profile */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-primary/20 border-4 border-primary/40 flex items-center justify-center text-primary font-bold text-lg shadow-xl shadow-primary/10">
            JW
          </div>
          <div className="space-y-1.5">
            <h4 className="text-xl font-semibold text-white tracking-tight">{user.passenger}</h4>
            <div className="flex items-center gap-3">
              <span className="text-white/40 text-sm font-medium leading-none">User-01</span>
            </div>
          </div>
        </div>
        <div className="text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-lg shadow-primary" />
          Active
        </div>
      </div>

      {/* Grid Contact Info */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-6 bg-white/5 p-6 rounded-3xl border border-white/5">
        <div className="flex items-center gap-4 group">
          <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors">
            <Mail size={18} className="text-primary" />
          </div>
          <div className="space-y-0.5">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Email Address</p>
            <p className="text-white/80 font-semibold text-sm group-hover:text-white transition-colors">emily.j@email.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4 group">
          <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors">
            <Phone size={18} className="text-primary" />
          </div>
          <div className="space-y-0.5">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Phone Number</p>
            <p className="text-white/80 font-semibold text-sm group-hover:text-white transition-colors">+1 (555) 2001</p>
          </div>
        </div>

        <div className="flex items-center gap-4 group">
          <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors">
            <Calendar size={18} className="text-primary" />
          </div>
          <div className="space-y-0.5">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Joined Date</p>
            <p className="text-white/80 font-semibold text-sm group-hover:text-white transition-colors">Jan 15, 2026</p>
          </div>
        </div>

        <div className="flex items-center gap-4 group">
          <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors">
            <Bus size={18} className="text-primary" />
          </div>
          <div className="space-y-0.5">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Last Ride</p>
            <p className="text-white/80 font-semibold text-sm group-hover:text-white transition-colors">Today</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#1A1F2B] border border-white/5 rounded-3xl p-6 hover:border-primary/20 transition-all group relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={14} className="text-primary" />
          </div>
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-3">Total Rides</p>
          <h5 className="text-3xl font-bold text-white tracking-tighter">48</h5>
        </div>

        <div className="bg-[#1A1F2B] border border-white/5 rounded-3xl p-6 hover:border-primary/20 transition-all group relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={14} className="text-primary" />
          </div>
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-3">Total Spent</p>
          <h5 className="text-3xl font-semibold text-white tracking-tighter">$312.50</h5>
          {/* <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[80%] rounded-full shadow-lg shadow-primary/50" />
          </div> */}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleAction('Deactivation')}
          className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-amber-500/10 text-amber-500 font-black tracking-tight border-2 border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-500 transition-all active:scale-95 shadow-xl shadow-amber-500/5 group"
        >
          <UserMinus size={20} className="group-hover:rotate-12 transition-transform" />
          Deactivate Account
        </button>
        <button
          onClick={() => handleAction('Ban')}
          className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-red-500/10 text-red-500 font-black tracking-tight border-2 border-red-500/20 hover:bg-red-500/20 hover:border-red-500 transition-all active:scale-95 shadow-xl shadow-red-500/5 group"
        >
          <Ban size={20} className="group-hover:scale-110 transition-transform" />
          Ban User Record
        </button>
      </div>
    </div>
  );
};

export default UserProfileModalContent;
