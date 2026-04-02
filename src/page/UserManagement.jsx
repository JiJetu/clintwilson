import { useState } from 'react';
import Header from '../component/shared/Header';
import UserFilters from '../component/user/UserFilters';
import UserTable from '../component/user/UserTable';
import Modal from '../component/ui/Modal';
import UserProfileModal from '../component/user/UserProfileModal';
import CommunicationModal from '../component/shared/CommunicationModal';
import { emailSchema } from '../lib/validation/email.schema.js';

const initialUsers = [
    { id: '1', fullName: 'Emily Johnson', displayId: 'User-01', email: 'emily.j@email.com', status: 'Active', joinedDate: 'Jan 15, 2026', ridesCount: 48, totalSpent: 325.00, avatarColor: 'bg-green-500 text-secondary' },
    { id: '2', fullName: 'Robert Smith', displayId: 'User-01', email: 'user@email.com', status: 'Active', joinedDate: 'Jan 15, 2026', ridesCount: 48, totalSpent: 325.00, avatarColor: 'bg-blue-500 text-white' },
    { id: '3', fullName: 'James Wilson', displayId: 'User-01', email: 'user@email.com', status: 'Inactive', joinedDate: 'Jan 15, 2026', ridesCount: 48, totalSpent: 325.00 },
    { id: '4', fullName: 'James Wilson', displayId: 'User-01', email: 'user@email.com', status: 'Active', joinedDate: 'Jan 15, 2026', ridesCount: 48, totalSpent: 325.00 },
    { id: '5', fullName: 'James Wilson', displayId: 'User-01', email: 'user@email.com', status: 'Active', joinedDate: 'Jan 15, 2026', ridesCount: 48, totalSpent: 325.00 },
    { id: '6', fullName: 'James Wilson', displayId: 'User-01', email: 'user@email.com', status: 'Inactive', joinedDate: 'Jan 15, 2026', ridesCount: 48, totalSpent: 325.00 },
    { id: '7', fullName: 'James Wilson', displayId: 'User-01', email: 'user@email.com', status: 'Banned', joinedDate: 'Jan 15, 2026', ridesCount: 48, totalSpent: 325.00, avatarColor: 'bg-red-500 text-white' },
];

const UserManagement = () => {
    const [users, setUsers] = useState(initialUsers);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('All Status');

    // Modal Configuration
    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        type: 'profile', // 'profile' or 'mail'
        data: null // This will hold the ID of the user
    });

    const handleViewProfile = (user) => {
        setModalConfig({ isOpen: true, type: 'profile', data: user });
    };

    const handleSendMail = (user) => {
        setModalConfig({ isOpen: true, type: 'mail', data: user });
    };

    const handleToggleStatus = (user) => {
        const newStatus = user.status === 'Active' ? 'Inactive' : 'Active';
        setUsers(prev => prev.map(u => u.id === user.id ? { ...u, status: newStatus } : u));
        toast.info(`${user.fullName} is now ${newStatus}`);
    };

    const handleToggleBan = (user) => {
        const newStatus = user.status === 'Banned' ? 'Active' : 'Banned';
        setUsers(prev => prev.map(u => u.id === user.id ? { ...u, status: newStatus } : u));
        toast[newStatus === 'Banned' ? 'error' : 'success'](`${user.fullName} has been ${newStatus === 'Banned' ? 'banned' : 'unbanned'}`);
    };

    const handleMailSubmit = (data) => {
        toast.success(`Mail sent to ${modalConfig.data?.fullName}: ${data.title}`);
        setModalConfig({ ...modalConfig, isOpen: false });
    };

    const filteredUsers = users.filter(u => {
        const matchesSearch = u.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'All Status' || u.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    // Reactive check to ensure the modal always has the latest user data
    const currentUser = modalConfig.data ? users.find(u => u.id === modalConfig.data.id) : null;

    return (
        <div className="animate-in fade-in duration-700">
            <div className="space-y-10">
                <Header
                    title="User Management"
                    description="Manage passenger accounts and profiles"
                />

                <UserFilters
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                />

                <UserTable
                    users={filteredUsers}
                    onViewProfile={handleViewProfile}
                    onToggleStatus={handleToggleStatus}
                    onToggleBan={handleToggleBan}
                />
            </div>

            {/* Modals */}
            <Modal
                isOpen={modalConfig.isOpen}
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
                title={modalConfig.type === 'mail' ? 'Send Mail' : `User Profile — ${currentUser?.fullName}`}
                maxWidth={modalConfig.type === 'mail' ? 'max-w-xl' : 'max-w-4xl'}
            >
                {modalConfig.type === 'mail' ? (
                    <CommunicationModal
                        type="email"
                        schema={emailSchema}
                        titleLabel="Subject"
                        titlePlaceholder="Regarding last ride you booked"
                        messageLabel="Message"
                        messagePlaceholder="Type your message....."
                        submitLabel="Send"
                        onSubmit={handleMailSubmit}
                        onCancel={() => setModalConfig({ ...modalConfig, isOpen: false })}
                    />
                ) : (
                    <UserProfileModal
                        user={currentUser}
                        onSendMail={handleSendMail}
                        onToggleStatus={handleToggleStatus}
                        onToggleBan={handleToggleBan}
                    />
                )}
            </Modal>
        </div>
    );
};

export default UserManagement;