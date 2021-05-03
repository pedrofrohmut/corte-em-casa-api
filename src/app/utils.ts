import path from "path"

export const validateNodeEnv = (nodeEnv: string | undefined): boolean => {
  if (nodeEnv === undefined || nodeEnv === "") return false
  return nodeEnv === "development" || nodeEnv == "production" || nodeEnv == "testing"
}

export const validateJwtSecret = (jwtSecret: string | undefined): boolean => {
  if (jwtSecret === undefined || jwtSecret === "") return false
  return jwtSecret.length === 16
}
