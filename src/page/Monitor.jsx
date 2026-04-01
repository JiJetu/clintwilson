import Header from "../component/shared/Header";
import MonitorMap from "../component/monitor/MonitorMap";
import ShuttleStatusSidebar from "../component/monitor/ShuttleStatusSidebar";

const Monitor = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Page Header */}
      <Header
        title="Fleet Monitor"
        description="Real-time shuttle tracking"
      />

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Interactive Map View */}
        <div className="flex-1">
          <MonitorMap />
        </div>

        {/* Shuttles Status Sidebar */}
        <div className="flex-shrink-0">
          <ShuttleStatusSidebar />
        </div>
      </div>
    </div>
  );
};

export default Monitor;