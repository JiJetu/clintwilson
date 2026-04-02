import { useForm, Controller } from 'react-hook-form';
import Button from '../ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { scheduleSchema } from '../../lib/validation/schedule.schema';
import FormInput from '../ui/FormInput';
import FormSelect from '../ui/FormSelect';
import { MapPin } from 'lucide-react';

const ScheduleFormModal = ({ initialData, onSubmit, onCancel, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(scheduleSchema),
    defaultValues: initialData || {
      name: '',
      distance: '0.0 mi',
      duration: '0 min',
      status: 'Active',
      shuttlesAssigned: 0,
      pickup: '',
      dropoff: '',
    },
  });

  const statuses = ["Active", "Inactive"];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-6 md:px-8 py-6 space-y-8 inter text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        {/* Name */}
        <div className="md:col-span-2">
          <FormInput
            label="Route name"
            placeholder="Name your route"
            error={errors.name}
            {...register("name")}
          />
        </div>

        {/* Distance */}
        <FormInput
          label="Distance"
          placeholder="0.0 mi"
          error={errors.distance}
          {...register("distance")}
        />

        {/* Duration */}
        <FormInput
          label="Duration"
          placeholder="0 min"
          error={errors.duration}
          {...register("duration")}
        />

        {/* Status */}
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <FormSelect
              label="Status"
              options={statuses}
              error={errors.status}
              {...field}
            />
          )}
        />

        {/* Shuttles Assigned */}
        <FormInput
          label="Shuttles Assigned"
          type="number"
          placeholder="0"
          error={errors.shuttlesAssigned}
          {...register("shuttlesAssigned")}
        />

        {/* Pickup */}
        <FormInput
          label="Pickup"
          placeholder="Enter pickup point"
          error={errors.pickup}
          {...register("pickup")}
        />

        {/* Dropoff */}
        <FormInput
          label="Dropoff"
          placeholder="Enter dropoff point"
          error={errors.dropoff}
          {...register("dropoff")}
        />
      </div>

      {/* Route Map Placeholder */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h5 className="text-white/40 text-[10px] md:text-xs font-medium uppercase tracking-widest pl-1">Route Map — Drag pins to set pickup & dropoff</h5>
          <span className="text-white/20 text-[8px] md:text-[10px] font-bold tracking-widest uppercase">Drag pins to set locations</span>
        </div>

        {/* Themed Map Container */}
        <div className="relative w-full h-[180px] md:h-[220px] bg-[#111622] rounded-3xl overflow-hidden border border-white/5 shadow-inner">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} />

          {/* Static Landmarks Placeholder */}
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-white/10 rounded-full" />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/10 rounded-full" />
          <p className="absolute top-[20%] left-[15%] text-[8px] font-bold text-white/5 uppercase tracking-widest">Main Gate</p>
          <p className="absolute top-[70%] right-[10%] text-[8px] font-bold text-white/5 uppercase tracking-widest">Convention Center</p>

          {/* Pickup Pin */}
          <div className="absolute top-1/3 left-1/4 flex flex-col items-center">
            <div className="w-5 h-7 md:w-6 md:h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 animate-bounce">
              <MapPin size={12} className="text-[#101319]" />
            </div>
            <span className="bg-green-500/10 text-green-500 border border-green-500/20 px-2 py-0.5 rounded text-[8px] font-bold mt-1 uppercase">Pickup</span>
          </div>

          {/* Dropoff Pin */}
          <div className="absolute bottom-1/4 right-1/3 flex flex-col items-center">
            <div className="w-5 h-7 md:w-6 md:h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/20 animate-bounce">
              <MapPin size={12} className="text-[#101319]" />
            </div>
            <span className="bg-red-500/10 text-red-500 border border-red-500/20 px-2 py-0.5 rounded text-[8px] font-bold mt-1 uppercase">Dropoff</span>
          </div>

          {/* Path Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="25%" y1="33%" x2="66%" y2="75%" stroke="#1FA75B" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" className="animate-pulse" />
          </svg>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-end items-center gap-4 pt-4">
        <Button
          variant="ghost_danger"
          onClick={onCancel}
          className="w-full md:w-auto px-12"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          isLoading={isSubmitting}
          className="w-full md:w-auto px-12"
        >
          {initialData ? 'Update Route' : 'Add Route'}
        </Button>
      </div>
    </form>
  );
};

export default ScheduleFormModal;
