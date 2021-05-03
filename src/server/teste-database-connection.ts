import sequelize from "../database/sequelize-instance"

const testDatabaseConnection = async (): Promise<void> => {
  try {
    await sequelize.authenticate()
    console.log(
      "[AUTHENTICATE_CONNECTION] Connection to database, with sequelize, authenticated successfully"
    )
  } catch (err) {
    console.error("ERROR => [AUTHENTICATE_CONNECTION] Unable to connect to the database", err)
    process.exit(1)
  }
}

export default testDatabaseConnection
