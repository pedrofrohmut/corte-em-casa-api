import { Request, Response } from "express"

import createUserService from "../../../services/users/create"
import findUserByEmailService from "../../../services/users/find-by-email"

import validateRequestBody from "./validate-request-body"

/**
 * POST api/users/signup
 * BODY {
 *  name: string
 *  email: string
 *  password: string
 * }
 */
const SignUpController = async (request: Request, response: Response) => {
  const validationMessage = validateRequestBody(request.body)
  if (validationMessage !== "") {
    return response.status(400).json({
      error: "The request body is not valid",
      validationMessage
    })
  }
  const { name, email, password } = request.body
  const foundUser = await findUserByEmailService(email)
  if (foundUser !== null) {
    return response.status(400).json({ error: `The e-mail passed is already been used` })
  }
  const createdUser = await createUserService({ name, email, password })
  if (createdUser === null) {
    return response.status(500).json({ error: `User could not be created` })
  }
  return response.status(201).json({
    message: "User created",
    action: "SignUpController [POST]"
  })
}

export default SignUpController
