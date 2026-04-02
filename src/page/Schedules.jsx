import React, { useState } from 'react';
import Header from '../component/shared/Header';
import ScheduleCard from '../component/schedule/ScheduleCard';
import Modal from '../component/ui/Modal';
import ScheduleFormModal from '../component/schedule/ScheduleFormModal';
import ScheduleFilters from '../component/schedule/ScheduleFilters';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

const initialRoutes = [
    { id: '1', name: 'Campus Loop A', displayId: 'RT-01', status: 'Active', distance: '1.2 mi', duration: '25 min', shuttlesAssigned: 2, pickup: 'Main Gate', dropoff: 'Convention Center' },
    { id: '2', name: 'Campus Loop A', displayId: 'RT-01', status: 'Active', distance: '1.2 mi', duration: '25 min', shuttlesAssigned: 2, pickup: 'Main Gate', dropoff: 'Convention Center' },
    { id: '3', name: 'Campus Loop A', displayId: 'RT-01', status: 'Active', distance: '1.2 mi', duration: '25 min', shuttlesAssigned: 2, pickup: 'Main Gate', dropoff: 'Convention Center' },
    { id: '4', name: 'Campus Loop A', displayId: 'RT-01', status: 'Active', distance: '1.2 mi', duration: '25 min', shuttlesAssigned: 2, pickup: 'Main Gate', dropoff: 'Convention Center' },
    { id: '5', name: 'Campus Loop A', displayId: 'RT-01', status: 'Inactive', distance: '1.2 mi', duration: '25 min', shuttlesAssigned: 2, pickup: 'Main Gate', dropoff: 'Convention Center' },
    { id: '6', name: 'Campus Loop A', displayId: 'RT-01', status: 'Active', distance: '1.2 mi', duration: '25 min', shuttlesAssigned: 2, pickup: 'Main Gate', dropoff: 'Convention Center' },
];

const Schedules = () => {
    const [routes, setRoutes] = useState(initialRoutes);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('All Status');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingRoute, setEditingRoute] = useState(null);

    const handleAddClick = () => {
        setEditingRoute(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (route) => {
        setEditingRoute(route);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (id) => {
        setRoutes(prev => prev.filter(r => r.id !== id));
        toast.error('Route deleted successfully');
    };

    const handleFormSubmit = (data) => {
        if (editingRoute) {
            setRoutes(prev => prev.map(r => r.id === editingRoute.id ? { ...r, ...data } : r));
            toast.success('Route updated successfully');
        } else {
            const newRoute = {
                ...data,
                id: Math.random().toString(36).substr(2, 9),
                displayId: `RT-${(routes.length + 1).toString().padStart(2, '0')}`,
            };
            setRoutes(prev => [...prev, newRoute]);
            toast.success('New route added successfully');
        }
        setIsModalOpen(false);
    };

    const filteredRoutes = routes.filter(r => {
        const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'All Status' || r.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="animate-in fade-in duration-700">
            <div className="space-y-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <Header
                        title="Routes & Schedules"
                        description="Manage shuttle routes and timetables"
                    />
                    <button
                        onClick={handleAddClick}
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-[#101319] font-semibold rounded-2xl hover:bg-primary/90 transition-all active:scale-95 shadow-xl shadow-primary/20 group"
                    >
                        <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                        Add Route
                    </button>
                </div>

                {/* Filters */}
                <ScheduleFilters 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                />

                {/* Routes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredRoutes.map((route) => (
                        <ScheduleCard
                            key={route.id}
                            route={route}
                            onEdit={handleEditClick}
                            onDelete={handleDeleteClick}
                        />
                    ))}
                </div>
            </div>
            {/* Page Header */}


            {/* Add/Edit Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editingRoute ? 'Edit Route' : 'Add New Route'}
                maxWidth="max-w-2xl"
            >
                <ScheduleFormModal
                    initialData={editingRoute}
                    onSubmit={handleFormSubmit}
                    onCancel={() => setIsModalOpen(false)}
                />
            </Modal>
        </div>
    );
};

export default Schedules;