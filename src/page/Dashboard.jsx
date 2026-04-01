import {
    ArrowUpRight,
    Bus,
    Calendar,
    DollarSign,
    Star,
} from 'lucide-react';

import StatCard from '../component/dashboard/StatCard';
import ChartCard from '../component/dashboard/ChartCard';
import RevenueTrendChart from '../component/dashboard/RevenueTrendChart';
import RidesAnalyticsChart from '../component/dashboard/RidesAnalyticsChart';
import UserGrowthChart from '../component/dashboard/UserGrowthChart';
import ShuttleStatusChart from '../component/dashboard/ShuttleStatusChart';
import Header from '../component/shared/Header';

const Dashboard = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header Section */}
            <Header
                title="Operations Dashboard"
                description="Real-time overview of shuttle services"
            />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
                <StatCard
                    title="Total Rides"
                    value="2,847"
                    trend="+12.5% this month"
                    icon={ArrowUpRight}
                />
                <StatCard
                    title="Active Shuttles"
                    value="18"
                    subValue="Of 20"
                    icon={Bus}
                />
                <StatCard
                    title="Rides Today"
                    value="156"
                    trend="+23 vs yesterday"
                    icon={Calendar}
                />
                <StatCard
                    title="Revenue"
                    value="$4.4K"
                    trend="+12.5% vs last month"
                    icon={DollarSign}
                />
                <StatCard
                    title="Avg Rating"
                    value="4.7"
                    subValue="From 2,847 reviews"
                    icon={Star}
                />
            </div>

            {/* Main Charts Section */}
            <div className="space-y-6">
                <ChartCard title="Revenue Trend">
                    <RevenueTrendChart />
                </ChartCard>

                <ChartCard title="Rides Analytics">
                    <RidesAnalyticsChart />
                </ChartCard>
            </div>

            {/* Secondary Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <UserGrowthChart />
                </div>
                <div className="lg:col-span-1">
                    <ShuttleStatusChart />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;