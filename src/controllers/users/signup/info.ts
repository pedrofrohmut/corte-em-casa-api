import { Request, Response } from "express"

const SignUpInfoController = (_: Request, response: Response) => {
  return response.status(200).json({
    name: "Name must be between 2 and 120 characters",
    email: "E-mail must match e-mail pattern and be complete with @ and domain",
    password: "Password must be between 4 and 32 characters with no blank spaces"
  })
}

export default SignUpInfoController
