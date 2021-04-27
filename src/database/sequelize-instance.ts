import { Sequelize } from "sequelize"

const databaseConfig = require("./config")

const config = databaseConfig.development
const { database, username, password } = config

class SequelizeSingleton {
  private static instance: any = null
  private static counter: number = 0

  private constructor() {}

  public static getInstance() {
    if (!SequelizeSingleton.instance) {
      SequelizeSingleton.instance = new Sequelize(database, username, password, config)
      console.log(`[SEQUELIZE_INSTANCE: ${SequelizeSingleton.counter}] CREATED NEW INSTANCE`)
      SequelizeSingleton.counter = SequelizeSingleton.counter + 1
    }
    if (SequelizeSingleton.counter > 1) {
      throw new Error("[SEQUELIZE_INSTANCE] too many instances for a singleton")
    }
    return SequelizeSingleton.instance
  }
}

export default SequelizeSingleton.getInstance()
