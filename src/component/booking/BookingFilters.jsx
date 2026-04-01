import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const BookingFilters = ({ searchQuery, setSearchQuery, statusFilter, setStatusFilter }) => {
  const statuses = ["All Status", "Confirmed", "Pending", "Cancelled"];

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
      {/* Search Input */}
      <div className="relative w-full group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
          <Search size={18} className="text-white/50 group-focus-within:text-primary transition-colors" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name"
          className="w-full bg-fill_color border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 shadow-lg"
        />
      </div>

      {/* Status Filter */}
      <div className="relative w-full md:w-48 group">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full bg-fill_color border border-white/5 rounded-2xl py-3.5 px-5 text-white appearance-none focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 shadow-lg cursor-pointer font-medium text-sm"
        >
          {statuses.map((status) => (
            <option key={status} value={status} className="bg-fill_color py-2">
              {status}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
          <ChevronDown size={18} className="text-primary group-hover:text-primary/80 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default BookingFilters;
