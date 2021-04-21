"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, "../../.env")
});
const App = express_1.default();
const PORT = process.env.PORT || 5000;
App.get("/", (_, res) => {
    res.send("Welcome to Corte em Casa API");
});
App.listen(PORT, () => console.log(`Corte em Casa API started on Port: ${PORT}`));
