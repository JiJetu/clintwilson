import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const FormSelect = React.forwardRef(({ label, error, options = [], placeholder, value, onChange, name, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle option selection
  const handleSelect = (optionValue) => {
    if (onChange) {
      onChange({ target: { name, value: optionValue } });
    }
    setIsOpen(false);
  };

  // Get current label based on value
  const getCurrentLabel = () => {
    const selected = options.find(opt =>
      (typeof opt === 'string' ? opt : opt.value) === value
    );
    if (!selected) return placeholder || "Select option";
    return typeof selected === 'string' ? selected : selected.label;
  };

  return (
    <div className="space-y-2 group relative text-left" ref={containerRef}>
      {label && (
        <label className="text-white/40 text-xs font-medium uppercase tracking-widest pl-1">
          {label}
        </label>
      )}
      <div className="relative">
        {/* Trigger Box */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-fill_color border ${error ? 'border-red-500/50' : (isOpen ? 'border-primary/50' : 'border-white/5')
            } rounded-2xl py-4 px-6 text-white transition-all cursor-pointer font-medium flex items-center justify-between group/trigger hover:border-white/10`}
        >
          <span className={!value ? "text-white/20" : "text-white"}>
            {getCurrentLabel()}
          </span>
          <ChevronDown
            size={18}
            className={`text-white/20 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'rotate-0'}`}
          />
        </div>

        {/* Custom Options List Drawer */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full mt-2 z-[999] animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200">
            <ul className="bg-[#1A1F2B] border border-white/10 rounded-2xl p-1.5 shadow-2xl shadow-black/80 max-h-[240px] overflow-y-auto no-scrollbar backdrop-blur-xl">
              {options.length > 0 ? (
                options.map((option, idx) => {
                  const val = typeof option === 'string' ? option : option.value;
                  const lab = typeof option === 'string' ? option : option.label;
                  const isSelected = value === val;

                  return (
                    <li
                      key={val || idx}
                      onClick={() => handleSelect(val)}
                      className={`px-5 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer flex items-center justify-between ${isSelected
                          ? 'bg-primary text-[#101319]'
                          : 'text-white/60 hover:bg-white/5 hover:text-white'
                        }`}
                    >
                      {lab}
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#101319]" />}
                    </li>
                  );
                })
              ) : (
                <li className="px-5 py-3 text-sm text-white/20 text-center italic">No options available</li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Hidden native input for form compatibility if needed, 
          but react-hook-form usually handles this via the trigger's ref or Controller */}
      <input
        type="hidden"
        name={name}
        value={value || ''}
        ref={ref}
        {...props}
      />

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
