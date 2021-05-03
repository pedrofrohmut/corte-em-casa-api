import { compare } from "bcryptjs"

import { validatePassword } from "../../validators/users"

const validatePasswordService = async (
  password: string | undefined,
  passwordHash: string | undefined
): Promise<boolean> => {
  const passwordValidationMessage = validatePassword(password)
  if (passwordValidationMessage !== "") {
    throw new Error(passwordValidationMessage)
  }
  if (passwordHash === undefined || passwordHash === "") {
    throw new Error("There is no password hash to verify the password passed")
  }
  try {
    // Password is validated at the top not to be undefined
    const isMatch = await compare(password!, passwordHash)
    return isMatch
  } catch (err) {
    throw new Error(`Error to match password and hash: ${err}`)
  }
}

export default validatePasswordService
