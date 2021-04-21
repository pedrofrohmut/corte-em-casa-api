"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// TODO: Check if CORS is needed
const setUpMiddlewares = (App) => {
    App.use(express_1.default.json());
    App.use(express_1.default.urlencoded({ extended: false }));
};
exports.default = setUpMiddlewares;
