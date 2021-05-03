import { Request, Response } from "express"

const ValidateTokenController = (request: Request, response: Response) => {
  response.status(200).json({ message: "Validate Token Controller says Hi!" })
}

export default ValidateTokenController
