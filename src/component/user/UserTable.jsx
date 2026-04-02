import { Eye, Ban, UserPlus, UserMinus } from 'lucide-react';

const UserTable = ({ users, onViewProfile, onToggleStatus, onToggleBan }) => {
  return (
    <div className="w-full bg-[#1A1F2B]/50 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-md">
      <div className="overflow-x-auto overflow-y-hidden no-scrollbar">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="px-6 py-5 text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">User</th>
              <th className="px-6 py-5 text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">Contact</th>
              <th className="px-6 py-5 text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">Status</th>
              <th className="px-6 py-5 text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">Joined</th>
              <th className="px-6 py-5 text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">Rides</th>
              <th className="px-6 py-5 text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">Spent</th>
              <th className="px-6 py-5 text-right text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase pr-10">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {users.map((user) => (
              <tr key={user.id} className="group hover:bg-white/[0.01] transition-all duration-300">
                {/* User Identity */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ring-2 ring-white/5 group-hover:ring-primary/20 transition-all ${user.avatarColor || 'bg-primary text-[#101319]'}`}>
                      {user.avatarText || user.fullName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors">{user.fullName}</span>
                      <span className="text-[10px] text-white/20 font-bold tracking-wider uppercase">{user.displayId}</span>
                    </div>
                  </div>
                </td>

                {/* Contact */}
                <td className="px-6 py-5">
                  <span className="text-sm text-white/40 font-medium lowercase tracking-tight">{user.email}</span>
                </td>

                {/* Status */}
                <td className="px-6 py-5">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-500/10 text-green-500' :
                    user.status === 'Banned' ? 'bg-red-500/10 text-red-500' :
                      'bg-white/5 text-white/30'
                    }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-500' :
                      user.status === 'Banned' ? 'bg-red-500' :
                        'bg-white/20'
                      }`} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{user.status}</span>
                  </div>
                </td>

                {/* Joined */}
                <td className="px-6 py-5">
                  <span className="text-sm text-white/40 font-medium">{user.joinedDate}</span>
                </td>

                {/* Rides */}
                <td className="px-6 py-5">
                  <span className="text-sm text-white font-bold tracking-tight">{user.ridesCount}</span>
                </td>

                {/* Spent */}
                <td className="px-6 py-5">
                  <span className="text-sm text-white font-bold tracking-tight">${user.totalSpent.toFixed(2)}</span>
                </td>

                {/* Actions */}
                <td className="px-6 py-5 pr-10 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => onViewProfile(user)}
                      className="p-2.5 text-white/20 hover:text-white hover:bg-white/5 rounded-xl transition-all active:scale-90"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => onToggleBan(user)}
                      className={`p-2.5 rounded-xl transition-all active:scale-90 ${user.status === 'Banned' ? 'text-red-500 bg-red-500/10' : 'text-white/20 hover:text-red-500 hover:bg-red-500/10'
                        }`}
                    >
                      <Ban size={18} />
                    </button>
                    <button
                      onClick={() => onToggleStatus(user)}
                      className="p-2.5 text-white/20 hover:text-primary hover:bg-primary/10 rounded-xl transition-all active:scale-90"
                    >
                      {user.status === 'Active' ? <UserMinus size={18} /> : <UserPlus size={18} />}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
