"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const databaseConfig = require("./config");
const config = databaseConfig.development;
const { database, username, password } = config;
class SequelizeSingleton {
    constructor() { }
    static getInstance() {
        if (!SequelizeSingleton.instance) {
            SequelizeSingleton.instance = new sequelize_1.Sequelize(database, username, password, config);
            console.log(`[SEQUELIZE_INSTANCE: ${SequelizeSingleton.counter}] CREATED NEW INSTANCE`);
            SequelizeSingleton.counter = SequelizeSingleton.counter + 1;
        }
        if (SequelizeSingleton.counter > 1) {
            throw new Error("[SEQUELIZE_INSTANCE] too many instances for a singleton");
        }
        return SequelizeSingleton.instance;
    }
}
SequelizeSingleton.instance = null;
SequelizeSingleton.counter = 0;
exports.default = SequelizeSingleton.getInstance();
