import { sign } from "jsonwebtoken"
import { validateId } from "../../validators/users"

const generateTokenService = async (userId: string | undefined): Promise<string | null> => {
  const idValidationMessage = validateId(userId)
  if (idValidationMessage !== "") {
    throw new Error(idValidationMessage)
  }
  if (!process.env.JWT_SECRET) {
    throw new Error("Not a valid JwtSecret in this server env")
  }
  try {
    const token = sign({ id: userId }, process.env.JWT_SECRET)
    return token
  } catch (err) {
    throw new Error(`Error to generate token: ${err}`)
  }
}

export default generateTokenService
