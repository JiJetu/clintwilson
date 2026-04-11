import { useState } from 'react';
import Header from '../component/shared/Header';
import DriverCard from '../component/driver/DriverCard';
import Modal from '../component/ui/Modal';
import DriverFormModal from '../component/driver/DriverFormModal';
import NotificationModal from '../component/driver/NotificationModal';
import DriverFilters from '../component/driver/DriverFilters';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

const initialDrivers = [
    { id: '1', fullName: 'James Wilson', displayId: 'Driver-01', email: 'user@gmail.com', phone: '+1 (555) 0104', status: 'Online', shiftStarts: '2:00 PM', shiftEnds: '10:00 PM', assignedShuttle: 'Alpha' },
    { id: '2', fullName: 'James Wilson', displayId: 'Driver-01', email: 'user@gmail.com', phone: '+1 (555) 0104', status: 'Online', shiftStarts: '2:00 PM', shiftEnds: '10:00 PM', assignedShuttle: 'Alpha' },
    { id: '3', fullName: 'James Wilson', displayId: 'Driver-01', email: 'user@gmail.com', phone: '+1 (555) 0104', status: 'Online', shiftStarts: '2:00 PM', shiftEnds: '10:00 PM', assignedShuttle: 'Alpha' },
    { id: '4', fullName: 'James Wilson', displayId: 'Driver-01', email: 'user@gmail.com', phone: '+1 (555) 0104', status: 'Online', shiftStarts: '2:00 PM', shiftEnds: '10:00 PM', assignedShuttle: 'Alpha' },
    { id: '5', fullName: 'James Wilson', displayId: 'Driver-01', email: 'user@gmail.com', phone: '+1 (555) 0104', status: 'Online', shiftStarts: '2:00 PM', shiftEnds: '10:00 PM', assignedShuttle: 'Alpha' },
    { id: '6', fullName: 'James Wilson', displayId: 'Driver-01', email: 'user@gmail.com', phone: '+1 (555) 0104', status: 'Offline', shiftStarts: '2:00 PM', shiftEnds: '10:00 PM', assignedShuttle: 'Alpha' },
];

const Driver = () => {
    const [drivers, setDrivers] = useState(initialDrivers);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('All Status');

    // Modal States
    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        type: 'form', // 'form' or 'notification'
        data: null
    });

    const handleAddClick = () => {
        setModalConfig({ isOpen: true, type: 'form', data: null });
    };

    const handleEditClick = (driver) => {
        setModalConfig({ isOpen: true, type: 'form', data: driver });
    };

    const handleNotifyClick = (driver) => {
        setModalConfig({ isOpen: true, type: 'notification', data: driver });
    };

    const handleDeleteClick = (id) => {
        setDrivers(prev => prev.filter(d => d.id !== id));
        toast.error('Driver profile deleted successfully');
    };

    const handleFormSubmit = (data) => {
        if (modalConfig.data) {
            setDrivers(prev => prev.map(d => d.id === modalConfig.data.id ? { ...d, ...data } : d));
            toast.success('Driver profile updated successfully');
        } else {
            const newDriver = {
                ...data,
                id: Math.random().toString(36).substr(2, 9),
                displayId: `Driver-${(drivers.length + 1).toString().padStart(2, '0')}`,
            };
            setDrivers(prev => [...prev, newDriver]);
            toast.success('New driver added successfully');
        }
        setModalConfig({ ...modalConfig, isOpen: false });
    };

    const handleNotificationSubmit = (data) => {
        toast.success(`Notification sent to ${modalConfig.data?.fullName}: ${data.title}`);
        setModalConfig({ ...modalConfig, isOpen: false });
    };

    const filteredDrivers = drivers.filter(d => {
        const matchesSearch = d.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            d.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'All Status' || d.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="animate-in fade-in duration-700">
            <div className="space-y-10">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <Header
                        title="Driver Management"
                        description="Manage driver profiles and shifts"
                    />
                    <button
                        onClick={handleAddClick}
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-[#101319] font-semibold rounded-2xl hover:bg-primary/90 transition-all active:scale-95 shadow-xl shadow-primary/20 group"
                    >
                        <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                        Add Driver
                    </button>
                </div>

                {/* Search and Filters */}
                <DriverFilters
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                />

                {/* Drivers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredDrivers.map((driver) => (
                        <DriverCard
                            key={driver.id}
                            driver={driver}
                            onEdit={handleEditClick}
                            onDelete={handleDeleteClick}
                            onNotify={handleNotifyClick}
                        />
                    ))}
                </div>

            </div>

            {/* Dynamic Modal */}
            <Modal
                isOpen={modalConfig.isOpen}
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
                title={modalConfig.type === 'notification' ? 'Send Notification' : (modalConfig.data ? 'Edit Driver' : 'Add New Driver')}
                maxWidth={modalConfig.type === 'notification' ? 'max-w-xl' : 'max-w-2xl'}
            >
                {modalConfig.type === 'notification' ? (
                    <NotificationModal
                        driver={modalConfig.data}
                        onSubmit={handleNotificationSubmit}
                        onCancel={() => setModalConfig({ ...modalConfig, isOpen: false })}
                    />
                ) : (
                    <DriverFormModal
                        initialData={modalConfig.data}
                        onSubmit={handleFormSubmit}
                        onCancel={() => setModalConfig({ ...modalConfig, isOpen: false })}
                    />
                )}
            </Modal>
        </div>
    );
};

export default Driver;