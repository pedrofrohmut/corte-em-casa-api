import { Request, Response } from "express"

import findUserByEmailService from "../../../services/users/find-by-email"
import generateTokenService from "../../../services/users/generate-token"
import validatePasswordService from "../../../services/users/validate-password"

import validateRequestBody from "./validate-request-body"

/**
 * POST api/users/signin
 * BODY {
 *  email: string
 *  password: string
 * }
 */
const SignInController = async (request: Request, response: Response) => {
  const validationMessage = validateRequestBody(request.body)
  if (validationMessage !== "") {
    return response.status(400).json({
      error: "The request body is not valid",
      validationMessage
    })
  }
  const { email, password } = request.body
  const foundUser = await findUserByEmailService(email)
  if (!foundUser) {
    return response.status(400).json({
      error: `No user found with the passed e-mail: ${email}`
    })
  }
  const isValidPassword = await validatePasswordService(password, foundUser.password_hash)
  if (!isValidPassword) {
    return response.status(400).json({
      error: `The password is not valid or does not match the e-mail`
    })
  }
  const token = await generateTokenService(foundUser.id)
  if (!token) {
    return response.status(500).json({
      error: `Server could not generate a auth token`
    })
  }
  response.status(200).json({
    data: {
      token
    },
    message: "User signed in",
    action: "SignInController [POST]"
  })
}

export default SignInController
