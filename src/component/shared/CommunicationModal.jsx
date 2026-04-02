import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '../ui/FormInput';
import FormTextarea from '../ui/FormTextarea';
import Button from '../ui/Button';
import { Send, Mail } from 'lucide-react';

const CommunicationModal = ({ 
  onSubmit, 
  onCancel, 
  isSubmitting,
  schema, // Dynamic schema
  type = 'notification', // 'notification' or 'email'
  titleLabel = 'Title',
  titlePlaceholder = 'Enter title...',
  messageLabel = 'Message',
  messagePlaceholder = 'Enter message...',
  submitLabel = 'Send'
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      message: '',
    },
  });

  const Icon = type === 'email' ? Mail : Send;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-4 md:px-8 py-4 space-y-6 animate-in slide-in-from-bottom-5 duration-500 inter text-left">
      <div className="space-y-4">
        {/* Title/Subject */}
        <FormInput
          label={titleLabel}
          placeholder={titlePlaceholder}
          error={errors.title}
          {...register("title")}
        />

        {/* Message */}
        <FormTextarea
          label={messageLabel}
          placeholder={messagePlaceholder}
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
          icon={Icon}
          className="px-8 py-3 rounded-xl"
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
};

export default CommunicationModal;
