"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const databaseConfig = require("./config");
const config = databaseConfig.development;
const { database, username, password } = config;
const sequelize = new sequelize_1.Sequelize(database, username, password, config);
exports.default = sequelize;
