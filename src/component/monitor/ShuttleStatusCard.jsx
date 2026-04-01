import { MapPin } from "lucide-react";


const ShuttleStatusCard = ({ shuttle }) => {
    const getStatusStyles = (status) => {
        switch (status) {
            case 'Active':
                return 'bg-green-500/10 text-green-500 border-green-500/20';
            case 'Idle':
                return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
            case 'Maintenance':
                return 'bg-red-500/10 text-red-500 border-red-500/20';
            default:
                return 'bg-white/10 text-white/50 border-white/10';
        }
    };

    const capacityPercentage = (shuttle.capacityCurrent / shuttle.capacityMax) * 100;

    return (
        <div className="bg-card_bg border border-white/5 rounded-3xl p-6 transition-all duration-300 hover:border-primary/20 group cursor-pointer shadow-xl">
            {/* Header Info */}
            <div className="flex justify-between items-start mb-6">
                <div className="space-y-1">
                    <h4 className="text-lg text-white tracking-tight leading-none">{shuttle.name}</h4>
                    <p className="text-description text-[10px] font-bold uppercase tracking-widest">{shuttle.model || 'ECO-1234'}</p>
                </div>
                <span className={`px-4 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-2 ${getStatusStyles(shuttle.status)}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${shuttle.status === 'Active' ? 'bg-green-500' :
                        shuttle.status === 'Idle' ? 'bg-amber-500' : 'bg-red-500'
                        }`} />
                    {shuttle.status}
                </span>
            </div>

            {/* Details List */}
            <div className="space-y-3 mb-6">
                <div className="flex items-center gap-1">
                    <MapPin size={18} className="text-white/40" />
                    <p className="text-white/40 text-sm font-medium">{shuttle.route}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-white/40 text-sm font-medium leading-none">Driver: <span className="text-white/80">{shuttle.driver}</span></p>
                    <span className="text-primary font-semibold text-sm uppercase tracking-tighter">ETA {shuttle.eta}</span>
                </div>
            </div>

            {/* Capacity Progress Bar */}
            <div className="space-y-2">
                <div className="flex justify-between items-end">
                    <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Capacity</p>
                    <p className="text-white/40 text-[10px] font-bold tracking-widest">{shuttle.capacityCurrent}/{shuttle.capacityMax}</p>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden shadow-inner">
                    <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 shadow-lg shadow-primary/20"
                        style={{ width: `${capacityPercentage}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ShuttleStatusCard;
