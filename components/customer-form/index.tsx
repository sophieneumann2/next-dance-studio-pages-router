import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface ICustomerFormProps {
  additionalOnSubmit?: () => void;
}
export default function CustomerForm({
  additionalOnSubmit = () => {},
}: ICustomerFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      conditionsAccepted: false,
    },
  });

  useEffect(() => {
    console.log({ isSubmitSuccessful });
    if (isSubmitSuccessful) {
      additionalOnSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log({ data });
        })}
        className="flex flex-col gap-4 items-start justify-start max-w-sm"
      >
        <div>
          {' '}
          <input
            {...register('firstName', {
              required: 'This is required.',
            })}
            placeholder="First Name"
            className="text-black p-1"
          />
          <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
        </div>
        <div>
          {' '}
          <input
            {...register('lastName', { required: 'This is required.' })}
            placeholder="Last Name"
            className="text-black p-1"
          />
          <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
        </div>

        <div>
          <input
            {...register('email', {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'Must be a valid email.',
              },
            })}
            placeholder="E-mail"
            className="text-black p-1"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          {' '}
          <div>
            {' '}
            <input
              {...register('conditionsAccepted', {
                required: 'This is required.',
              })}
              type="checkbox"
              className="text-black p-1"
            />{' '}
            <span>
              I accept to be filmed during the class. I accept all terms and
              conditions.
            </span>
          </div>
          <p className="text-red-500 text-sm">
            {errors.conditionsAccepted?.message}
          </p>
        </div>

        <input
          type="submit"
          className="bg-purple-700 rounded-full p-2 hover:cursor-pointer"
          value={'Book classes'}
        />
      </form>
    </div>
  );
}
