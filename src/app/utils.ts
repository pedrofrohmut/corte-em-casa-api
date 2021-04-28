import path from "path"

export const validateNodeEnv = (nodeEnv: string | undefined) => {
  if (nodeEnv === undefined || nodeEnv === "") return false
  return nodeEnv === "development" || nodeEnv == "production" || nodeEnv == "testing"
}

export const getEnvPath = (nodeEnv: string | undefined) => {
  let envPath = undefined
  switch (nodeEnv) {
    case "development":
      envPath = path.resolve(__dirname + "/../../.env.development")
      break
    case "testing":
      envPath = path.resolve(__dirname + "/../../.env.testing")
      break
    case "production":
      envPath = path.resolve(__dirname + "/../../.env")
      break
  }
  console.log(`[ENV_PATH] The env path is: ${envPath}`)
  return envPath
}
