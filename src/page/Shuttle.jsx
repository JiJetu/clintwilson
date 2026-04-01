import { useState } from 'react';
import Header from '../component/shared/Header';
import ShuttleCard from '../component/shuttle/ShuttleCard';
import Modal from '../component/ui/Modal';
import ShuttleFormModal from '../component/shuttle/ShuttleFormModal';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

const initialShuttles = [
    { id: '1', name: 'Alpha', plate: 'ECO-1234', route: 'Campus Loop', driver: 'James Wilson', status: 'Active', capacityCurrent: 18, capacityMax: 24, displayId: '001' },
    { id: '2', name: 'Zeta', plate: 'ECO-4567', route: 'Main City', driver: 'Robert Fox', status: 'Idle', capacityCurrent: 12, capacityMax: 24, displayId: '002' },
    { id: '3', name: 'Delta', plate: 'ECO-8901', route: 'West Terminal', driver: 'Jenny Wilson', status: 'Maintenance', capacityCurrent: 0, capacityMax: 24, displayId: '003' },
    { id: '4', name: 'Alpha', plate: 'ECO-1234', route: 'Campus Loop', driver: 'James Wilson', status: 'Active', capacityCurrent: 18, capacityMax: 24, displayId: '004' },
    { id: '5', name: 'Delta', plate: 'ECO-8901', route: 'North Station', driver: 'Cameron Williamson', status: 'Maintenance', capacityCurrent: 0, capacityMax: 24, displayId: '005' },
    { id: '6', name: 'Zeta', plate: 'ECO-4567', route: 'Campus Loop', driver: 'Robert Fox', status: 'Idle', capacityCurrent: 12, capacityMax: 24, displayId: '006' },
];

const Shuttle = () => {
    const [shuttles, setShuttles] = useState(initialShuttles);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingShuttle, setEditingShuttle] = useState(null);

    const handleAddClick = () => {
        setEditingShuttle(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (shuttle) => {
        setEditingShuttle(shuttle);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (id) => {
        setShuttles(prev => prev.filter(s => s.id !== id));
        toast.error('Shuttle removed from fleet');
    };

    const handleFormSubmit = (data) => {
        if (editingShuttle) {
            setShuttles(prev => prev.map(s => s.id === editingShuttle.id ? { ...s, ...data } : s));
            toast.success('Shuttle updated successfully');
        } else {
            const newShuttle = {
                ...data,
                id: Math.random().toString(36).substr(2, 9),
                displayId: (shuttles.length + 1).toString().padStart(3, '0'),
                capacityCurrent: 0,
            };
            setShuttles(prev => [...prev, newShuttle]);
            toast.success('New shuttle added to fleet');
        }
        setIsModalOpen(false);
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <Header
                    title="Shuttle Management"
                    description="Manage your fleet vehicles"
                />
                <button
                    onClick={handleAddClick}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-[#101319] font-semibold rounded-2xl hover:bg-primary/90 transition-all active:scale-95 shadow-xl shadow-primary/20 group"
                >
                    <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                    Add Shuttle
                </button>
            </div>

            {/* Shuttle Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {shuttles.map((shuttle) => (
                    <ShuttleCard
                        key={shuttle.id}
                        shuttle={shuttle}
                        onEdit={handleEditClick}
                        onDelete={handleDeleteClick}
                    />
                ))}
            </div>

            {/* Add/Edit Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editingShuttle ? 'Edit Shuttle' : 'Add New Shuttle'}
                maxWidth="max-w-2xl"
            >
                <ShuttleFormModal
                    initialData={editingShuttle}
                    onSubmit={handleFormSubmit}
                    onCancel={() => setIsModalOpen(false)}
                />
            </Modal>
        </div>
    );
};

export default Shuttle;