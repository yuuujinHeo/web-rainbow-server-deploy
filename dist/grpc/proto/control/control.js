"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTROL_GRPC_SERVICE_NAME = exports.CONTROL_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.ControlGrpcServiceControllerMethods = ControlGrpcServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "control";
exports.CONTROL_PACKAGE_NAME = "control";
function ControlGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "onOffControl",
            "workControl",
            "ledControl",
            "setSafetyField",
            "getSafetyField",
            "exAccessoryControl",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("ControlGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("ControlGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.CONTROL_GRPC_SERVICE_NAME = "ControlGrpcService";
