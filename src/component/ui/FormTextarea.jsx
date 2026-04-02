import React from 'react';

const FormTextarea = React.forwardRef(({ label, error, rows = 4, ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-white/40 text-xs font-medium uppercase tracking-widest pl-1">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`w-full bg-fill_color border ${
          error ? 'border-red-500/50' : 'border-white/5'
        } rounded-2xl py-4 px-6 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all font-medium resize-none`}
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

FormTextarea.displayName = 'FormTextarea';

export default FormTextarea;
