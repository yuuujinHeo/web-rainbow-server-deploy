"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcCodeException = void 0;
const microservices_1 = require("@nestjs/microservices");
class RpcCodeException extends microservices_1.RpcException {
    constructor(details, statusCode) {
        super({ details: details, code: statusCode });
        this.statusCode = statusCode;
    }
}
exports.RpcCodeException = RpcCodeException;
