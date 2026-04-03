import React from 'react';

const TicketCard = ({ ticket, onClick }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return 'bg-[#FF8D21]/10 text-[#FF8D21]';
      case 'In-Progress': return 'bg-[#2196F3]/10 text-[#2196F3]';
      case 'Resolved': return 'bg-[#1FA75B]/10 text-[#1FA75B]';
      case 'Deleted': return 'bg-[#AF2E33]/10 text-[#AF2E33]';
      default: return 'bg-white/5 text-white/30';
    }
  };

  const getStatusBullet = (status) => {
    switch (status) {
      case 'Open': return 'bg-[#FF8D21]';
      case 'In-Progress': return 'bg-[#2196F3]';
      case 'Resolved': return 'bg-[#1FA75B]';
      case 'Deleted': return 'bg-[#AF2E33]';
      default: return 'bg-white/20';
    }
  };

  return (
    <div 
      onClick={() => onClick(ticket)}
      className="bg-[#1A1F2B]/50 border border-white/5 rounded-3xl p-6 space-y-6 hover:border-white/10 transition-all cursor-pointer group backdrop-blur-md"
    >
      <div className="flex justify-between items-start gap-4">
        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ring-2 ring-white/5 group-hover:ring-primary/20 transition-all ${ticket.user.avatarColor || 'bg-primary text-[#101319]'}`}>
            {ticket.user.avatarText || ticket.user.fullName.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white group-hover:text-primary transition-colors leading-tight">{ticket.user.fullName}</span>
            <span className="text-[10px] text-white/20 font-bold tracking-widest uppercase mt-0.5">{ticket.displayId}</span>
            <span className="text-[11px] text-white/30 font-medium lowercase truncate mt-0.5">{ticket.user.email}</span>
          </div>
        </div>

        {/* Status Pill */}
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${getStatusColor(ticket.status)} transition-all`}>
          <div className={`w-1.5 h-1.5 rounded-full ${getStatusBullet(ticket.status)} shadow-[0_0_8px_rgba(0,0,0,0.5)]`} />
          <span className="text-[10px] font-bold uppercase tracking-wider">{ticket.status}</span>
        </div>
      </div>

      {/* Message Content */}
      <div className="space-y-2 flex-grow">
        <p className="text-[15px] text-white font-bold line-clamp-2 leading-relaxed group-hover:text-primary transition-colors">
          {ticket.message}
        </p>
      </div>

      {/* Bottom info */}
      <div className="flex justify-end pt-1">
        <span className="text-[11px] text-white/15 font-bold tracking-tight uppercase">
          {ticket.timeAgo}
        </span>
      </div>
    </div>
  );
};

export default TicketCard;
