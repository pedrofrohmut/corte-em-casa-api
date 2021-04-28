import express from "express"
import dotenv from "dotenv"

import setUpRoutes from "./routes"
import setUpMiddlewares from "./middlewares"
import { validateNodeEnv, getEnvPath } from "./utils"

const isValidNodeEnv = validateNodeEnv(process.env.NODE_ENV)
if (!isValidNodeEnv) {
  console.error("There is not a valid NODE_ENV in this server")
  process.exit(1)
}

dotenv.config({ path: getEnvPath(process.env.NODE_ENV) })

console.log(`[NODE_ENV] Node server is running in with NODE_ENV set to "${process.env.NODE_ENV}"`)

const App = express()

setUpMiddlewares(App)
setUpRoutes(App)

export default App
