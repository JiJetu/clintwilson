import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children, maxWidth = "max-w-2xl" }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto inter">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className={`relative w-full ${maxWidth} bg-[#1A1F2B] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh] sm:max-h-[85vh]`}>
        {/* Header - Fixed at Top */}
        {(title || onClose) && (
          <div className="flex items-center justify-between p-6 border-b border-white/5 flex-shrink-0">
            {title && (
              <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
            )}
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            )}
          </div>
        )}

        {/* Scrollable Content Body */}
        <div className="relative flex-1 overflow-y-auto overflow-x-hidden no-scrollbar sm:custom-scrollbar">
          <style dangerouslySetInnerHTML={{ __html: `
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(255, 255, 255, 0.05);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(255, 255, 255, 0.1);
            }
          `}} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
