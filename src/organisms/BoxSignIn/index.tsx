import { FormSignIn } from "../../molecules/FormSignIn"

export const BoxSignIn = () => {
  const HandleSignIn = () => {
    return 'Return'
  }

  return (
    <>
      <FormSignIn onSubmit={HandleSignIn} />
    </>
  );
}