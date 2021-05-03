import { hash } from "bcryptjs"

import UserModel from "../../database/models/user"
import { validateName, validateEmail, validatePassword } from "../../validators/users"

type Args = {
  name: string
  email: string
  password: string
}

const createUserService = async ({ name, email, password }: Args): Promise<UserModel | null> => {
  const nameValidationMessage = validateName(name)
  if (nameValidationMessage !== "") {
    throw new Error(nameValidationMessage)
  }
  const emailValidationMessage = validateEmail(email)
  if (emailValidationMessage !== "") {
    throw new Error(emailValidationMessage)
  }
  const passwordValidationMessage = validatePassword(password)
  if (passwordValidationMessage !== "") {
    throw new Error(passwordValidationMessage)
  }
  try {
    const passwordHash = await hash(password, 8)
    const createdUser = await UserModel.create({ name, email, password_hash: passwordHash })
    return createdUser
  } catch (err) {
    throw new Error(`Error to create an user: ${err}`)
  }
}

export default createUserService
