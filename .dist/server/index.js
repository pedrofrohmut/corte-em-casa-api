"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const utils_1 = require("./utils");
(async () => {
    await utils_1.testConnection();
})();
if (!process.env.PORT) {
    console.error("Not a valid Server PORT number in the ENV");
    process.exit(1);
}
app_1.default.listen(process.env.PORT, () => console.log(`[PORT] Corte em Casa API started on Port: ${process.env.PORT}`));
