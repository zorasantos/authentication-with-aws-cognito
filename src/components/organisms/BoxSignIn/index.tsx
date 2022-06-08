import { FormSignIn } from "../../molecules/FormSignIn"
import { FormDataProps } from "../../molecules/FormSignIn/types";

export const BoxSignIn = () => {
  const handleSubmit = (formData: FormDataProps) => {
    console.log('formData', formData)
    return formData
  }

  return (
    <>
      <FormSignIn onSubmit={handleSubmit} />
    </>
  );
}