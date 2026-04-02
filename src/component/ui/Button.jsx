import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary", 
  disabled = false, 
  isLoading = false,
  className = "",
  icon: Icon,
  fullWidth = false
}) => {
  const baseStyles = "flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold tracking-tight transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary text-secondary hover:bg-primary/90 shadow-xl shadow-primary/10",
    danger: "bg-red-500/10 text-red-500 border-2 border-red-500/20 hover:bg-red-500/20 hover:border-red-500 shadow-xl shadow-red-500/5",
    warning: "bg-amber-500/10 text-amber-500 border-2 border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-500 shadow-xl shadow-amber-500/5",
    ghost_danger: "border-2 border-red-500/20 text-red-500 hover:bg-red-500/10 hover:border-red-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {isLoading ? (
        <Loader2 size={20} className="animate-spin" />
      ) : (
        <>
          {Icon && <Icon size={20} className="transition-transform group-hover:scale-110" />}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
