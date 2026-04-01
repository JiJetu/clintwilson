import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { shuttleSchema } from '../../lib/validation/shuttle.schema.js';
import { ChevronDown, Loader2 } from 'lucide-react';

const ShuttleFormModal = ({ initialData, onSubmit, onCancel, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(shuttleSchema),
    defaultValues: initialData || {
      name: '',
      plate: '',
      status: 'Active',
      capacityMax: 24,
      driver: '',
      route: '',
    },
  });

  const statuses = ["Active", "Idle", "Maintenance"];
  const drivers = ["James Wilson", "Robert Fox", "Jenny Wilson", "Cameron Williamson"];
  const routes = ["Campus Loop", "Main City", "West Terminal", "North Station"];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-4 space-y-6 animate-in slide-in-from-bottom-5 duration-500 inter">
      <div className="grid grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-white/40 text-xs font-medium uppercase tracking-widest pl-1">Name</label>
          <input
            {...register("name")}
            type="text"
            placeholder="Name your shuttle"
            className={`w-full bg-fill_color border ${errors.name ? 'border-red-500/50' : 'border-white/5'} rounded-2xl py-3.5 px-5 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all`}
          />
          {errors.name && <p className="text-red-500 text-[10px] font-medium uppercase tracking-widest pl-1 animate-in fade-in slide-in-from-left-1">{errors.name.message}</p>}
        </div>

        {/* Plate */}
        <div className="space-y-2">
          <label className="text-white/40 text-xs font-medium uppercase tracking-widest pl-1">Plate</label>
          <input
            {...register("plate")}
            type="text"
            placeholder="Plate Number"
            className={`w-full bg-fill_color border ${errors.plate ? 'border-red-500/50' : 'border-white/5'} rounded-2xl py-3.5 px-5 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all`}
          />
          {errors.plate && <p className="text-red-500 text-[10px] font-medium uppercase tracking-widest pl-1 animate-in fade-in slide-in-from-left-1">{errors.plate.message}</p>}
        </div>

        {/* Status */}
        <div className="space-y-2 group relative">
          <label className="text-white/40 text-xs font-medium uppercase tracking-widest pl-1">Status</label>
          <div className="relative">
            <select
              {...register("status")}
              className={`w-full bg-fill_color border ${errors.status ? 'border-red-500/50' : 'border-white/5'} rounded-2xl py-3.5 px-5 text-white appearance-none focus:outline-none focus:border-primary/50 transition-all cursor-pointer`}
            >
              {statuses.map(s => <option key={s} value={s} className="bg-[#1A1F2B]">{s}</option>)}
            </select>
            <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none group-focus-within:text-primary transition-colors" />
          </div>
          {errors.status && <p className="text-red-500 text-[10px] font-medium uppercase tracking-widest pl-1 animate-in fade-in slide-in-from-left-1">{errors.status.message}</p>}
        </div>

        {/* Capacity */}
        <div className="space-y-2">
          <label className="text-white/40 text-xs font-medium uppercase tracking-widest pl-1">Capacity</label>
          <input
            {...register("capacityMax")}
            type="number"
            placeholder="No of seats"
            className={`w-full bg-fill_color border ${errors.capacityMax ? 'border-red-500/50' : 'border-white/5'} rounded-2xl py-3.5 px-5 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all`}
          />
          {errors.capacityMax && <p className="text-red-500 text-[10px] font-medium uppercase tracking-widest pl-1 animate-in fade-in slide-in-from-left-1">{errors.capacityMax.message}</p>}
        </div>

        {/* Driver */}
        <div className="space-y-2 group relative">
          <label className="text-white/40 text-xs font-medium uppercase tracking-widest pl-1">Drivers</label>
          <div className="relative">
            <select
              {...register("driver")}
              className={`w-full bg-fill_color border ${errors.driver ? 'border-red-500/50' : 'border-white/5'} rounded-2xl py-3.5 px-5 text-white appearance-none focus:outline-none focus:border-primary/50 transition-all cursor-pointer`}
            >
              <option value="" className="bg-[#1A1F2B]">Add driver</option>
              {drivers.map(d => <option key={d} value={d} className="bg-[#1A1F2B]">{d}</option>)}
            </select>
            <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none group-focus-within:text-primary transition-colors" />
          </div>
          {errors.driver && <p className="text-red-500 text-[10px] font-medium uppercase tracking-widest pl-1 animate-in fade-in slide-in-from-left-1">{errors.driver.message}</p>}
        </div>

        {/* Route */}
        <div className="space-y-2 group relative">
          <label className="text-white/40 text-xs font-medium uppercase tracking-widest pl-1">Route</label>
          <div className="relative">
            <select
              {...register("route")}
              className={`w-full bg-fill_color border ${errors.route ? 'border-red-500/50' : 'border-white/5'} rounded-2xl py-3.5 px-5 text-white appearance-none focus:outline-none focus:border-primary/50 transition-all cursor-pointer`}
            >
              <option value="" className="bg-[#1A1F2B]">Select route</option>
              {routes.map(r => <option key={r} value={r} className="bg-[#1A1F2B]">{r}</option>)}
            </select>
            <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none group-focus-within:text-primary transition-colors" />
          </div>
          {errors.route && <p className="text-red-500 text-[10px] font-medium uppercase tracking-widest pl-1 animate-in fade-in slide-in-from-left-1">{errors.route.message}</p>}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end items-center gap-4 pt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-12 py-4 rounded-2xl border-2 border-red-500/20 text-red-500 font-medium tracking-tight hover:bg-red-500/10 hover:border-red-500 transition-all active:scale-95"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-12 py-4 rounded-2xl bg-primary text-white font-medium tracking-tight hover:bg-primary/90 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          {isSubmitting ? <Loader2 size={20} className="animate-spin" /> : (initialData ? 'Update Shuttle' : 'Add Shuttle')}
        </button>
      </div>
    </form>
  );
};

export default ShuttleFormModal;
