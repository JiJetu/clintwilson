

const bookingsData = [
  { id: 'BK-4501', passenger: 'Emily Johnson', pickup: 'Main Gate', dropoff: 'Building C', time: '10:30 AM', payment: 'Visa Card', status: 'Confirmed', fare: '$5.00' },
  { id: 'BK-4501', passenger: 'Emily Johnson', pickup: 'Main Gate', dropoff: 'Building C', time: '10:30 AM', payment: 'American Express', status: 'Confirmed', fare: '$5.00' },
  { id: 'BK-4501', passenger: 'Emily Johnson', pickup: 'Main Gate', dropoff: 'Building C', time: '10:30 AM', payment: 'Visa Card', status: 'Pending', fare: '$5.00' },
  { id: 'BK-4501', passenger: 'Emily Johnson', pickup: 'Main Gate', dropoff: 'Building C', time: '10:30 AM', payment: 'Visa Card', status: 'Confirmed', fare: '$5.00' },
  { id: 'BK-4501', passenger: 'Emily Johnson', pickup: 'Main Gate', dropoff: 'Building C', time: '10:30 AM', payment: 'Visa Card', status: 'Confirmed', fare: '$5.00' },
  { id: 'BK-4501', passenger: 'Emily Johnson', pickup: 'Main Gate', dropoff: 'Building C', time: '10:30 AM', payment: 'Visa Card', status: 'Pending', fare: '$5.00' },
  { id: 'BK-4501', passenger: 'Emily Johnson', pickup: 'Main Gate', dropoff: 'Building C', time: '10:30 AM', payment: 'Visa Card', status: 'Cancelled', fare: '$5.00' },
];

const BookingTable = ({ onRowClick, searchQuery, statusFilter }) => {
  const filteredBookings = bookingsData.filter(booking => {
    const matchesSearch = booking.passenger.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = statusFilter === 'All Status' || booking.status === statusFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Pending':
        return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Cancelled':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-white/10 text-white/50 border-white/10';
    }
  };

  return (
    <div className="bg-[#1A1F2B] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-fill_color">
              <th className="px-6 py-4 text-white/40 font-semibold text-sm uppercase tracking-wider">Booking ID</th>
              <th className="px-6 py-4 text-white/40 font-semibold text-sm uppercase tracking-wider">Passenger</th>
              <th className="px-6 py-4 text-white/40 font-semibold text-sm uppercase tracking-wider">Pickup / Dropoff</th>
              <th className="px-6 py-4 text-white/40 font-semibold text-sm uppercase tracking-wider">Time</th>
              <th className="px-6 py-4 text-white/40 font-semibold text-sm uppercase tracking-wider">Payment method</th>
              <th className="px-6 py-4 text-white/40 font-semibold text-sm uppercase tracking-wider text-center">Status</th>
              <th className="px-6 py-4 text-white/40 font-semibold text-sm uppercase tracking-wider text-right">Fare</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking, index) => (
                <tr
                  key={index}
                  onClick={() => onRowClick(booking)}
                  className="hover:bg-white/5 cursor-pointer transition-colors group"
                >
                  <td className="px-6 py-4 text-white/40 text-sm font-medium">{booking.id}</td>
                  <td className="px-6 py-4">
                    <span className="text-white font-medium text-base transition-colors group-hover:text-primary">{booking.passenger}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-white/60 text-sm font-medium">
                      <span>{booking.pickup}</span>
                      <span className="text-white/20">/</span>
                      <span>{booking.dropoff}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white/60 text-sm">{booking.time}</td>
                  <td className="px-6 py-4 text-white/60 text-sm">{booking.payment}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold border flex items-center gap-2 ${getStatusStyles(booking.status)}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${booking.status === 'Confirmed' ? 'bg-primary' :
                          booking.status === 'Pending' ? 'bg-amber-500' : 'bg-red-500'
                          }`} />
                        {booking.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white font-semibold text-right text-base">{booking.fare}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-20 text-center text-white/20 font-medium">
                  No bookings found matching your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;
