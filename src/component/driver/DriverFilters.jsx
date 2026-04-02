import React from 'react';
import SearchInput from '../ui/SearchInput';
import FormSelect from '../ui/FormSelect';

const DriverFilters = ({ searchQuery, setSearchQuery, statusFilter, setStatusFilter }) => {
  const statusOptions = [
    { label: 'All Status', value: 'All Status' },
    { label: 'Online', value: 'Online' },
    { label: 'Offline', value: 'Offline' }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <SearchInput 
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onClear={() => setSearchQuery('')}
      />
      <div className="min-w-[200px]">
        <FormSelect 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          options={statusOptions}
        />
      </div>
    </div>
  );
};

export default DriverFilters;
