"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const list_1 = __importDefault(require("../controllers/barbers/list"));
const router = express_1.default.Router();
router.get("/barbers", list_1.default);
// GLOBALS
router.get("/node-env", (_, res) => res.send(process.env.NODE_ENV || "NODE_ENV not defined"));
router.use((req, res) => {
    res
        .status(404)
        .send(`Sorry, the server cannot find anything at "[${req.method}] ${req.originalUrl}"`);
});
const setUpRoutes = (App) => {
    // Only one inside here so it can be out of /api endpoint
    App.get("/", (_, res) => {
        res.send("Welcome to the CorteEmCasa API");
    });
    App.use("/api", router);
};
exports.default = setUpRoutes;
