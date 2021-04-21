import express from "express"
import dotenv from "dotenv"
import path from "path"

dotenv.config({
  path: path.resolve(__dirname, "../../.env")
})

const App = express()

const PORT = process.env.PORT || 5000

App.get("/", (_, res) => {
  res.send("Welcome to Corte em Casa API")
})

App.listen(PORT, () => console.log(`Corte em Casa API started on Port: ${PORT}`))
