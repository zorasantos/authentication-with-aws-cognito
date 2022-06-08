import { InputHTMLAttributes, useEffect, useState } from 'react';
import { useFormContext, useController } from 'react-hook-form';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  icon?: boolean;
}

type StatusProps = 'default' | 'disabled' | 'success' | 'error';

type CaptionFieldProps = {
  text: string;
  color: 'error' | 'success' | 'default' | 'disabled';
}

export const Input = ({ name, ...rest }: InputProps) => {
  const { control } = useFormContext();
  const {
    field: { value, ...field },
    formState: { errors, touchedFields, isSubmitted }
  } = useController({ name, control, defaultValue: '' });

  const isError = errors && errors[name];
  const isTouchedField = touchedFields[name] || isSubmitted;

  const [ statusField, setStatusField ] = useState<StatusProps>('default')

  useEffect(() => {
    if(isError) {
      setStatusField(isTouchedField ? 'error' : 'default');
    } else {
      setStatusField(value ? 'success' : 'default')
    }
  }, [ isError, value, isTouchedField ])

  const captionField: CaptionFieldProps[] =
    isError && isTouchedField ? [{ text: String(isError.message), color: 'error' }] : [];

  return (
    <input
      {...rest}
      {...field}
      name={name}
      value={value}
      color={statusField}
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
    />
  );
}