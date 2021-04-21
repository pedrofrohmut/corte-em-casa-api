import express, { Application, Request, Response } from "express"

import listBarbers from "../controllers/barbers/list"

const router = express.Router()

router.get("/barbers", listBarbers)

// GLOBALS
router.get("/node-env", (_: Request, res: Response) =>
  res.send(process.env.NODE_ENV || "NODE_ENV not defined")
)

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
