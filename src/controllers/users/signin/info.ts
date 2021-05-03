import { Request, Response } from "express"

const SignInInfoController = (request: Request, response: Response) => {
  response.status(200).json({ message: "Sign In Info Controller says Hi!" })
}

export default SignInInfoController
