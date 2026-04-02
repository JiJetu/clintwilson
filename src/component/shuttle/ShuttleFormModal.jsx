import { useForm, Controller } from 'react-hook-form';
import FormInput from '../ui/FormInput';
import FormSelect from '../ui/FormSelect';
import { zodResolver } from '@hookform/resolvers/zod';
import { shuttleSchema } from '../../lib/validation/shuttle.schema.js';
import Button from '../ui/Button';

const ShuttleFormModal = ({ initialData, onSubmit, onCancel, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    control,
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
    <form onSubmit={handleSubmit(onSubmit)} className="px-4 md:px-8 py-4 space-y-6 animate-in slide-in-from-bottom-5 duration-500 inter">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
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

        {/* Capacity */}
        <FormInput
          label="Capacity"
          type="number"
          placeholder="No of seats"
          error={errors.capacityMax}
          {...register("capacityMax")}
        />

        {/* Driver */}
        <Controller
          name="driver"
          control={control}
          render={({ field }) => (
            <FormSelect
              label="Drivers"
              placeholder="Add driver"
              options={drivers}
              error={errors.driver}
              {...field}
            />
          )}
        />

        {/* Route */}
        <Controller
          name="route"
          control={control}
          render={({ field }) => (
            <FormSelect
              label="Route"
              placeholder="Select route"
              options={routes}
              error={errors.route}
              {...field}
            />
          )}
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-end items-center gap-4 pt-6">
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
          {initialData ? 'Update Shuttle' : 'Add Shuttle'}
        </Button>
      </div>
    </form>
  );
};

export default ShuttleFormModal;
