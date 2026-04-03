import React, { useState, useRef, useEffect } from 'react';
import { LuBell } from "react-icons/lu";
import { HiMenuAlt2 } from "react-icons/hi";
import NotificationDropdown from './NotificationDropdown';

const DashboardHeader = ({ onToggle, collapsed }) => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notificationRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 right-0 h-16 bg-[#111622] border-b border-white/10 z-30 px-4 flex items-center justify-between transition-all duration-300
      ${collapsed ? "lg:left-20" : "lg:left-64"} left-0`}>
      <div className="flex items-center gap-4">
        <button
          onClick={onToggle}
          className="p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
        >
          <HiMenuAlt2 size={24} />
        </button>
        <h1 className="text-lg font-semibold text-white">
          <span className="text-primary font-bold text-2xl">Welcome</span>, Admin
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative" ref={notificationRef}>
          <button 
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className={`text-white hover:text-primary transition-all duration-300 ${isNotificationsOpen ? 'text-primary scale-110' : ''}`}
          >
            <LuBell size={24} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#111622] shadow-[0_0_8px_rgba(239,68,68,0.5)]">
              3
            </span>
          </button>
          
          <NotificationDropdown isOpen={isNotificationsOpen} />
        </div>

        <div className="flex flex-col items-center gap-1 border-l border-white/10 pl-6 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-primary/20 border text-xs border-primary/50 flex items-center justify-center text-primary font-bold transition-all group-hover:scale-110 group-hover:border-primary">
            SA
          </div>
          <p className="text-xs font-medium text-white group-hover:text-primary transition-colors hidden sm:block">Admin User</p>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
