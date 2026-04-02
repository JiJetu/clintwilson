import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { notificationSchema } from '../../lib/validation/notification.schema.js';
import FormInput from '../ui/FormInput';
import FormTextarea from '../ui/FormTextarea';
import Button from '../ui/Button';
import { Send } from 'lucide-react';

const NotificationModal = ({ driver, onSubmit, onCancel, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      title: '',
      message: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-4 md:px-8 py-4 space-y-6 animate-in slide-in-from-bottom-5 duration-500 inter text-left">
      <div className="space-y-4">
        {/* Title */}
        <FormInput 
          label="Tittle of notification"
          placeholder="Regarding last ride"
          error={errors.title}
          {...register("title")}
        />

        {/* Message */}
        <FormTextarea 
          label="Message Description"
          placeholder="Type your notify message....."
          rows={6}
          error={errors.message}
          {...register("message")}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end pt-2">
        <Button
          type="submit"
          isLoading={isSubmitting}
          icon={Send}
          className="px-8 py-3 rounded-xl"
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default NotificationModal;
