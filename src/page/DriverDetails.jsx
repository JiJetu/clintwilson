import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Download,
  Star,
  Bus,
  DollarSign,
  Phone,
  Clock,
} from 'lucide-react';
import Button from '../component/ui/Button';

// Mock data for the driver
const driversData = {
  '1': {
    id: '1',
    fullName: 'James Wilson',
    displayId: 'Driver-01',
    email: 'user@gmail.com',
    phone: '+1 (555) 0101',
    status: 'Online',
    shiftStarts: '6:00 AM',
    shiftEnds: '2:00 PM',
    assignedShuttle: 'Shuttle SH-001',
    rating: 4.7,
    rides: 1102,
    totalRides: 84,
    totalEarnings: 588,
    totalReviews: 22
  }
};

const rideHistory = [
  { id: 'BK-4501', date: '04-10', passenger: 'Emily Johnson', pickup: 'Main Gate', dropoff: 'Building C', fare: 5.00, ratings: 5, review: 'Smooth ride, very punctual!' },
  { id: 'BK-4502', date: '04-10', passenger: 'Emily Johnson', pickup: 'Main Gate', dropoff: 'Building C', fare: 5.00, ratings: 5, review: 'Smooth ride, very punctual!' },
  { id: 'BK-4503', date: '04-10', passenger: 'Emily Johnson', pickup: 'Main Gate', dropoff: 'Building C', fare: 5.00, ratings: 5, review: '--------' },
  { id: 'BK-4504', date: '04-10', passenger: 'Emily Johnson', pickup: 'Main Gate', dropoff: 'Building C', fare: 5.00, ratings: 5, review: 'Smooth ride, very punctual!' },
];

const DriverDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Daily');
  const driver = driversData[id] || driversData['1']; // Fallback to id 1 for demo

  const stats = [
    { label: 'Total Rides', value: driver.totalRides, },
    { label: 'Total Earnings', value: `$${driver.totalEarnings}`, },
    { label: 'Total Reviews', value: driver.totalReviews, },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <Link
          to="/dashboard/drivers"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
        >
          <div className="p-2 rounded-full group-hover:bg-white/5 transition-colors">
            <ArrowLeft size={20} />
          </div>
          <span className="text-lg font-medium">Back to Drivers</span>
        </Link>
        <Button variant="primary" className="px-6 py-3 rounded-xl">
          <Download size={18} className="mr-2" />
          Export
        </Button>
      </div>

      {/* Driver Overview Card */}
      <div className="border border-white/10 rounded-3xl p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center text-primary font-bold text-2xl shadow-lg">
              {driver.fullName.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-white tracking-tight">{driver.fullName}</h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/40 font-medium">
                <span className="flex items-center gap-2"><Phone size={14} /> {driver.phone}</span>
                <span className="flex items-center gap-2"><Clock size={14} /> {driver.shiftStarts} — {driver.shiftEnds}</span>
                <span className="flex items-center gap-2"><Bus size={14} /> {driver.assignedShuttle}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-amber-500">
            <Star size={24} fill="currentColor" />
            <span className="text-3xl font-bold">{driver.rating}</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="inline-flex p-1.5 rounded-2xl border border-white/5">
        {['Daily', 'Weekly', 'Monthly'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2
              ${activeTab === tab
                ? 'bg-[#252B37] text-white shadow-lg'
                : 'text-white/40 hover:text-white/60'
              }`}
          >
            <div className={`w-1.5 h-1.5 rounded-full ${activeTab === tab ? 'bg-primary' : 'bg-white/20'}`} />
            {tab}
          </button>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="border border-white/5 rounded-3xl p-6 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-white/40 text-sm font-medium">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.label === 'Total Rides' ? 'text-green-500' : stat.label === 'Total Earnings' ? 'text-blue-500' : 'text-amber-500'}`}>{stat.value}</p>
            </div>
            <div className={`p-4 rounded-2xl ${stat.label === 'Total Rides' ? 'text-green-500 bg-green-500/10' : stat.label === 'Total Earnings' ? 'text-blue-500 bg-blue-500/10' : 'text-amber-500 bg-amber-500/10'}`}>
              {
                stat.label === 'Total Rides' ? <Bus size={24} /> : stat.label === 'Total Earnings' ? <DollarSign size={24} /> : <Star size={24} />
              }
            </div>
          </div>
        ))}
      </div>

      {/* Ride History Table */}
      <div className="border border-white/5 rounded-[32px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 text-white/40 text-xs font-semibold uppercase tracking-wider">
                <th className="px-8 py-6">Ride ID</th>
                <th className="px-6 py-6">Date</th>
                <th className="px-6 py-6">Passenger</th>
                <th className="px-6 py-6">Pickup / Dropoff</th>
                <th className="px-6 py-6 text-center">Fare</th>
                <th className="px-6 py-6 text-center">Ratings</th>
                <th className="px-6 py-6">Review</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rideHistory.map((ride, idx) => (
                <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-8 py-6">
                    <span className="text-white/40 font-medium text-sm">{ride.id}</span>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-white font-semibold text-sm">{ride.date}</span>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-white font-semibold text-sm">{ride.passenger}</span>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-white/40 text-sm">
                      <span className="text-white font-medium">{ride.pickup}</span> / {ride.dropoff}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <span className="text-white font-bold text-sm">${ride.fare.toFixed(2)}</span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center justify-center gap-1 text-amber-500">
                      <Star size={12} fill="currentColor" />
                      <span className="text-xs font-bold">{ride.ratings}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-white/40 text-sm italic">{ride.review}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DriverDetails;
