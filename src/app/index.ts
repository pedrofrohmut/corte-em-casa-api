import express from "express"

import setUpRoutes from "./routes"
import setUpMiddlewares from "./middlewares"

const App = express()

setUpMiddlewares(App)
setUpRoutes(App)

export default App
