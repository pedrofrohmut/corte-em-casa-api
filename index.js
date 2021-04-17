const express = require("express")

const App = express()

const PORT = process.env.PORT || 5000

App.get("/", (_, res) => {
  res.send("Hello World")
})

App.listen(PORT, () => console.log(`Corte em Casa API started on Port: ${PORT}`))
