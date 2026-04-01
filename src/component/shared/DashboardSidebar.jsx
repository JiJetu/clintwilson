import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    CalendarCheck,
    Map as MapIcon,
    Bus,
    Route as RouteIcon,
    UserRound,
    Users,
    Headphones,
    MessageSquare,
    LogOut
} from "lucide-react";
import { IMAGES } from "../../assets";

const DashboardSidebar = ({
    collapsed = false,
    mobileOpen = false,
    onClose,
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
        { label: "Bookings", to: "/dashboard/bookings", icon: CalendarCheck },
        { label: "Fleet Monitor", to: "/dashboard/fleet", icon: MapIcon },
        { label: "Shuttles", to: "/dashboard/shuttles", icon: Bus },
        { label: "Routes", to: "/dashboard/routes", icon: RouteIcon },
        { label: "Drivers", to: "/dashboard/drivers", icon: UserRound },
        { label: "Users", to: "/dashboard/users", icon: Users },
        { label: "Support & Help Desk", to: "/dashboard/support", icon: Headphones },
        { label: "Feedback & Ratings", to: "/dashboard/feedback", icon: MessageSquare },
    ];

    const isActive = (path) => {
        const current = location.pathname.replace(/\/+$/, "");
        const base = path.replace(/\/+$/, "");
        if (base === "/dashboard") {
            return current === base;
        }
        return current === base || current.startsWith(base + "/");
    };

    const handleLogout = () => {
        navigate("/login", { replace: true });
    };

    return (
        <aside
            className={`${collapsed ? "w-20" : "w-64"} bg-[#111622] border-r border-white/10 text-white flex flex-col
      fixed top-0 left-0 h-screen z-40 transform transition-all duration-300 ease-in-out
      ${mobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        >
            {/* Logo Area */}
            <div className={`h-16 flex items-center justify-center border-b border-white/10 ${collapsed ? "justify-center" : "px-6"}`}>
                <div className="flex items-center justify-center">
                    <img src={IMAGES.logo} alt="EcoRide" className="p-12 object-contain" />
                </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-6 px-3 custom-scrollbar">
                <nav className="space-y-1">
                    {menuItems.map((item) => {
                        const active = isActive(item.to);
                        return (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className="block w-full"
                                onClick={() => {
                                    if (mobileOpen && onClose) onClose();
                                }}
                            >
                                <div
                                    className={`flex items-center rounded-xl transition-all duration-200 group
                                        ${collapsed ? "justify-center p-3" : "gap-3 px-4 py-3"}
                                        ${active
                                            ? "bg-fourth text-primary shadow-active-nav"
                                            : "text-white/60 hover:bg-white/5 hover:text-white"
                                        }
                                    `}
                                    title={collapsed ? item.label : undefined}
                                >
                                    <item.icon size={22} className={`${active ? "text-primary" : "group-hover:text-white transition-colors"}`} />
                                    {!collapsed && (
                                        <span className="text-[15px] font-medium satoshi">{item.label}</span>
                                    )}
                                </div>
                            </NavLink>
                        );
                    })}
                </nav>
            </div>

            {/* Logout Button */}
            <div className="p-4 border-t border-white/10 mb-2">
                <button
                    onClick={handleLogout}
                    className={`w-full flex items-center rounded-xl transition-all duration-200 group
                        ${collapsed ? "justify-center p-3" : "gap-3 px-4 py-3"}
                        text-red-500/80 hover:bg-red-500/10 hover:text-red-500
                    `}
                    style={{ border: "1px solid rgba(239, 68, 68, 0.2)" }}
                >
                    <LogOut size={22} />
                    {!collapsed && (
                        <span className="text-[15px] font-medium">Logout</span>
                    )}
                </button>
            </div>
        </aside>
    );
};

export default DashboardSidebar;

