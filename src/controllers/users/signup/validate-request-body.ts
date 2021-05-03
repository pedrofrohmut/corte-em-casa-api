import { validateEmail, validateName, validatePassword } from "../../../validators/users"

type Args = {
  name?: string
  email?: string
  password?: string
}

const validateRequestBody = ({ name, email, password }: Args): string => {
  const nameValidationMessage = validateName(name)
  if (nameValidationMessage !== "") {
    return nameValidationMessage
  }
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
