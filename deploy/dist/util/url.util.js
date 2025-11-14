"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlUtil = void 0;
const uuid_1 = require("uuid");
class UrlUtil {
    static generateUUID() {
        return (0, uuid_1.v4)();
    }
}
exports.UrlUtil = UrlUtil;
