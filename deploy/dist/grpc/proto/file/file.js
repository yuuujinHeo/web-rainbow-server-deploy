"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE_GRPC_SERVICE_NAME = exports.FILE_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.FileGrpcServiceControllerMethods = FileGrpcServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "file";
exports.FILE_PACKAGE_NAME = "file";
function FileGrpcServiceControllerMethods() {
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
            (0, microservices_1.GrpcMethod)("FileGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("FileGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.FILE_GRPC_SERVICE_NAME = "FileGrpcService";
