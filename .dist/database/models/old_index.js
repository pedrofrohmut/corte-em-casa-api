"use strict";
// import fs from "fs"
// import path from "path"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Working Sequelize instance
const instance_1 = __importDefault(require("../instance"));
const user_1 = __importDefault(require("./user"));
const db = {};
// let sequelize
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config)
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config)
// }
// const sequelize = new Sequelize(config.database, config.username, config.password, config)
// fs.readdirSync(__dirname)
//   .filter(file => {
//     console.log(file)
//     return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
//     db[model.name] = model
//   })
db["User"] = user_1.default(instance_1.default, sequelize_1.DataTypes);
db["User"].associate(db);
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db)
//   }
// })
db.sequelize = instance_1.default;
db.Sequelize = sequelize_1.Sequelize;
// module.exports = db
exports.default = db;
// import { Sequelize } from "sequelize"
// const env = process.env.NODE_ENV || "development"
// const config = require("../config.js")[env]
// const sequelize = config.url
//   ? new Sequelize(config.url, config)
//   : new Sequelize(config.database, config.username, config.password, config)
// export { Sequelize, sequelize }
