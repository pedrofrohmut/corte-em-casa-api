import App from "../app"
import { testConnection } from "./utils"

import UserModel from "../database/models/user"

;(async () => {
  await testConnection()

  try {
    await UserModel.create({
      name: "Jane Doe",
      email: "jane@doe.com",
      password_hash: "123456"
    })
    console.log("!!! USER CREATED !!!")

    await UserModel.create({
      name: "John Doe",
      email: "john@doe.com",
      password_hash: "123456"
    })
    console.log("!!! USER CREATED !!!")
  } catch (err) {
    console.error("Error to create a user", err)
  }

  try {
    await UserModel.destroy({ truncate: true, force: true, cascade: true })
    console.log("!!! USERS TABLE TRUNCATED !!!")
  } catch (err) {
    console.error("Error to truncate users table", err)
  }
})()

if (!process.env.PORT) {
  console.error("Not a valid Server PORT number in the ENV")
  process.exit(1)
}

App.listen(process.env.PORT, () =>
  console.log(`[PORT] Corte em Casa API started on Port: ${process.env.PORT}`)
)
