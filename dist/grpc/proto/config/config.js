"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG_GRPC_SERVICE_NAME = exports.CONFIG_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.ConfigGrpcServiceControllerMethods = ConfigGrpcServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "config";
exports.CONFIG_PACKAGE_NAME = "config";
function ConfigGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "getConfig",
            "setConfig",
            "getConfigAll",
            "setConfigs",
            "deleteConfig",
            "deleteConfigs",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("ConfigGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("ConfigGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.CONFIG_GRPC_SERVICE_NAME = "ConfigGrpcService";
