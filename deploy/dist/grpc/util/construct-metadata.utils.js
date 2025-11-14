"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructMetadata = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const uuid_1 = require("uuid");
const constructMetadata = (callerClass, callerMethod, prevMetadata) => {
    const metadata = prevMetadata ?? new grpc_js_1.Metadata();
    const traceId = metadata.getMap()['trace-id'] ?? (0, uuid_1.v4)();
    metadata.set('trace-id', traceId.toString());
    metadata.set('client-class', callerClass);
    metadata.set('client-method', callerMethod);
    return metadata;
};
exports.constructMetadata = constructMetadata;
