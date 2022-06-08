import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../../atoms/Input';
import { schema } from './schema';
import { FormSignInProps } from "./types";

export const FormSignIn = ({ onSubmit }: FormSignInProps) => {
  const formMethods = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: { username: '', password: '' }
  });

  return (
    <FormProvider {...formMethods}>
      <form
        className="mt-8 space-y-6"
        onSubmit={formMethods.handleSubmit(onSubmit)}
        noValidate
      >
        <div className="rounded-md shadow-sm -space-y-px">
          <Input
            id="username"
            name="username"
            label=''
            type="username"
            autoComplete="username"
            required
            placeholder="Email address"
          />

          <Input
            id="password"
            label='lksjrhngl'
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password"
          />
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </div>
      </form>
    </FormProvider>
  );
}