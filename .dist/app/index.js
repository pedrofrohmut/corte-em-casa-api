"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const middlewares_1 = __importDefault(require("./middlewares"));
const utils_1 = require("./utils");
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, "../../.env")
});
const isValidNodeEnv = utils_1.validateNodeEnv(process.env.NODE_ENV);
if (!isValidNodeEnv) {
    console.error("There is not a valid NODE_ENV in this server");
    process.exit(1);
}
console.log(`[NODE_ENV] Node server is running in with NODE_ENV set to "${process.env.NODE_ENV}"`);
const App = express_1.default();
middlewares_1.default(App);
routes_1.default(App);
exports.default = App;
