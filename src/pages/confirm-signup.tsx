import { NextPage } from "next"
import { BoxConfirmSignUp } from "../components/organisms/BoxConfirmSignUp"
import { BaseForm } from "../components/template/BaseForm"

const ConfirmSignUp: NextPage = () => {
  return (
    <BaseForm>
      <BoxConfirmSignUp />
    </BaseForm>
  )
}

export default ConfirmSignUp