import React from 'react';
import { Mail, CheckCircle2, Trash2, Send } from 'lucide-react';
import FormTextarea from '../ui/FormTextarea';
import Button from '../ui/Button';

const TicketDetailModal = ({ ticket, onReply, onAction, isSubmitting }) => {
  if (!ticket) return null;

  return (
    <div className="px-6 md:px-8 py-6 space-y-10 animate-in slide-in-from-bottom-5 duration-500 inter text-left">
      {/* Header with status badges */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/5 pb-10">
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold ring-4 ring-white/5 ${ticket.user.avatarColor || 'bg-primary text-secondary'}`}>
            {ticket.user.avatarText || ticket.user.fullName.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white tracking-tight">{ticket.user.fullName}</h2>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">{ticket.displayId}</span>
              <span className="text-xs text-white/30 font-medium">{ticket.user.email}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onAction('Resolved')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl border border-[#1FA75B]/20 text-[#1FA75B] bg-[#1FA75B]/5 hover:bg-[#1FA75B]/10 transition-all text-xs font-bold active:scale-95 ${ticket.status === 'Resolved' ? 'bg-[#1FA75B] text-white border-transparent' : ''}`}
          >
            <CheckCircle2 size={16} />
            Resolved
          </button>
          <button
            onClick={() => onAction('Deleted')}
            className="flex items-center gap-2 px-6 py-2.5 rounded-2xl border border-[#AF2E33]/20 text-[#AF2E33] bg-[#AF2E33]/5 hover:bg-[#AF2E33]/10 transition-all text-xs font-bold active:scale-95"
          >
            <Trash2 size={16} />
            Deleted
          </button>
        </div>
      </div>

      {/* Message and Reply */}
      <div className="space-y-8">
        {/* Original Message */}
        <div className="bg-[#313945]/20 border border-white/5 rounded-3xl p-8 space-y-4">
          <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/20">
            <span>Submitted Message</span>
            <span>{ticket.timeAgo}</span>
          </div>
          <p className="text-sm text-white/60 font-medium leading-relaxed">
            {ticket.message}
          </p>
        </div>

        {/* Reply Area */}
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onReply(); }}>
          <FormTextarea
            placeholder="Type your reply....."
            rows={6}
            className="rounded-2xl border-2 border-white/5 w-full bg-[#1A1F2B]/50 focus:bg-[#1A1F2B]/80 transition-all text-white/80 p-6"
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              isLoading={isSubmitting}
              icon={Send}
              className="px-8 h-12 bg-[#1FA75B] text-white hover:bg-[#1FA75B]/90 rounded-2xl shadow-xl shadow-[#1FA75B]/10 font-bold"
            >
              Send Reply
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketDetailModal;
