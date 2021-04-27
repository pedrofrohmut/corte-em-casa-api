import App from "../app"
import { testConnection } from "./utils"

;(async () => {
  await testConnection()
})()

if (!process.env.PORT) {
  console.error("Not a valid Server PORT number in the ENV")
  process.exit(1)
}

App.listen(process.env.PORT, () =>
  console.log(`[PORT] Corte em Casa API started on Port: ${process.env.PORT}`)
)
