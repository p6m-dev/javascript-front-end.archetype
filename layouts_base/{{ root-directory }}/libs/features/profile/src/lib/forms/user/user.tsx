import { FC, useState } from 'react';
import { Input, Button, DefaultProps } from '@nax-tech/components-web';
import { useForm, Controller } from '@nax-tech/hooks';

interface Props extends DefaultProps {
  title: string;
  object: unknown;
  labels: { [key: string]: string };
  placeholders: { [key: string]: string };
  errorMessages: { [key: string]: string };
  successMessage: string;
  errorMessage: string;
  onUpdate: unknown;
}

export const UserForm: FC<Props> = ({
  title,
  object: inputObject,
  labels,
  placeholders,
  errorMessages,
  successMessage,
  errorMessage,
  onUpdate: onUpdateObject,
  testId,
}) => {
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>();
  const [error, setError] = useState<boolean>();

  const object = inputObject as { [key: string]: unknown };
  const onUpdate = onUpdateObject as (
    mutationFn: (draft: { [key: string]: unknown }) => void
  ) => Promise<void>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data: typeof object) => {
    setLoading(true);
    setSuccess(undefined);
    setError(undefined);
    try {
      await onUpdate((draft: { [key: string]: unknown }) => {
        if (data) {
          draft['firstName'] = data['firstName'];
        }
      });
      setSuccess(true);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  });

  return (
    <form onSubmit={onSubmit} className="max-w-lg" data-testid={testId}>
      <h2 className="typo-head-3 mb-mega">{title}</h2>
      <div className="mb-lg">
        <label htmlFor="firstName">{labels['firstName']}</label>
        <div className="py-sm">
          <Controller
            name="firstName"
            control={control}
            defaultValue={object['firstName'] || ''}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                id="firstName"
                placeholder={placeholders['firstName']}
                disabled={isLoading}
                defaultValue={(object['firstName'] as string) || ''}
              />
            )}
          />
          {errors.firstName && <p>{errorMessages['firstName']}</p>}
        </div>
      </div>

      {success && <p className="text-success-700 mb-lg">{successMessage}</p>}

      {error && <p className="text-danger-700 mb-lg">{errorMessage}</p>}

      <div>
        <Button
          disabled={isLoading}
          loading={isLoading}
          type="primary"
          htmlType="submit"
          testId="submit"
        >
          {labels['submit']}
        </Button>
      </div>
    </form>
  );
};
