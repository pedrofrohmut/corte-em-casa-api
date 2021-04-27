import sequelize from "../database/sequelize-instance"

export const testConnection = async (): Promise<boolean> => {
  let canAuthenticate = false
  try {
    canAuthenticate = await sequelize.authenticate()
    console.log("[AUTHENTICATE_CONNECTION] Connection to database, with sequelize, authenticated successfully")
  } catch (err) {
    console.error("Unable to connect to the database", err)
    process.exit(1)
  }
  return canAuthenticate
}
