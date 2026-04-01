import { useForm } from 'react-hook-form';
import FormInput from '../ui/FormInput';
import FormSelect from '../ui/FormSelect';
import { zodResolver } from '@hookform/resolvers/zod';
import { shuttleSchema } from '../../lib/validation/shuttle.schema.js';
import { Loader2 } from 'lucide-react';

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
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        {/* Name */}
        <FormInput
          label="Name"
          placeholder="Name your shuttle"
          error={errors.name}
          {...register("name")}
        />

        {/* Plate */}
        <FormInput
          label="Plate"
          placeholder="Plate Number"
          error={errors.plate}
          {...register("plate")}
        />

        {/* Status */}
        <FormSelect
          label="Status"
          options={statuses}
          error={errors.status}
          {...register("status")}
        />

        {/* Capacity */}
        <FormInput
          label="Capacity"
          type="number"
          placeholder="No of seats"
          error={errors.capacityMax}
          {...register("capacityMax")}
        />

        {/* Driver */}
        <FormSelect
          label="Drivers"
          placeholder="Add driver"
          options={drivers}
          error={errors.driver}
          {...register("driver")}
        />

        {/* Route */}
        <FormSelect
          label="Route"
          placeholder="Select route"
          options={routes}
          error={errors.route}
          {...register("route")}
        />
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
