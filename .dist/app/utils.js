"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNodeEnv = void 0;
const validateNodeEnv = (nodeEnv) => {
    if (nodeEnv === undefined || nodeEnv === "")
        return false;
    return nodeEnv === "development" || nodeEnv == "production" || nodeEnv == "testing";
};
exports.validateNodeEnv = validateNodeEnv;
