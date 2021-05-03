const validatePort = (port: string | undefined): boolean => {
  if (port === undefined || port === "") return false
  return !isNaN(parseInt(port))
}

const validateNodeEnv = (nodeEnv: string | undefined): boolean => {
  if (nodeEnv === undefined || nodeEnv === "") return false
  return nodeEnv === "development" || nodeEnv == "production" || nodeEnv == "testing"
}

const validateJwtSecret = (jwtSecret: string | undefined): boolean => {
  if (jwtSecret === undefined || jwtSecret === "") return false
  return jwtSecret.length === 16
}

const checkPort = (port: string | undefined): void => {
  const isValidPort = validatePort(port)
  if (!isValidPort) {
    console.error("ERROR => [PORT] Not a valid Server PORT number in the ENV")
    process.exit(1)
  } else {
    console.log(`[PORT] Server is running on port ${process.env.PORT}`)
  }
}

const checkNodeEnv = (nodeEnv: string | undefined): void => {
  const isValidNodeEnv = validateNodeEnv(nodeEnv)
  if (!isValidNodeEnv) {
    console.error("ERROR => [NODE_ENV] There is not a valid NODE_ENV in this server env")
    process.exit(1)
  } else {
    console.log(`[NODE_ENV] Node server is running in with NODE_ENV set to "${nodeEnv}"`)
  }
}

const checkJwtSecret = (jwtSecret: string | undefined): void => {
  const isValidJwtSecret = validateJwtSecret(jwtSecret)
  if (!isValidJwtSecret) {
    console.error("ERROR => [JWT_SECRET] There is not a valid JWT_SECRET in this server env")
    process.exit(1)
  } else {
    console.log("[JWT_SECRET] Server is running with a valid JWT_SECRET")
  }
}

type CheckEnvArgs = {
  port?: string
  nodeEnv?: string
  jwtSecret?: string
}

const validateEnv = ({ port, nodeEnv, jwtSecret }: CheckEnvArgs): void => {
  checkPort(port)
  checkNodeEnv(nodeEnv)
  checkJwtSecret(jwtSecret)
}

export default validateEnv
