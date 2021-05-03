import { validateEmail, validatePassword } from "../../../validators/users"

type Args = {
  email?: string
  password?: string
}

const validateRequestBody = ({ email, password }: Args): string => {
  const emailValidationMessage = validateEmail(email)
  if (emailValidationMessage !== "") {
    return emailValidationMessage
  }
  const passwordValidationMessage = validatePassword(password)
  if (passwordValidationMessage !== "") {
    return passwordValidationMessage
  }
  return ""
}

export default validateRequestBody
