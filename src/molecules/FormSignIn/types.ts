export type FormDataProps = {
  username: string;
  password: string;
}

export interface FormSignInProps {
  onSubmit: (values: FormDataProps) => void
}