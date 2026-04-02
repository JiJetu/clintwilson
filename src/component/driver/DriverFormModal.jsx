import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { driverSchema } from '../../lib/validation/driver.schema.js';
import FormInput from '../ui/FormInput';
import FormSelect from '../ui/FormSelect';
import Button from '../ui/Button';

const DriverFormModal = ({ initialData, onSubmit, onCancel, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(driverSchema),
    defaultValues: initialData || {
      fullName: '',
      phone: '',
      email: '',
      password: '',
      status: 'Online',
      assignedShuttle: '',
      shiftStarts: '06:00 AM',
      shiftEnds: '04:00 PM',
    },
  });

  const statuses = ["Online", "Offline"];
  const shuttles = ["Alpha", "Beta", "Gamma", "Shuttle-01", "Shuttle-02"];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-4 md:px-8 py-4 space-y-6 animate-in slide-in-from-bottom-5 duration-500 inter text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        {/* Full Name */}
        <div className="md:col-span-2">
          <FormInput
            label="Full Name"
            placeholder="Enter driver's full name"
            error={errors.fullName}
            {...register("fullName")}
          />
        </div>

        {/* Phone Number */}
        <FormInput
          label="Phone Number"
          placeholder="+1 (555) 0000"
          error={errors.phone}
          {...register("phone")}
        />

        {/* Email */}
        <FormInput
          label="Email Address"
          placeholder="user@email.com"
          error={errors.email}
          {...register("email")}
        />

        {/* Set Password */}
        <div className="md:col-span-2">
          <FormInput
            label={initialData ? "Change Password (Optional)" : "Set Password"}
            type="password"
            placeholder="************"
            error={errors.password}
            {...register("password")}
          />
        </div>

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

        {/* Assigned Shuttle */}
        <Controller
          name="assignedShuttle"
          control={control}
          render={({ field }) => (
            <FormSelect
              label="Assigned Shuttle"
              placeholder="Choose shuttle"
              options={shuttles}
              error={errors.assignedShuttle}
              {...field}
            />
          )}
        />

        {/* Shift Starts */}
        <FormInput
          label="Shift Starts"
          placeholder="06:00 AM"
          error={errors.shiftStarts}
          {...register("shiftStarts")}
        />

        {/* Shift Ends */}
        <FormInput
          label="Shift Ends"
          placeholder="04:00 PM"
          error={errors.shiftEnds}
          {...register("shiftEnds")}
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
          {initialData ? 'Update Driver' : 'Add Driver'}
        </Button>
      </div>
    </form>
  );
};

export default DriverFormModal;
