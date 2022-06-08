import { NextPage } from "next"
import { BoxSignUp } from "../components/organisms/BoxSignUp"
import { BaseForm } from "../components/template/BaseForm"

const SignUp: NextPage = () => {
  return (
    <BaseForm>
      <BoxSignUp />
    </BaseForm>
  )
}

export default SignUp