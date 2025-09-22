"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAP_GRPC_SERVICE_NAME = exports.MAP_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.MapGrpcServiceControllerMethods = MapGrpcServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "map";
exports.MAP_PACKAGE_NAME = "map";
function MapGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "getMapList",
            "getCurrentMap",
            "getCloud",
            "saveCloud",
            "getTopology",
            "saveTopology",
            "load",
            "mapping",
            "uploadMap",
            "downloadMap",
            "publishMap",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("MapGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("MapGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.MAP_GRPC_SERVICE_NAME = "MapGrpcService";
