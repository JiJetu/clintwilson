import React, { useState } from 'react';
import Header from '../component/shared/Header';
import BookingFilters from '../component/booking/BookingFilters';
import BookingTable from '../component/booking/BookingTable';
import Modal from '../component/ui/Modal';
import UserProfileModalContent from '../component/booking/UserProfileModalContent';

const Booking = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('All Status');
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRowClick = (booking) => {
        setSelectedBooking(booking);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Use timeout to clear data after modal closing animation
        setTimeout(() => setSelectedBooking(null), 300);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <Header
                title="Bookings"
                description="View ride requests and reservations"
            />

            <div className="space-y-6">
                {/* Search and Filters */}
                <BookingFilters
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                />

                {/* Bookings Table */}
                <BookingTable
                    onRowClick={handleRowClick}
                    searchQuery={searchQuery}
                    statusFilter={statusFilter}
                />
            </div>

            {/* User Profile Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title={`User Profile — ${selectedBooking?.passenger || ''}`}
                maxWidth="max-w-[640px]"
            >
                {selectedBooking && (
                    <UserProfileModalContent user={selectedBooking} />
                )}
            </Modal>
        </div>
    );
};

export default Booking;