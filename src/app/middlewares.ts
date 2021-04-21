import express, { Application } from "express"

// TODO: Check if CORS is needed

const setUpMiddlewares = (App: Application) => {
  App.use(express.json())
  App.use(express.urlencoded({ extended: false }))
}

export default setUpMiddlewares
