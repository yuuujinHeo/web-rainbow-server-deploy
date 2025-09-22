"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCALIZATION_GRPC_SERVICE_NAME = exports.LOCALIZATION_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.LocalizationGrpcServiceControllerMethods = LocalizationGrpcServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "localization";
exports.LOCALIZATION_PACKAGE_NAME = "localization";
function LocalizationGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["init", "autoInit", "randomInit", "semiAutoInit", "start", "stop"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("LocalizationGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("LocalizationGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.LOCALIZATION_GRPC_SERVICE_NAME = "LocalizationGrpcService";
