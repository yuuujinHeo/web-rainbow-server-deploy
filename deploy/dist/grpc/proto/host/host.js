"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOST_UPDATE_GRPC_SERVICE_NAME = exports.HOST_FILE_GRPC_SERVICE_NAME = exports.HOST_MAP_GRPC_SERVICE_NAME = exports.HOST_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.HostMapGrpcServiceControllerMethods = HostMapGrpcServiceControllerMethods;
exports.HostFileGrpcServiceControllerMethods = HostFileGrpcServiceControllerMethods;
exports.HostUpdateGrpcServiceControllerMethods = HostUpdateGrpcServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "host";
exports.HOST_PACKAGE_NAME = "host";
function HostMapGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["readMapList", "readMapFile"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("HostMapGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("HostMapGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.HOST_MAP_GRPC_SERVICE_NAME = "HostMapGrpcService";
function HostFileGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "readFileList",
            "readFile",
            "createFile",
            "updateFile",
            "deleteFile",
            "uploadFile",
            "downloadFile",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("HostFileGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("HostFileGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.HOST_FILE_GRPC_SERVICE_NAME = "HostFileGrpcService";
function HostUpdateGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "testPing",
            "getNewVersion",
            "getCurrentVersion",
            "getReleaseBranch",
            "getReleaseVersion",
            "addWebUi",
            "deleteWebUi",
            "updateProgram",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("HostUpdateGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("HostUpdateGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.HOST_UPDATE_GRPC_SERVICE_NAME = "HostUpdateGrpcService";
