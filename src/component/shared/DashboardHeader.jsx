import { LuBell } from "react-icons/lu";
import { HiMenuAlt2 } from "react-icons/hi";

const DashboardHeader = ({ onToggle, collapsed }) => {
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
        <div className="relative">
          <button className="text-white hover:text-primary transition-colors">
            <LuBell size={24} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#111622]">
              3
            </span>
          </button>
        </div>

        <div className="flex items-center gap-3 border-l border-white/10 pl-6 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">Admin User</p>
            <p className="text-xs text-white/50">Super Admin</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary font-bold">
            SA
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
