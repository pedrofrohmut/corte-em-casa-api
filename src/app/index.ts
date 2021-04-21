import express from "express"
import dotenv from "dotenv"
import path from "path"

import setUpRoutes from "./routes"
import setUpMiddlewares from "./middlewares"
import { validateNodeEnv } from "./utils"

dotenv.config({
  path: path.resolve(__dirname, "../../.env")
})

const isValidNodeEnv = validateNodeEnv(process.env.NODE_ENV)
if (!isValidNodeEnv) {
  console.error("There is not a valid NODE_ENV in this server")
  process.exit(1)
}

console.log(`[NODE_ENV] Node server is running in with NODE_ENV set to "${process.env.NODE_ENV}"`)

const App = express()

setUpMiddlewares(App)
setUpRoutes(App)

export default App
