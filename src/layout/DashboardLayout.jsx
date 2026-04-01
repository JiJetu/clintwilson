import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../component/shared/DashboardHeader";
import DashboardSidebar from "../component/shared/DashboardSidebar";


const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setCollapsed(false);
  }, []);

  const handleHeaderToggle = () => {
    const isDesktop =
      typeof window !== "undefined" ? window.innerWidth >= 1024 : false;
    if (isDesktop) {
      setCollapsed((c) => !c);
    } else {
      setSidebarOpen((o) => !o);
    }
  };

  const effectiveCollapsed = (
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  )
    ? collapsed
    : false;

  return (
    <div className="bg-[#101319] min-h-screen inter overflow-x-hidden transition-all duration-300">
      <DashboardSidebar
        collapsed={effectiveCollapsed}
        mobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className={`transition-all duration-300 ${effectiveCollapsed ? "lg:ml-20" : "lg:ml-64"} ml-0`}>
        <DashboardHeader
          onToggle={handleHeaderToggle}
          collapsed={effectiveCollapsed}
        />

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="p-4 sm:p-6 lg:p-8 min-h-[calc(100vh)] overflow-x-hidden bg inter">
          <div className="mt-16">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
