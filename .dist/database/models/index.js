"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const user_1 = __importDefault(require("./user"));
const instance_1 = __importDefault(require("../instance"));
const User = user_1.default(instance_1.default, sequelize_1.DataTypes);
exports.default = {
    User
};
