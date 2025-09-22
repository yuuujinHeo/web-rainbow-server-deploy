"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traceInterceptor = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const traceInterceptor = (service) => (options, nextCall) => {
    return new grpc_js_1.InterceptingCall(nextCall(options), {
        start: function (metadata, listener, next) {
            metadata.set('client-service', service);
            next(metadata, listener);
        },
    });
};
exports.traceInterceptor = traceInterceptor;
