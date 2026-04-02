import React from 'react';
import { Search, X } from 'lucide-react';

const SearchInput = React.forwardRef(({ value, onChange, placeholder = "Search...", className = "", onClear, ...props }, ref) => {
  return (
    <div className={`relative flex-1 group ${className}`}>
      <Search
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors"
        size={20}
      />
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-fill_color border border-white/5 rounded-2xl pl-16 pr-12 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all font-medium"
        {...props}
      />
      {value && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors p-1"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;
