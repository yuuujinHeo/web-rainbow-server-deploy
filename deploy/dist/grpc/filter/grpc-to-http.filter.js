"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcToHttpFilter = void 0;
const common_1 = require("@nestjs/common");
const logger_1 = require("../../logger");
const constant_1 = require("../constant");
let GrpcToHttpFilter = class GrpcToHttpFilter {
    constructor() {
        this.loggerService = logger_1.LoggerService.get('filter');
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        try {
            if (exception instanceof Error) {
                if ('code' in exception && 'details' in exception) {
                    const statusCode = mapGrpcToHttpStatus(exception.code);
                    this.loggerService.info(`[Grpc] RpcException : ${exception.details} ${statusCode}(${exception.code})`);
                    return response.status(statusCode).json({
                        statusCode,
                        message: exception.details,
                    });
                }
                else if (exception instanceof common_1.HttpException) {
                    const statusCode = exception.getStatus();
                    const message = exception.message;
                    this.loggerService.info(`[Grpc] caught HttpException : ${statusCode}, ${message}`);
                    return response.status(statusCode).json({ statusCode, message });
                }
                else {
                    this.loggerService.info(`[Grpc] caught Error : ${exception.message}`);
                    return response.status(500).json({
                        statusCode: 500,
                        message: exception.message,
                    });
                }
            }
            else {
                this.loggerService.info(`[Grpc] caught unknown Error : ${(0, logger_1.errorToJson)(exception)}`);
                return response.status(500).json({
                    statusCode: 500,
                    message: 'Internal server error',
                });
            }
        }
        catch (error) {
            this.loggerService.info(`[Grpc] caught unknown Error : ${(0, logger_1.errorToJson)(exception)}`);
            return response.status(500).json({
                statusCode: 500,
                message: 'Internal server error',
            });
        }
    }
};
exports.GrpcToHttpFilter = GrpcToHttpFilter;
exports.GrpcToHttpFilter = GrpcToHttpFilter = __decorate([
    (0, common_1.Catch)()
], GrpcToHttpFilter);
function mapGrpcToHttpStatus(code) {
    switch (code) {
        case constant_1.GrpcCode.OK:
            return common_1.HttpStatus.OK;
        case constant_1.GrpcCode.Cancelled:
            return 499;
        case constant_1.GrpcCode.Unknown:
            return common_1.HttpStatus.BAD_REQUEST;
        case constant_1.GrpcCode.InvalidArgument:
            return common_1.HttpStatus.BAD_REQUEST;
        case constant_1.GrpcCode.DeadlineExceeded:
            return common_1.HttpStatus.GATEWAY_TIMEOUT;
        case constant_1.GrpcCode.NotFound:
            return common_1.HttpStatus.NOT_FOUND;
        case constant_1.GrpcCode.AlreadyExists:
            return common_1.HttpStatus.CONFLICT;
        case constant_1.GrpcCode.PermissionDenied:
            return common_1.HttpStatus.FORBIDDEN;
        case constant_1.GrpcCode.ResourceExhausted:
            return common_1.HttpStatus.TOO_MANY_REQUESTS;
        case constant_1.GrpcCode.FailedPrecondition:
            return common_1.HttpStatus.BAD_REQUEST;
        case constant_1.GrpcCode.Aborted:
            return common_1.HttpStatus.CONFLICT;
        case constant_1.GrpcCode.OutOfRange:
            return common_1.HttpStatus.BAD_REQUEST;
        case constant_1.GrpcCode.Unimplemented:
            return common_1.HttpStatus.NOT_IMPLEMENTED;
        case constant_1.GrpcCode.InternalError:
            return common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        case constant_1.GrpcCode.Unavailable:
            return common_1.HttpStatus.SERVICE_UNAVAILABLE;
        case constant_1.GrpcCode.DataLoss:
            return common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        case constant_1.GrpcCode.Unauthenticated:
            return common_1.HttpStatus.UNAUTHORIZED;
        default:
            return common_1.HttpStatus.INTERNAL_SERVER_ERROR;
    }
}
