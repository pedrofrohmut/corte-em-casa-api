"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConnection = void 0;
const sequelize_instance_1 = __importDefault(require("../database/sequelize-instance"));
const testConnection = async () => {
    let canAuthenticate = false;
    try {
        canAuthenticate = await sequelize_instance_1.default.authenticate();
        console.log("[AUTHENTICATE_CONNECTION] Connection to database, with sequelize, authenticated successfully");
    }
    catch (err) {
        console.error("Unable to connect to the database", err);
        process.exit(1);
    }
    return canAuthenticate;
};
exports.testConnection = testConnection;
