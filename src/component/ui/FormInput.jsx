import React from 'react';

const FormInput = React.forwardRef(({ label, error, type = "text", icon: Icon, ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-white/40 text-xs font-medium uppercase tracking-widest pl-1">
          {label}
        </label>
      )}
      <div className="relative group">
        {Icon && (
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors pointer-events-none">
            <Icon size={18} />
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={`w-full bg-fill_color border ${
            error ? 'border-red-500/50' : 'border-white/5'
          } rounded-2xl py-3.5 ${Icon ? 'pl-12' : 'px-5'} pr-5 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all ${
            type === 'number' ? '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' : ''
          }`}
          {...props}
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

FormInput.displayName = 'FormInput';

export default FormInput;
