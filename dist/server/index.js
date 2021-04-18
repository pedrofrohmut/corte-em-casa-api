"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = express_1.default();
var PORT = process.env.PORT || 5000;
App.get("/", function (_, res) {
    res.send("Hello Heroku with Typescript");
});
App.listen(PORT, function () { return console.log("Corte em Casa API started on Port: " + PORT); });
