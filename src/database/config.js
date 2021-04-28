module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
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
