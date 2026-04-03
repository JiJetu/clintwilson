import React from 'react';
import SearchInput from '../ui/SearchInput';
import FormSelect from '../ui/FormSelect';

const SupportFilters = ({ searchQuery, setSearchQuery, statusFilter, setStatusFilter }) => {
  const statusOptions = [
    { label: 'All Status', value: 'All Status' },
    { label: 'Open', value: 'Open' },
    { label: 'In-Progress', value: 'In-Progress' },
    { label: 'Resolved', value: 'Resolved' },
    { label: 'Deleted', value: 'Deleted' }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <SearchInput
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClear={() => setSearchQuery('')}
        />
      </div>
      <div className="min-w-[180px]">
        <FormSelect
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          options={statusOptions}
        />
      </div>
    </div>
  );
};

export default SupportFilters;
