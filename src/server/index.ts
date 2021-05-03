console.clear()

import loadEnvFile from "./load-env-file"

loadEnvFile()

import App from "../app"
import validateEnv from "./validate-env"
import testDatabaseConnection from "./teste-database-connection"

validateEnv({
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  jwtSecret: process.env.JWT_SECRET
})

;(async () => {
  await testDatabaseConnection()

  const HOST = process.env.HOST || "localhost"
  const PORT = parseInt(process.env.PORT!)
  App.listen(PORT, HOST, () => console.log(`Server started at: ${HOST}:${process.env.PORT}`))
})()
