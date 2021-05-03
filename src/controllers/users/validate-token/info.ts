import { Request, Response } from "express"

const ValidateTokenInfoController = (request: Request, response: Response) => {
  response.status(200).json({ message: "Validate Token Info Controller says Hi!" })
}

export default ValidateTokenInfoController
