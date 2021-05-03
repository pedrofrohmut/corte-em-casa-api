import UserModel from "../../database/models/user"
import { validateEmail } from "../../validators/users"

const findUserByEmailService = async (email: string): Promise<UserModel | null> => {
  const emailValidationMessage = validateEmail(email)
  if (emailValidationMessage !== "") {
    throw new Error(emailValidationMessage)
  }
  try {
    const foundUser = await UserModel.findOne({ where: { email } })
    return foundUser
  } catch (err) {
    throw new Error(`Error to find user: ${err}`)
  }
}

export default findUserByEmailService
