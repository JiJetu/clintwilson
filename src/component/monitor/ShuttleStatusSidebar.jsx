import ShuttleStatusCard from './ShuttleStatusCard';

const ShuttleStatusSidebar = () => {
  const shuttles = [
    {
      name: 'Alpha',
      model: 'ECO-1234',
      route: 'Campus Loop',
      driver: 'James Wilson',
      status: 'Active',
      eta: '3 min',
      capacityCurrent: 4,
      capacityMax: 6,
    },
    {
      name: 'Zeta',
      model: 'ECO-1234',
      route: 'Campus Loop',
      driver: 'James Wilson',
      status: 'Idle',
      eta: '3 min',
      capacityCurrent: 18,
      capacityMax: 24,
    },
    {
      name: 'Delta',
      model: 'ECO-1234',
      route: 'Campus Loop',
      driver: 'James Wilson',
      status: 'Maintenance',
      eta: '3 min',
      capacityCurrent: 18,
      capacityMax: 24,
    },
  ];

  return (
    <div className="w-full lg:w-[450px] border border-white/5 rounded-3xl p-8 flex flex-col shadow-2xl h-[750px]">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-medium text-white tracking-tight">Shuttles status</h3>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
        {shuttles.map((shuttle) => (
          <ShuttleStatusCard key={shuttle.name} shuttle={shuttle} />
        ))}
      </div>
    </div>
  );
};

export default ShuttleStatusSidebar;
