import React, { useState } from 'react';
import Header from '../component/shared/Header';
import SupportStats from '../component/support/SupportStats';
import SupportFilters from '../component/support/SupportFilters';
import TicketCard from '../component/support/TicketCard';
import Modal from '../component/ui/Modal';
import TicketDetailModal from '../component/support/TicketDetailModal';
import { toast } from 'sonner';

const initialTickets = [
    { id: '1', displayId: 'Tk-01', user: { fullName: 'Chris Martin', email: 'user@gmail.com', avatarColor: 'bg-[#1FA75B]', avatarText: 'CM' }, status: 'Open', message: 'Driver was rude and unprofessional. The driver on my last ride BK-4506 was extremely rude. He was talking loudly on the phone the entire ride and refused to help with my luggage. This is unacceptable behavior.', timeAgo: '2 hours ago' },
    { id: '2', displayId: 'Tk-02', user: { fullName: 'Chris Martin', email: 'user@gmail.com', avatarColor: 'bg-[#1FA75B]', avatarText: 'CM' }, status: 'Open', message: 'Driver was rude and unprofessional. The driver on my last ride BK-4506 was extremely rude. He was talking loudly on the phone the entire ride and refused to help with my luggage. This is unacceptable behavior.', timeAgo: '2 hours ago' },
    { id: '3', displayId: 'Tk-03', user: { fullName: 'Chris Martin', email: 'user@gmail.com', avatarColor: 'bg-[#1FA75B]', avatarText: 'CM' }, status: 'Open', message: 'Driver was rude and unprofessional. The driver on my last ride BK-4506 was extremely rude. He was talking loudly on the phone the entire ride and refused to help with my luggage. This is unacceptable behavior.', timeAgo: '2 hours ago' },
    { id: '4', displayId: 'Tk-04', user: { fullName: 'Chris Martin', email: 'user@gmail.com', avatarColor: 'bg-[#1FA75B]', avatarText: 'CM' }, status: 'In-Progress', message: 'Driver was rude and unprofessional. The driver on my last ride BK-4506 was extremely rude. He was talking loudly on the phone the entire ride and refused to help with my luggage. This is unacceptable behavior.', timeAgo: '2 hours ago' },
    { id: '5', displayId: 'Tk-05', user: { fullName: 'Chris Martin', email: 'user@gmail.com', avatarColor: 'bg-[#1FA75B]', avatarText: 'CM' }, status: 'Resolved', message: 'Driver was rude and unprofessional. The driver on my last ride BK-4506 was extremely rude. He was talking loudly on the phone the entire ride and refused to help with my luggage. This is unacceptable behavior.', timeAgo: '2 hours ago' },
    { id: '6', displayId: 'Tk-06', user: { fullName: 'Chris Martin', email: 'user@gmail.com', avatarColor: 'bg-[#1FA75B]', avatarText: 'CM' }, status: 'Resolved', message: 'Driver was rude and unprofessional. The driver on my last ride BK-4506 was extremely rude. He was talking loudly on the phone the entire ride and refused to help with my luggage. This is unacceptable behavior.', timeAgo: '2 hours ago' },
    { id: '7', displayId: 'Tk-07', user: { fullName: 'Chris Martin', email: 'user@gmail.com', avatarColor: 'bg-[#1FA75B]', avatarText: 'CM' }, status: 'Deleted', message: 'Driver was rude and unprofessional. The driver on my last ride BK-4506 was extremely rude. He was talking loudly on the phone the entire ride and refused to help with my luggage. This is unacceptable behavior.', timeAgo: '2 hours ago' },
];

const Support = () => {
    const [tickets, setTickets] = useState(initialTickets);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('All Status');
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Calculate Stats
    const stats = {
        open: tickets.filter(t => t.status === 'Open').length,
        inProgress: tickets.filter(t => t.status === 'In-Progress').length,
        resolved: tickets.filter(t => t.status === 'Resolved').length,
        deleted: tickets.filter(t => t.status === 'Deleted').length
    };

    const handleTicketClick = (ticket) => {
        setSelectedTicket(ticket);
        setIsModalOpen(true);
    };

    const handleAction = (id, newStatus) => {
        setTickets(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
        if (newStatus === 'Deleted') {
            toast.error(`Ticket ${id} marked as deleted`);
            setIsModalOpen(false);
        } else {
            toast.success(`Ticket ${id} marked as ${newStatus}`);
        }
        if (selectedTicket?.id === id) {
            setSelectedTicket(prev => ({ ...prev, status: newStatus }));
        }
    };

    const handleReply = () => {
        toast.success(`Reply sent to ${selectedTicket?.user.fullName}`);
        setIsModalOpen(false);
    };

    const filteredTickets = tickets.filter(t => {
        const matchesSearch = t.user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.message.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'All Status' || t.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="animate-in fade-in duration-700">
            <div className="space-y-10">
                {/* Page Title */}
                <div className="space-y-2">
                    <Header
                        title="Support & Complaints"
                        description="Manage user complaints and support tickets"
                    />
                </div>

                {/* Stats Summary */}
                <SupportStats stats={stats} />

                {/* Filters Section */}
                <div className="bg-[#1A1F2B]/30 border border-white/5 rounded-3xl p-6 backdrop-blur-sm relative z-[10]">
                    <SupportFilters
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        statusFilter={statusFilter}
                        setStatusFilter={setStatusFilter}
                    />
                </div>

                {/* Tickets Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                    {filteredTickets.map((ticket) => (
                        <TicketCard
                            key={ticket.id}
                            ticket={ticket}
                            onClick={handleTicketClick}
                        />
                    ))}
                </div>
            </div>

            {/* Ticket Detail Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Ticket Detail"
                maxWidth="max-w-4xl"
            >
                <TicketDetailModal
                    ticket={selectedTicket}
                    onAction={(newStatus) => handleAction(selectedTicket?.id, newStatus)}
                    onReply={handleReply}
                />
            </Modal>
        </div>
    );
};

export default Support;