export const validateNodeEnv = (nodeEnv: string | undefined) => {
  if (nodeEnv === undefined || nodeEnv === "") return false
  return nodeEnv === "development" || nodeEnv == "production" || nodeEnv == "testing"
}
