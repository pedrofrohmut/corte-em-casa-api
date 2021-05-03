import dotenv from "dotenv"
import path from "path"

const configureEnv = () => {
  // Must configure env here or Sequelize breaks
  let envPath = undefined
  switch (process.env.NODE_ENV) {
    case "development":
      envPath = ".env.development"
      break
    case "production":
      envPath = ".env"
      break
    case "testing":
      envPath = ".env.testing"
  }
  dotenv.config({ path: path.resolve(__dirname + "/../../" + envPath) })
}

export default configureEnv
