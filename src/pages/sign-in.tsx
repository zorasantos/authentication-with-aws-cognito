import { NextPage } from "next"
import { BoxSignIn } from "../components/organisms/BoxSignIn"
import { BaseForm } from "../components/template/BaseForm"

const SignIn: NextPage = () => {
  return (
    <BaseForm>
      <BoxSignIn />
    </BaseForm>
  )
}

export default SignIn