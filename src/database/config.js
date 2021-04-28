module.exports = {
  development: {
    username: "devuser",
    password: "badbd2515",
    database: "corte-em-casa-development",
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      schema: "public"
    }
  },
  test: {
    dialect: "sqlite",
    storage: "./__tests__/database.sqlite",
    logging: false,
    define: {
      timestamps: true,
      underscored: true
    }
  },
  production: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: ""
  }
}
