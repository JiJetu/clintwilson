import React from 'react';
import { ChevronDown } from 'lucide-react';

const FormSelect = React.forwardRef(({ label, error, options = [], placeholder, ...props }, ref) => {
  return (
    <div className="space-y-2 group relative">
      {label && (
        <label className="text-white/40 text-xs font-medium uppercase tracking-widest pl-1">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          className={`w-full bg-fill_color border ${
            error ? 'border-red-500/50' : 'border-white/5'
          } rounded-2xl py-3.5 px-5 text-white appearance-none focus:outline-none focus:border-primary/50 transition-all cursor-pointer`}
          {...props}
        >
          {placeholder && (
            <option value="" className="bg-card_bg">
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option 
              key={typeof option === 'string' ? option : option.value} 
              value={typeof option === 'string' ? option : option.value} 
              className="bg-card_bg"
            >
              {typeof option === 'string' ? option : option.label}
            </option>
          ))}
        </select>
        <ChevronDown 
          size={18} 
          className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none group-focus-within:text-primary transition-colors" 
        />
      </div>
      {error && (
        <p className="text-red-500 text-[10px] font-medium uppercase tracking-widest pl-1 animate-in fade-in slide-in-from-left-1">
          {error.message}
        </p>
      )}
    </div>
  );
});

FormSelect.displayName = 'FormSelect';

export default FormSelect;
