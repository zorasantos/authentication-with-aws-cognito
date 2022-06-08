import * as yup from 'yup';

export const schema = yup.object().shape({
  username: yup
    .string()
    .required('Required Field!')
    .test('is-required', 'Invalid Email', (value: string | undefined) => {
      const maskEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      return value ? maskEmail.test(value) : true;
    }),
    password: yup.string().required('Required Field!')
})