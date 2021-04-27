"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_instance_1 = __importDefault(require("../sequelize-instance"));
const UserModel = sequelize_instance_1.default.define("user", {
    name: sequelize_1.DataTypes.STRING,
    email: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.VIRTUAL,
    password_hash: sequelize_1.DataTypes.STRING
}, {
    // hooks: {
    //   beforeValidate: async (user, options) => {
    //     if (user.password) {
    //       user.password_hash = await bcrypt.hash(user.password, 8)
    //     }
    //   }
    // },
    underscored: true,
    timestamps: true
});
exports.default = UserModel;
