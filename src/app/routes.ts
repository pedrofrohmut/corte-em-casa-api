import express, { Application, Request, Response } from "express"

import SignInController from "../controllers/users/signin"
import SignInInfoController from "../controllers/users/signin/info"
import SignUpController from "../controllers/users/signup"
import SignUpInfoController from "../controllers/users/signup/info"
import ValidateTokenController from "../controllers/users/validate-token"
import ValidateTokenInfoController from "../controllers/users/validate-token/info"

const router = express.Router()

router.post("/users/signin", SignInController)
router.get("/users/signin/info", SignInInfoController)
router.post("/users/signup", SignUpController)
router.get("/users/signup/info", SignUpInfoController)
router.get("/users/validate-token", ValidateTokenController)
router.get("/users/validate-token/info", ValidateTokenInfoController)

// GLOBALS
router.use((req: Request, res: Response) => {
  res
    .status(404)
    .send(`Sorry, the server cannot find anything at "[${req.method}] ${req.originalUrl}"`)
})

const setUpRoutes = (App: Application) => {
  // Only one inside here so it can be out of /api endpoint
  App.get("/", (_: Request, res: Response) => {
    res.send("Welcome to the CorteEmCasa API")
  })
  App.use("/api", router)
}

export default setUpRoutes
